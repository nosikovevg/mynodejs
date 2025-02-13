const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res)=> {
    res.send(`<h1>hello from express</h1>`)
});

app.listen(PORT, ()=> {
    console.log('App is listening on port ${PORT}');
})





console.log('Hello World');