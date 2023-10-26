const db = require('../config/db');
module.exports = {
    //*******Implementação do Requisito 1 (Maria Gabriela Silvano)*******
    async postCreate(req, res) {
        try{
            const novoUsuario = req.body;
            const usuarioCriado = await db.Usuario.create(novoUsuario);
        
            res.status(201).json(usuarioCriado);
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar o usuário' });
        }
    },
    //*******Implementação do Requisito 1 (Maria Gabriela Silvano)*******
    async deleteUsuario(req, res) {
        try{
            const usuarioId = req.params.id;
            const usuario = await db.Usuario.findByPk(usuarioId);
            if(!usuario){
                return res.status(404).json({error: 'Usuário não encontrado'});
            }
            await usuario.destroy();
            res.status(204).send();
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar o usuário' });
        }
    },
    //*******Implementação do Requisito 1 (Maria Gabriela Silvano)*******
    async editarUser(req, res) {
        try{
            const usuarioId = req.params.id;
            const usuario = await db.Usuario.findByPk(usuarioId);
            const Editar = req.body;
            if(!usuario){
                return res.status(404).json({error: 'Usuário não encontrado'});
            }
            const usuarioEditado =  await usuario.update(Editar);
            res.status(200).json(usuarioEditado);
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao editar o usuário' });
        }
    },
    async ListUserByName(req, res) {
    },
    async ListPopularUsers(req, res) {
    },
    
};