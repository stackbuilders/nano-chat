![Stack Builders](sb.png)

# NanoChat

Simple React + Express chat web application.

## Prerequisites

- Install [Node.js][nodejs] v.8.11.3.
- Install [PostgreSQL][postgresql] v.10.4.0.

## Getting Started

Clone the repository:

```
git clone https://github.com/stackbuilders/nano-chat.git
cd nano-chat
```

Setup PostgreSQL, create a user and a database (some help with this can be found [here][postgresHelpLink]):

```
sudo psql postgres
postgres=# createuser [username] --createdb
postgres=# createdb nanochat -U [username]
```

Create an enviroment variable for the [connection URI][postgresUriLink] with the database:

```
export DB_CONN_NANOCHAT=postgresql://[username]:[password]@localhost:5432/nanochat
```

Install [sequelize-cli][sequelize-cli] globally:

```
npm install -g sequelize-cli
```

Run the migrations and the seeders from the root of the backend project:

```
cd backend/
sequelize db:migrate
sequelize db:seed:all
```

Install [forever][forever] globally:

```
npm install -g forever
```

Install the dependencies, and start the application from the root of the project:

```
cd ..
make start
```

Open `http://localhost:3001` in your browser. To stop the application run the
following command:

```
make stop
```

To test the endpoint `/api/users` open `http://localhost:3001/api/users` in your browser. The data should be presented in JSON format.

## License

MIT, see the [LICENSE](LICENSE) file.

[forever]: https://github.com/foreverjs/forever
[nodejs]: https://nodejs.org/en/download
[postgresql]: https://www.postgresql.org/download
[postgresHelpLink]: https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb
[postgresUriLink]: https://jdbc.postgresql.org/documentation/head/connect.html
[sequelize-cli]: https://github.com/sequelize/cli