import Sequalize from 'sequelize';

let sequelizeConn;

if (process.env.DB_CONN_NANOCHAT) {
  sequelizeConn = new Sequalize(process.env.DB_CONN_NANOCHAT, {
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    }
  });
}

export default sequelizeConn;
