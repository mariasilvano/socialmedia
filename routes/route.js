const express = require('express');
const db = require('../config/db');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerPostagem = require('../controllers/controllerPostagem');
const controllerComentario = require('../controllers/controllerComentario');
const route = express.Router();


module.exports = route;

//Rotas Usuário
route.post("/usuarioCreate", controllerUsuario.postCreate);
route.delete("/usuarioDelete/:id", controllerUsuario.deleteUsuario);
route.put("/usuarioEdit/:id", controllerUsuario.editarUser);
route.get("/usuario/:nome/apelido", controllerUsuario.ListUserByName);
route.get("usuariosPopulares",controllerUsuario.ListPopularUsers);

// Rotas para Postagens
route.post("/postagemCreate", controllerPostagem.postCreate);
route.delete("/postagemDelete/:id", controllerPostagem.deletePostagem);
route.get("/postagem/:id", controllerPostagem.ListPostById);
route.get("/usuarios/:id/postagens", controllerPostagem.ListPostByUser);
route.put("/postagem/:id", controllerPostagem.Curtir);

// Rotas para Comentários
route.post("/comentario", controllerComentario.postCreate);
route.delete("/comentarios/:id", controllerComentario.deleteComentario);
route.get("/postagens/:id/comentarios", controllerComentario.ListCommentByPost);
