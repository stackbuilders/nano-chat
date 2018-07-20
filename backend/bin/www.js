require('babel-register');

const http = require('http');
const app = require("../src/app").default;

if (!process.env.DB_CONN_NANOCHAT) {
    throw new Error("FATAL: Enviroment variable 'DB_CONN_NANOCHAT' is not set!");
}

const PORT = '3001';
app.set('port', PORT)

const server = http.createServer(app);
server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);


function onError(error) {
    console.error("Server error: ", error);
}

function onListening() {
    console.info('Listening on port ' + PORT);
}