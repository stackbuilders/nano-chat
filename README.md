# NanoChat app

## Just an example on how to do provisioning with Ansible

### Prerequisites

- Node 8.11.3 LTS

### NanoChat local installation

Execute the following commands on the root directory of this repo:

```bash
npm install forever -g
make run
```

You'll have you app up and running on `http://localhost:3001`. To stop you need to execute:

```bash
forever stop backend/src/app.js
```
