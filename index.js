const http = require('http'); // inbilt to node
const server = http.createServer((req, res) => {
    res.statusCode = 404; // status code to display mistake
  res.end(); // creates the server and sends the response
});
server.listen(3000, () => {
  console.log('Server ready');
});

