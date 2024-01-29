# Presentation

Wb-Horizon est une application web qui permet de Generer un site web à partir d'un model, et de l'exporter si l'utilisateur le souhaite.

L'application est construite autour de 2 modules <a href="https://www.drupal.org/project/domain"><strong> domain </strong></a> et <strong>layout builder (core)</strong>. Sur ces derniers viennent s'appuyent plus de 60 modules contribs et pres de 54 modules customs.
<br>
Pour en savoir un peu plus, voir le repos <a href="https://github.com/Habeuk/wb-horizon">wb-horizon</a>.
<br>

## organisation

<br>
Nous distinguons deux grandes versions l'application de base <strong>AppB</strong> (generateur de site web) et l'application derivée <strong>AppD</strong> (permet à un utilisateur d'installer le site exporter ).
<br>
- AppB est accessible sur ce depot  <a href="https://github.com/Habeuk/wb-horizon"> wb-horizon </a>. Version >= 9.1.1
<br>
- AppD est accessible sur ce depot  <a href="https://github.com/Habeuk/wb-horizon"> wb_horizon_generate </a>.Version >= 1.1.9
<br>

## concepts

Pour une bonne comprenhension de d'application, il est important de comprendre les concepts suivant :

<ul>
<li> Model de site web : est le mole qui permet de generer un site web</li>
<li> Model de page web : est un mole qui permet de generer une page web</li>
</ul>
