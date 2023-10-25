module.exports = {
    async postCreate(req, res) {
    },
    async deleteComentario(req, res) {
    },
    async ListCommentByPost(req, res) {
    },
    
};

route.post("/comentario", controllerComentario.postCreate);
route.delete("/comentarios/:id", controllerComentario.deleteComentario);
route.get("/postagens/:id/comentarios", controllerComentario.listarComentariosPorPostagem);