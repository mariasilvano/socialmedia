const db = require('../config/db');

module.exports = {
    //Requisito 5 - Criar comentário
    async postCreate(req, res) {
        try{
            const novoComentario = req.body;
            const comentarioCriado = await db.Comentario.create(novoComentario);
        
            res.status(201).json(comentarioCriado);
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar o comentário' });
        }
    },
    //Requisito 5 - Apagar comentário
    async deleteComentario(req, res) {
        try{
            const comentarioId = req.params.id;
            const comentario = await db.Comentario.findByPk(comentarioId);
            if(!comentario){
                return res.status(404).json({error: 'Comentário não encontrado'});
            }
            await comentario.destroy();
            res.status(204).send();
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar o comentário' });
        }
    },
    //Requisito 6 - Listar comentários de uma postagem
    async ListCommentByPost(req, res) {
        const postagemIdparam = req.params.id;
        try{
            const comentarios = await db.Comentario.findAll({
                where: {postagemId: postagemIdparam}
            })
            if(!comentarios){
                return res.status(404).json({error: 'Nenhum comentário encontrado para a postagem'});
            }
            res.status(200).json(comentarios);
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar comentários' });
        }
        
    }
    
};
