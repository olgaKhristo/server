const fruits = require('./fruits.json');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello API!');
});

app.get('/fruits', (req, res) => {
    res.send(fruits);
});

//post request co create new fruit (to check it in thunder client)
app.post('/fruits', (req, res) => {
    const fruit = req.body;
    console.log(fruit);
    res.send('new fruit created with POST');
});


app.get('/fruits/:name', (req, res) => {
   // res.send(`return $ {req.params.name} name`);
   const name = req.params.name.toLowerCase(); // get a name of what im looking for 
    const fruit = fruits.find(fruit => fruit.name.toLowerCase() == name); // search fruits.json (fruits) for the name match
    if (fruit == undefined) {
        // if there is NO fruit
        res.status(404).send(`The fruit ${name} was not found`);

    }else{
        // if there is a fruit
        res.send(fruit);
    }

});


app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});




// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {    
//     res.send('Hello World!');
// });

// app.get('/chicken', (req, res) => {
//     res.send('About Chicken');
// });


// app.get('/chicken/:name', (req, res) => {
//     res.send(req.params);
// });

// app.get('/example', (req, res) => {
//   res.sendStatus(418);
// });
    
    

// app.listen(port, () => {
//     console.log(`Server listening at port ${port}`);
// });







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

