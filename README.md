# NanoChat

Simple React + Express chat web application.

## Prerequisites

- Install [Node.js][nodejs] 8.11.3.
- Install [PostgreSQL][postgresql].

## Getting Started

Clone the repository:

```
git clone https://github.com/stackbuilders/nano-chat.git
cd nano-chat
```

Install [forever][forever] globally:

```
npm install -g forever
```

Install the dependencies, and start the application:

```
make start
```

Open `http://localhost:3001` in your browser. To stop the application run the
following command:

```
make stop
```

## License

MIT, see the [LICENSE](LICENSE) file.

[forever]: https://github.com/foreverjs/forever
[nodejs]: https://nodejs.org/en/download
[postgresql]: https://www.postgresql.org/download
