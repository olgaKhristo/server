const fruits = require('./fruits.json');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()) // use it with Post req

// this is midleweare
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});


app.get('/', (req, res) => {
    res.send('Hello API!');
});

app.get('/fruits', (req, res) => {
    res.send(fruits);
});

const getFruitIndex = name => {
    //take in a lowercase fruit name and return the index of the fruit or -1 if not found 
return fruits.findIndex((fruit) => fruit.name.toLowerCase() == name)  
    
}

//post request co create new fruit (to check it in thunder client)
app.post('/fruits', (req, res) => {
    //check if fruit exists
    const fi = getFruitIndex(req.body.name.toLowerCase());
    if (fi > -1) {
        //if fruit exists, send error
        res.status(409).send('Fruit already exists');
    }else{
//create an arr of all id;
//get the max id;
// increment that by 1
// adjust id to new max id




        //if fruit does not exist, add it to the array
        fruits.push(req.body);
        res.status(201).send(req.body);
    }
    // const fruit = req.body;
    // console.log(fruit);
    // res.send('new fruit created with POST');
});

app.delete('/fruits/:name', (req, res) => {
    const fi = getFruitIndex(req.params.name.toLowerCase());
if(fi == -1){
    //frtuit canot be found
    res.status(404).send('Fruit not found');
}else{
fruits.splice(fi, 1);
res.sendStatus(200);
}
})

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

//this code from diferent project to post and patch
// app.post('/sports', (req, res, next) => {
//     const sport = req.body;
//     console.log(sport);
//     res.send('new sport created with POST');
//     next()
// });

// app.patch('/sports', (req, res, next) =>{
//     const sport = req.body
//     console.log(sport)
//     res.send('Update sport with PATCH.')   
//     next() 
// })

// app.delete('/sports', (req, res, next) =>{
//     const sport = req.body
//     console.log(sport)
//     res.send('Delete with DELETE.')   
//     next() 
// })


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

