const { Model, DataTypes } = require('sequelize')

//Classe = Computador && Objeto = MacBook M1
class User extends Model{
    // Métodos e classes static não podem ser chamados fora da classe, só através dela
    static init(sequelize){
        //The super keyword is used to access and call functions on an object's parent
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = User