# installation automatique d'un VPS avec ansible

## Prérequis

- Vous devez disposer d'un serveur VPS avec une distribution Linux installée. Vous devez également disposer d'un utilisateur avec des droits sudo.
- Vous devez disposer des acces sur le VPS wbhorizon.

Connectez-vous sur le nouveau VPS, les instructions sont envoyés par mail.

Pour se connecter sur le serveur VPS :

```bash
ssh debian@193.70.85.188
```

NB: il faudra ajutser l'adresse ip en fonction de votre serveur.

Si vous avez une erreur en relation avec :

```bash
... The authenticity of host '193.70.85.188 (193.70.85.188)' can't be established.
ED25519 key fingerprint is SHA256:gWzdhhYZ57oLqhnkAozN/U4WAFvadZS5QfV0xks2obQ.
This key is not known by any other names ...
```

il faut supprimer l'ancienne clé en executant la commande :

```bash
ssh-keygen -R 193.70.85.188
```

Si le probleme persite supprimé le fichier des hotes SSH :

```bash
rm ~/.ssh/known_hosts
```

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

### Verifer que vous pouvez acceder au vps distant :

```bash
ssh debian@193.70.85.188 -p 38297
```

Une foix cette verification effectuer, arreter la connexion avec le serveur distant :

```bash
exit
```

### Configuration de base permettant d'ajouter le nouveau vps au processus d'ansible :

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

**Le mot de passe demandé est celui du compte wb-horizon.**

L'installation du nouveau serveur prendra environ 10 à 13 minutes.  
Le login du compte est : 'admin', le numero de port 8083 et le mot de passe, voir dans le fichier approprié.

```bash
host : https://193.70.85.188:8083/
login: admin
pass: *****
```

Une foix l'installation terminé, saisir l'adresse du nouveau serveur dans un navigateur vous devez avoir cette image.
![Test install serveur](../../assets/images/test-install-serveur.png)
