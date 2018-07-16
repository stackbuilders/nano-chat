# Ansible provisioning

## Getting started with Vagrant

Download the VM images and create two guest machines, one in 192.168.1.10 and the other in 192.168.1.20.

```bash
vagrant up
```

Check if everything is working fine in vagrant

```bash
vagrant up
```

Enter to one of the machines

```bash
vagrant ssh webserver
```

Check if SSH works properly (and add the guest key to the list of known hosts)

```bash
ssh vagrant@192.168.1.10
```

You have your servers up and running but with no apps.

## Provisioning with Ansible

Install the galaxy requirements

```bash
ansible-galaxy install -r requirements.yml
```

Remove the host node_modules directories

```bash
rm -rf ../backend/node_modules && rm -rf ../frontend/node_modules
```

Run the playbook

```bash
ansible-playbook playbooks/webserver_playbook.yml
```

Your app is now provisioned. Test it on `http://192.168.1.10`
![Deployed](meme.gif)
