const db = require('../config/db');
module.exports = {
    //*******Implementação do Requisito 2 (Maria Gabriela Silvano)*******
    async postCreate(req, res) {
        try{
            const novaPostagem = req.body;
            //Alterado para que sempre sete o número default de curtidas para que traga os dados na ordem certa no JSON
            novaPostagem.curtidas = 0;
            const PostagemCriada = await db.Postagem.create(novaPostagem);
        
            res.status(201).json(PostagemCriada);
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar postagem' });
        }
    },
     //*******Implementação do Requisito 2 (Maria Gabriela Silvano)*******
    async deletePostagem(req, res) {
        try{
            const postagemId = req.params.id;
            const postagem = await db.Postagem.findByPk(postagemId);
            if(!postagem){
                return res.status(404).json({error: 'Postagem não encontrada'});
            }
            await postagem.destroy();
            res.status(204).send();
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar postagem' });
        }
    },
     //*******Implementação do Requisito 3 (Maria Gabriela Silvano)*******
    async ListPostById(req, res) {
        try{
            const postagemId = req.params.id;
            const postagem = await db.Postagem.findByPk(postagemId);
            if(!postagem){
                return res.status(404).json({error: 'Postagem não encontrada'});
            }
            res.status(200).json(postagem);
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar postagem' });
        }

    },
    //*******Implementação do Requisito 3 (Maria Gabriela Silvano)*******
    async ListPostByUser(req, res) {
        const autorId = req.params.id;
        try{
            const postagens = await db.Postagem.findAll({
                where: {autorId : autorId}
            })
            if(!postagens){
                return res.status(404).json({error: 'Nenhuma postagem encontrada para o usuário'});
            }
            res.status(200).json(postagens);
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar postagens' });
        }
    },
    //*******Implementação do Requisito 7 (Maria Gabriela Silvano)*******
    async Curtir(req, res) {
        const postagemId = req.params.id;
        try{
            const postagem = await db.Postagem.findByPk(postagemId);
            if(!postagem){
                return res.status(404).json({error: 'Postagem não encontrada'});
            }
            //incrementa o número de curtidas
            postagem.curtidas += 1;
            await postagem.save();
            res.status(200).json(postagem);
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao curtir postagem' });
        }
    },
    
};