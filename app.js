const routes = require('./routes/route');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(8082, function(){
        console.log("Servidor no http://localhost:8082")
});