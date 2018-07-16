# NanoChat app

## Just an example on how to do provisioning with Ansible

### Prerequisites

- Unix based host computer.
- OpenSSH
- Git
- Node 8.11.3 LTS
- Ansible 2.6.x (available on PIP)
- Generate SSH keys on `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`. [Help](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).
- Vagrant and Virtualbox

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

### Provisioning with Ansible

Change directory to ansible.

```bash
cd ansible
```

Please read the [provisioning with ansible documentation](/ansible).
