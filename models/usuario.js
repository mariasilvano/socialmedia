module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuarios',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        apelido:{
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });
    return Usuario
}