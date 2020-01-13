const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, () => console.log('Server on port 3000'));

//Prueba
//app.get('/', (req, res) => {
//    res.send('Hello World, from express');
//});

//localhost
app.get('http://127.0.0.1:8000/api/products', (req, res) => {
    res.send(200, {name: []})
})

