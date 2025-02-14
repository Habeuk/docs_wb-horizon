Dans ce mini tutoriel nous allons nous attardez sur comment importer un site dans l'environnement de tests qui est sur le VPS (Wb-horizon).<br />
Dans ce tutoriele nous allons nous basé sur le site :&nbsp;nettoyage-et-debarras1115.wb-horizon.com et le site exporter serra accessible sur cette adresse :&nbsp;<a href="https://nedeba.wb-horizon.com">nedeba.wb-horizon.com</a><br />
&nbsp;<h2>Au niveau du site :&nbsp;nettoyage-et-debarras1115.wb-horizon.com</h2>Exporter et telecharger votre site. (veillez suivre le tutos online pour l'export )<h2>Au niveau d'OVH :</h2>Vous devez ajouter un enregistrement en A<br />
<img class="img-fluid" src="https://gestion-taches-vps.habeuk.com/sites/default/files/filesmanager/ovhcloud-02-13-2025-01-01-pm.png" style="height: 520px; width: 600px;" /><h2>Au niveau du VPS :</h2>Connecter vous en SSH sur le VPS :

<pre>
<code>ssh wb-horizon@152.228.134.19 -p 8888</code></pre>

pass :&nbsp;\*\*\*\*<br />
Editer le fichier&nbsp;etc/hosts&nbsp;et ajouter "<strong>152.228.134.19 &nbsp;nedeba.wb-horizon.com</strong>" tout au fond.<br />
<br />
Creer un vhost à ce denier qui permettra de renvoyer les requetes vers le incus :<br />
<br />
Pour cela acceder à '/etc/apache2/sites-available' :

<pre>
<code>/etc/apache2/sites-available</code></pre>

Ajouter le fichier vhost&nbsp; : avec le nom 'nedeba.wb-horizon.com.conf'<br />
NB: le nom doit se terminer par .conf&nbsp;<br />
&nbsp;

<pre>
<code>&lt;VirtualHost *:80&gt;
    ServerName nedeba.wb-horizon.com

    ProxyPreserveHost On
    ProxyPass / http://10.66.193.23/
    ProxyPassReverse / http://10.66.193.23/

    # Transfert des en-têtes requis
    RequestHeader set X-Forwarded-Proto "http"
    RequestHeader set X-Forwarded-Port "80"

    ErrorLog ${APACHE_LOG_DIR}/nedeba-wb-horizon-error.log
    CustomLog ${APACHE_LOG_DIR}/nedeba-wb-horizon-access.log combined
&lt;/VirtualHost&gt;
&lt;VirtualHost *:443&gt;
    ServerName nedeba.wb-horizon.com

    # Configuration SSL
    SSLEngine On
    SSLCertificateFile /etc/letsencrypt/live/wb-horizon.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/wb-horizon.com/privkey.pem
    #Include /etc/letsencrypt/options-ssl-apache.conf

    # Configuration du reverse proxy
    ProxyPreserveHost On
    ProxyPass / http://10.66.193.23/
    ProxyPassReverse / http://10.66.193.23/

    # Transmission des en-têtes requis
    RequestHeader set X-Forwarded-Proto "https"
    RequestHeader set X-Forwarded-Port "443"

    # Logs
    ErrorLog ${APACHE_LOG_DIR}/nedeba-wb-horizon-ssl-error.log
    CustomLog ${APACHE_LOG_DIR}/nedeba-wb-horizon-access.log combined
&lt;/VirtualHost&gt;
</code></pre>

Dans le fichier, il faut remplacer le nom "nedeba-wb-horizon" par le votre.<br />
<br />
Vous devez activer le nouveaun vhost :

<pre>
<code>sudo a2ensite nedeba.wb-horizon.com.conf</code></pre>
<br />
Ensuite recharger le serveur apache2
<pre>
<code>sudo systemctl reload apache2</code></pre>
<br />
<br />
&nbsp;<h2>Au niveau de l'application&nbsp;<strong>hestiacp</strong>&nbsp;:&nbsp;</h2>Connectez vous sur l'application de gestion <strong>hestiacp</strong> :&nbsp;https://152.228.134.19:8083/

<pre>
<code>user1_test / sd524MDKFd548kjsd585]sd@</code></pre>

<h3>Ajouter le domaine :</h3>Cliquez sur <strong>web&nbsp;</strong>:<br />
<br />
<img class="img-fluid" src="https://gestion-taches-vps.habeuk.com/sites/default/files/filesmanager/web-dev-hestia-wbh-hestia-control-panel-02-13-2025-11-28-am.png" style="height: 131px; width: 600px;" /><br />
<br />
Cliquez sur "<strong>add web domain</strong>", remplassez le domaine (nedeba.wb-horizon.com) et cliquez sur "save"<br />
<br />
<img class="img-fluid" src="https://gestion-taches-vps.habeuk.com/sites/default/files/filesmanager/web-dev-hestia-wbh-hestia-control-panel-02-13-2025-11-30-am.png" style="height: 266px; width: 600px;" /><h3>Ajouter la base de données :</h3>Cliquez sur "databases", ensuite sur "add database" et remplissez les champs:<br />
<img class="img-fluid" src="https://gestion-taches-vps.habeuk.com/sites/default/files/filesmanager/db-dev-hestia-wbh-hestia-control-panel-02-13-2025-11-47-am.png" style="height: 500px; width: 600px;" /><br />
<br />
<strong>NB:&nbsp;</strong><br />
Le nom de la base de donnée est :&nbsp;user1_test_nedeba<br />
Le nom d'utilisateur :&nbsp;user1_test_nedeba<br />
&nbsp;<h3>Import des fichiers :</h3>Vous avez dans la premiere partie, vous avez exporter votre site, il faut importer ce fichier dans public_html.<br />
<img class="img-fluid" src="https://gestion-taches-vps.habeuk.com/sites/default/files/filesmanager/file-manager-hestia-control-panel-02-13-2025-11-18-am.png" style="height: 364px; width: 1000px;" /><br />
<br />
NB:<br />
il est importe de bien suivre l'aboresence. Le fichier doit etre importer dans /web/nedeba.wb-horizon.com/public_html ( si vous creer un nouveau site par exemple twig.wb-horizon.com, vous devez adapter le chemin ).<br />
<img class="img-fluid" src="https://gestion-taches-vps.habeuk.com/sites/default/files/filesmanager/file-manager-hestia-control-panel-02-13-2025-11-58-am.png" style="width: 1000px; height: 393px;" /><br />
<br />
Déziper le fichier <strong>nettoyage_et_debarras1115_wb_horizon_com.zip</strong><br />
<br />
<img class="img-fluid" src="https://gestion-taches-vps.habeuk.com/sites/default/files/filesmanager/capture-dcran-du-2025-02-13-12-18-58.png" style="height: 344px; width: 600px;" /><br />
&nbsp;<h3>Modifier le dossier racine :</h3>Par defaut le fichier racine&nbsp;(<strong>index.html</strong>) est dans public_html. En ajoutant notre dossier, cela modifier l'emplacement du dossier racine qui devient (nettoyage_et_debarras1115_wb_horizon_com/web ).<br />
Allez dans <strong>web</strong> &gt; <strong>cliquez sur votre domaine</strong> &gt;&nbsp;<strong>Advanced Options</strong>&nbsp;&gt; cochez la case "<strong>Custom document root</strong>",<br />
<img class="img-fluid" src="https://gestion-taches-vps.habeuk.com/sites/default/files/filesmanager/web-dev-hestia-wbh-hestia-control-panel-02-13-2025-12-28-pm.png" style="width: 600px; height: 736px;" /><br />
&nbsp;
