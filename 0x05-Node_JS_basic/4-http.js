const http = require('http');

const host = '127.0.0.1';
const serverPort = 1245;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.end('Hello Holberton School!');
});

server.listen(serverPort, host, () => {
  console.log(`Server is up and running at http://${host}:${serverPort}`);
});

module.exports = server;
