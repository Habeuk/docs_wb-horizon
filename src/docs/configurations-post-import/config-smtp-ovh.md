<p data-end="579" data-start="179">L'envoi d'emails depuis un site Drupal est essentiel pour les notifications utilisateurs, formulaires de contact, ou encore la réinitialisation de mots de passe. Par défaut, Drupal utilise la fonction <code data-end="388" data-start="380">mail()</code> de PHP, qui est peu fiable et peut entraîner un marquage en spam. La solution recommandée consiste à configurer l’envoi via un serveur SMTP, notamment avec un compte email professionnel OVH.
</p>

<p data-end="744" data-start="581">Dans cet article, nous allons voir comment configurer <strong data-end="687" data-start="635">Drupal pour utiliser un compte email OVH en SMTP</strong>, en utilisant le module <strong data-end="743" data-start="712">SMTP</strong>.
</p>

<h3>1 Installer des modules</h3>

<p>Le module <strong>SMTP Authentication Support</strong> est indispensable pour gérer l’envoi d’emails via SMTP.
</p>

<pre>
<code class="language-plaintext">composer require drupal/smtp</code></pre>

<p>Le module <strong>mime mail</strong> est aussi important car il permet d'envoyer les mails en html.
</p>

<pre>
<code class="language-plaintext">composer require drupal/mimemail</code></pre>

<p>Ensuite, lancer l'installation
</p>

<pre>
<code class="language-plaintext">drush smtp mimemail</code></pre>

<h3>3 configuration des modules</h3>

<p>&nbsp;La configuration du module <strong>SMTP [ /admin/config/system/smtp ]</strong> est la suivante &nbsp; :
</p>

<ul>
	<li>Serveur SMTP : <strong>ssl0.ovh.net</strong></li>
	<li>Port SMTP : <strong>587</strong></li>
	<li>Utiliser le protocole crypté : Utiliser <strong>TLS</strong></li>
	<li>Enable TLS encryption automatically : <strong>Oui</strong></li>
	<li>Temps limite : <strong>30</strong></li>
</ul>
<img alt="config Drupal SMTP OVH" data-entity-type="file" data-entity-uuid="c7d84da8-41de-4258-9310-e43a265b7fe0"  src="https://habeuk.com/sites/default/files/inline-images/support-d-authentification-smtp-lesroisdelareno-06-09-2025_01_24_pm.png" class="img-fluid" />
<p>&nbsp;ensuite, il faut ajouter le compte email.
</p>
<img alt="config SMTP drupal OVH" data-entity-type="file" data-entity-uuid="23e9ef1a-f862-4450-8610-1558f25fab51"  src="https://habeuk.com/sites/default/files/inline-images/support-d-authentification-smtp-lesroisdelareno-06-09-2025_01_26_pm.png" class="img-fluid" />
<p>&nbsp;
</p>

<p>&nbsp;La configuration du module <strong>Mail system [ /admin/config/system/mailsystem ]</strong> est la suivante :
</p>

<ul>
	<li>Outil de mise en forme : <strong>Mime mail Mailer</strong></li>
	<li>Expéditeur : <strong>SMTP Mailer</strong></li>
	<li>Theme to render the emails : <strong>Actuel</strong></li>
</ul>
<img alt="config SMTP mail sytem " data-entity-type="file" data-entity-uuid="f0c523de-1a21-4e2b-b72c-be8814f14c43"  src="https://habeuk.com/sites/default/files/inline-images/configure-the-mail-system-lesroisdelareno-06-09-2025_01_34_pm.png" class="img-fluid" />
<p>&nbsp;La configuration du module <strong>Mime Mail [ /admin/config/system/mimemail ]</strong> est la suivante :
</p>

<p>Format du courriel : <strong>HTML complet&nbsp;</strong>
</p>
<img alt="config SMTP Mime Mail" data-entity-type="file" data-entity-uuid="6f572b84-b77e-4c28-b09b-ac6354930baa" src="https://habeuk.com/sites/default/files/inline-images/configure-mime-mail-lesroisdelareno-06-09-2025_01_39_pm.png" class="img-fluid" />
<p>&nbsp;
</p>

<p>&nbsp;
</p>
