all:
	cd frontend && npm install && npm run build
	cd backend && npm install

.PHONY: all

start: all
	cd backend && PG_CONN_STRING=blah forever start src/app.js

.PHONY: start

stop:
	forever stop backend/src/app.js

.PHONY: stop
