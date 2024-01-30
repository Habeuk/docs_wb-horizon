# Import des données

L'import des données est geré par le module "migrationwbh", qui s'appuie globalement sur le module migration.
<br>
Les données sont importées via les requetes json afin de telecharger le contenu plus reccent.
Tout le processus s'articule autour de "migrationwbh/src/Form/MigrationWbhImport.php";

Le processus se deroule dans un formulaire drupal multi-etape. ( Drupal\migrationwbh\Form\MigrationWbhImport::buildForm )
