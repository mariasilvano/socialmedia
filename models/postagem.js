module.exports = (sequelize, Sequelize) => {
    const Postagem = sequelize.define('postagens',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        titulo:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        descricao: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        autorId:{
            //Usuário que criou a postagem
            type: Sequelize.INTEGER,
            allowNull: false
        },
        curtidas:{
            type: Sequelize.INTEGER,
            allowNull: false,
            default: 0
        }
});
return Postagem;
}