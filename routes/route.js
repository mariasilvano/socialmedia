const express = require('express');
const db = require('../config/db');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerPostagem = require('../controllers/controllerPostagem');
const controllerComentario = require('../controllers/controllerComentario');
const route = express.Router();

/*CRIAÇÃO DO BANCO DE DADOS BD 
db.sequelize.sync({force: true}).then(() => {
    console.log('{ force: true }');
});*/

module.exports = route;

//Rotas Usuário
route.post("/usuario", controllerUsuario.postCreate);
route.delete("/usuario/:id", controllerUsuario.deleteUsuario);
route.put("/usuario/:id", controllerUsuario.editarUser);
route.get("/usuarios",controllerUsuario.ListPopularUsers);
route.get("/usuario/:nomeOuApelido", controllerUsuario.ListUserByNameOrNick);

// Rotas para Postagens
route.post("/postagem", controllerPostagem.postCreate);
route.delete("/postagem/:id", controllerPostagem.deletePostagem);
route.get("/postagem/:id", controllerPostagem.ListPostById);
route.get("/postagens/:id", controllerPostagem.ListPostByUser);
route.put("/postagem/:id", controllerPostagem.Curtir);

// Rotas para Comentários
route.post("/comentario", controllerComentario.postCreate);
route.delete("/comentario/:id", controllerComentario.deleteComentario);
route.get("/comentarios/:id/", controllerComentario.ListCommentByPost);
