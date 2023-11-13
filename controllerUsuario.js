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
    //Requisito 9 - Buscar usuário pelo nome
    async ListUserByName(req, res) {
        const usuarioNomeparam = req.params.nome;
        try{
            const usuario = await db.Usuario.findAll({
                where: {nome: usuarioNomeparam}
            })
            if(!usuario){
                return res.status(404).json({error: 'O usuário buscado pelo nome não foi encontrado'});
            }
            res.status(200).json(usuario);
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar o usuário solicitado pelo nome' });
        }
    },
    //Requisito 9 - Buscar usuário pelo apelido
    async ListUserByNick(req, res) {
        const usuarioApelidoparam = req.params.apelido;
        try{
            const usuario = await db.Usuario.findAll({
                where: {apelido: usuarioApelidoparam}
            })
            if(!usuario){
                return res.status(404).json({error: 'O usuário buscado pelo apelido não foi encontrado'});
            }
            res.status(200).json(usuario);
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar o usuário solicitado pelo apelido' });
        }
    },
    //Requisito 8 - Listar os usuários mais populares
    async ListPopularUsers(req, res) {
        try{
            const usuarios = await db.Usuario.findAll({
                include: [{
                    model: db.Postagem,
                    attributes: [],
                }],
                attributes: {
                    include: [
                        [
                            db.Sequelize.literal('(SELECT SUM("postagens"."curtidas") FROM "postagens" WHERE "postagens"."autorId" = "usuarios"."id")'),
                            'totalCurtidas'
                        ]
                    ],
                },
                order: [[db.Sequelize.literal('(SELECT SUM("postagens"."curtidas") FROM "postagens" WHERE "postagens"."autorId" = "usuarios"."id")'), 'DESC']],
                limit: 10
            });

             if(!usuarios){
                return res.status(404).json({error: 'Nenhum usuário encontrado'});
            }
             res.status(200).json(usuarios);
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar usuários mais populares' });
        }
            
    }
    
};