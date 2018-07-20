import Sequalize from 'sequelize';

export default new Sequalize(process.env.DB_CONN_NANOCHAT, {
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});