const {Model, DataTypes} = require('sequelize')

class Posting extends Model{
    static init(sequelize){
        super.init({
            title: DataTypes.STRING,
            content: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = Posting