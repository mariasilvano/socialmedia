const Sequelize = require ('sequelize');
const sequelize = new Sequelize ('socialmedia','postgres','1234',
    {host: 'localhost', dialect: 'postgres'});

    var db = {};
    db.Sequelize = Sequelize;//Módulo Sequelize
    db.sequelize = sequelize;//Instância da conexão ao banco
    db.Usuario = require('../models/usuario')(sequelize, Sequelize);
    db.Postagem = require('../models/postagem.js')(sequelize, Sequelize);
    db.Comentario = require('../models/comentario.js')(sequelize, Sequelize);

    db.Usuario.hasMany(db.Postagem, {foreignKey: 'autorId'});
    db.Usuario.hasMany(db.Comentario, {foreignKey: 'usuarioId'});
    db.Postagem.hasMany(db.Comentario,{foreignKey: 'postagemId'});
    module.exports = db;