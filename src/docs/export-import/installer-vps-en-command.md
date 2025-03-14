# Installation en ligne de commande

Lorsque vous avez creer l'utilisateur, un dossier a été creer dans /home pourtant le nom de l'utilisatreur.
Pour notre cas, l'utilsateur est `user1_test`.

Connectez vous vous le VPS :

```bash
ssh debian@193.70.85.188 -p 38297
```

Changer d'utilisateur :

```bash
sudo -i
```

Acceder au repertoire ou se trouve le site desipper :

```bash
cd /home/user1_test/web/tonsiteweb.fr/public_html/test_import_wb_horizon_com
```

Executé la commande suivante pour installer votre site, vous devez au prealable creer la bd :

```bash
vendor/bin/drush si
```

A la fin de l'installation un compte d'administrateur est cree. le login est `admin`.
