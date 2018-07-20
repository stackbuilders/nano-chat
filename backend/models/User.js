import Sequelize from 'sequelize';
import sequelizeConn from 'Core/sequelizeConn'

export default sequelizeConn.define('user', {
    id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    schema: 'nanochat',
    timestamps: true,
    underscore: true,
    tableName: 'user'
});