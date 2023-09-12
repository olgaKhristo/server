
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {    
    res.send('Hello World!');
});

app,get('/chicken', (req, res) => {
    res.send('About Chicken');
});


app.get('/chicken/:name', (req, res) => {
    res.send(req.params);
});

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});







// const http = require('http'); // inbilt to node
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     console.log(req.method);
//     res.setHeader('Content-Type', 'text/html');
//     res.end("<img src='https://pbs.twimg.com/media/Dj8XlmjV4AEzsvr.jpg'>")
// ; // creates the server and sends the response
// });
// server.listen(3000, () => {
//   console.log('Server ready');
// });

