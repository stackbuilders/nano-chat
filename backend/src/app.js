const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequalize = require('sequelize');
const crypto = require('crypto');

const SECRET = "SUPERSECRET";
const MAX_MESSAGES = 100;
const sequalize = new Sequalize('nanochat', 'nanochat', 'nanochat', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
});

const app = express();

const User = sequalize.define('user', {
  name: {
    type: Sequalize.STRING,
    field: 'name'
  },
  status: {
    type: Sequalize.BOOLEAN,
    field: 'status'
  },
  creationDate: {
    type: Sequalize.DATE,
    field: 'creation_date'
  },
  updateDate: {
    type: Sequalize.DATE,
    field: 'update_date'
  }
});

initializeDB().catch(handleError);

async function initializeDB() {
  const allSchemas = await sequalize.showAllSchemas({logging: false}).catch(handleError);

  if (!allSchemas.find((item) => item === 'nanochat')) {
    await sequalize.createSchema('nanochat', {logging: false}).catch(handleError);
    await User.schema('nanochat').sync({force: true}).catch(handleError);
    await User.schema('nanochat').create({
      name: 'Jose Luis Leon',
      status: true,
      creationDate: new Date()
    }).catch(handleError);
  }
}

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("../frontend/build"));

app.get('/api/users', (request, response) => {
  User.findAll({}).then((users) => {
    response.json(users);
  });
});

app.get('/api/users', async (request, response) => {
  const users = await User.findAll().catch(handleError);
  response.json(users);
});

module.exports = app;

function handleError(error) {
  console.error("ERROR HANDLER: " , error);
}



// Global array of the last messages sent by the users
var messages = [];

function getMessages() {
  return [...messages].reverse();
}

app.post('/api/login',
  (req, res) => {
    const username = req.body.username;
    if (!username) {
      return res.status(403).send("No username sent.");
    }
    const token = make_auth_token(username);
    res.send({auth_token: token});
  }
);

app.post('/api/messages', (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = verify_auth_token(token);
    if (user === null) {
      return res.status(401).send("Not authenticated.");
    }
    const message = req.body.message;
    if (typeof(message) !== "string") {
      return res.status(400).send("Invalid or no message provided.");
    }
    messages.unshift({sender: user, message});
    messages = messages.slice(0, MAX_MESSAGES);
    res.send(getMessages());
  }
);

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