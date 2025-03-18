# Création d'un Layout sur Drupal : Section Form

Pour créer un layout sur Drupal, vous devez être connecté en tant qu'administrateur et suivre les étapes suivantes :

## Accès à l'interface d'administration

Allez dans le menu d'administration de Drupal.

Passez la souris sur Structure puis sélectionnez type de Paragraphe.

<img src="../../assets/images/image1.png" class="img-fluid my-3"></img>

## Création du layout

cliquez sur ajoutez un type de paragraph
<img src="../../assets/images/image2.png"></img>

Donnez un nom au paragraphe, par exemple Section Form.
<img src="../../assets/images/image3.png"></img>

Déroulez la section Paramètre de langue et cochez la case Activer la traduction, puis enregistrez.
<img src="../../assets/images/image4.png"></img>

## Ajout de champs

Accédez à l'onglet Gérer les champs.
<img src="../../assets/images/image5.png"></img>

Créez un champ nommé Image Background de type Fichier/Image (sans définir de valeur par défaut).
<img src="../../assets/images/image6.png"></img>

Créez un champ Référence à une entité. Sélectionnez l'élément de référence pour déterminer l'entité à utiliser, ici Webform.
<img src="../../assets/images/image7.png"></img>

Créez un champ Texte au format Texte long.
<img src="../../assets/images/image8.png"></img>

## Personnalisation de la disposition

Accédez à l'onglet Gérer l'affichage.
<img src="../../assets/images/image9.png"></img>

Activez l'option Layout Builder et enregistrez.
<img src="../../assets/images/image10.png"></img>

Cliquez sur Gestion de la mise en page.
<img src="../../assets/images/image11.png"></img>

Sur la page d'affichage des champs et layouts, cliquez sur Ajouter la section.
<img src="../../assets/images/image12.png"></img>

## Sélection du layout

Choisissez 2 colonnes dynamique Bootstrap (formatage_models_blog_list).
<img src="../../assets/images/image13.png"></img>

Configurez votre layout :
<img src="../../assets/images/image14.png"></img>

Class HTML : Appliquez des classes CSS au conteneur principal ou aux régions.

HTML Tag : Définissez la balise HTML pour les éléments du layout.

Configuration de la section : Sélectionnez Container.
<img src="../../assets/images/image15.png"></img>

CSS et JS : Ajoutez des styles personnalisés en ouvrant le layout dans un nouvel onglet et en modifiant la zone SCSS.
<img src="../../assets/images/image16.png"></img>
<img src="../../assets/images/image17.png"></img>

## Ajout des champs

Sélectionnez une région et cliquez sur Ajouter un bloc.
<img src="../../assets/images/image18.png"></img>

Recherchez le champ à positionner.
<img src="../../assets/images/image19.png"></img>

Pour chaque champ :

Image Background : Masquez le label, ajustez les styles si nécessaire.

Texte : Masquez le label, ajustez les styles.

Formulaire : Masquez le label, sélectionnez Entité rendue.
<img src="../../assets/images/image20.png"></img>

Enregistrez.

## Affichage du layout

Allez sur la page où afficher le layout.

Cliquez sur Modifier en haut de la page.
<img src="../../assets/images/image21.png"></img>

Descendez jusqu'à Ajouter une nouvelle section et sélectionnez Section Form.
<img src="../../assets/images/image22.png"></img>

Remplissez les champs manuellement :

Image Background : Ajoutez une image.

Left Title : Ajoutez un texte.

Formulaire : Sélectionnez renoplus_wb_horizon_com : Contact devis form.

Enregistrez les modifications de la section, puis celles de la page.
<img src="../../assets/images/image23.png"></img>

# Résolution des problèmes

Si les éléments ne s'affichent pas correctement, régénérez le thème.

