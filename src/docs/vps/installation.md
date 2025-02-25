# installation automatique d'un VPS avec ansible

## Prérequis

- Vous devez disposer d'un serveur VPS avec une distribution Linux installée. Vous devez également disposer d'un utilisateur avec des droits sudo.
- Vous devez disposer des acces sur le VPS wbhorizon.

Connectez-vous sur le nouveau VPS, les instructions sont envoyés par mail.

**Changer l'adresse SSH par défaut par 38297**

```bash
sudo nano /etc/ssh/sshd_config
```

Rechercher la ligne commençant par `#Port 22` et la décommenter en supprimant le `#` et changer le port par `38297`.

```bash
Port 38297
```

Redémarrer le service SSH pour appliquer les modifications.

```bash
sudo systemctl restart sshd
```

## Configuration du nouveau VPS via ansible.

Conncectez vous sur le serveur wbhorizon:

```bash
ssh debian@152.228.134.19 -p 8888
```

Ajouter les parametres du nouveau VPS dans le fichier `hosts`:

```bash
sudo nano /home/debian/heitia_ansible/inventory.yml
```

```
webservers:
  hosts:
    vps_01:
      ansible_host: 193.70.85.188
      ansible_port: 38297
      ansible_user: ******
      ansible_ssh_pass: ********
    vps_02:
      ansible_host: @_new_IP
      ansible_port: 38297
      ansible_user: @_new_user
      ansible_ssh_pass: @_new_user_password
```

Vous devez remplacer les valeurs `@_new_IP`, `@_new_user` et `@_new_user_password` par les valeurs correspondantes.  
Ensuite, executé la commande suivante pour lancer le playbook ansible:

```bash
ansible-playbook -i inventory.yml playbook.yml --ask-vault-pass
```

Le mot de passe demandé est celui du compte wb-horizon.
