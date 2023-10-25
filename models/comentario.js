module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('comentarios',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuarioId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    postagemId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    conteudo: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});
return Post;
}
