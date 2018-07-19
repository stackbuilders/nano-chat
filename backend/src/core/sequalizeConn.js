const Sequalize = require('sequelize');

const sequalize = new Sequalize(process.env.DB_CONN_NANOCHAT, {
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});

module.exports = sequalize;