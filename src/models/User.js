const { Model, DataTypes } = require('sequelize')

//Class = Computer && Object = MacBook M1
class User extends Model{
    // Static methods and classes cannot be called outside the class, only through the class
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
