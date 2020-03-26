const express  = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // - > para entender que o metodo vai usar json para criar uma informação no insomnia
app.use(routes);

app.listen(3333);