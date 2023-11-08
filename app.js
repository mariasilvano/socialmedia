const routes = require('./routes/route');
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const app = express();
const swaggerDocument = require('./swagger.json');
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerDocument));
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port,()=>{
        console.log(`Servidor rodando em http://localhost:${port}`)
});