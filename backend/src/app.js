import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import User from '../models/User';

const SECRET = "SUPERSECRET";
const MAX_MESSAGES = 100;
const app = express();

//addTestUser().catch(handleError);

async function addTestUser() {
    const name = 'Test User';
    await User.schema('nanochat').create({ name }).catch(handleError);
}

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("../frontend/build"));

app.get('/api/users', async (request, response) => {
    const users = await User.findAll().catch(handleError);
    response.json(users);
});

function handleError(error) {
    console.error("ERROR HANDLER: ", error);
}



// Global array of the last messages sent by the users
var messages = [];

function getMessages() {
    return [...messages].reverse();
}

app.post('/api/login', (req, res) => {
    const username = req.body.username;
    if (!username) {
        return res.status(403).send("No username sent.");
    }
    const token = make_auth_token(username);
    res.send({ auth_token: token });
});

app.post('/api/messages', (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = verify_auth_token(token);
    if (user === null) {
        return res.status(401).send("Not authenticated.");
    }
    const message = req.body.message;
    if (typeof (message) !== "string") {
        return res.status(400).send("Invalid or no message provided.");
    }
    messages.unshift({ sender: user, message });
    messages = messages.slice(0, MAX_MESSAGES);
    res.send(getMessages());
});

function verify_auth_token(token) {
    const username = token.split("###")[0];
    const valid_token = make_auth_token(username);
    if (valid_token === token) {
        return username;
    } else {
        return null;
    }
}

function make_auth_token(username) {
    const hash = crypto.createHash('sha256');
    hash.update(`${username}${SECRET}`);
    return `${username}###${hash.digest('hex')}`;
}

export default app;