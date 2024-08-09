# Configuration après installation du site

Après l'installation de votre site vous pouvez avoir besoin d'éffectuer quelques modifications pour maintenir une certaines cohérences dans vos données.
ici nous allons voir comment effectuer certaines de ces modifications

## Configurer les traductions des configurations

![image](../../assets/images/post-import/configurations/image_0.png)
Comme vous pouvez le voir dans la capture ci-dessus, le text pour accéder au contenu est en anglais (il a gardé sa valeur par defaut) hors sur le site d'origine,
ce texte était en français. Celà est du au fait que la traduction de cette entrée a été définie sur le site d'origine et il faut la redéfinir sur notre site une fois exporté.
Pour reconfigurer cela sur votre site, suivez les étapes ci-dessous

- Accédez à la page de configuration de traduction de l'interface utilisateur. (_COnfiguration>Régionalisation et langue>Traduction de l'interface utilisateur_)
  ![image](../../assets/images/post-import/configurations/image_1.png)
- Dans le formulaire qui se présente à vous, utilisez le champ **La chaîne contient** pour rechercher la configuration que vous souhaitez traduire et validez le formulaire en cliquant sur le bouton **filter**. Dans notre cas nous recherchons "**Read more**"(cette recherche est sensible à la casse c'est-à-dire qu'il faut respecter les majuscules et les minuscules)
  ![image](../../assets/images/post-import/configurations/image_2.png)
- Dans le resultat de la recherche, vous verrez dans la colonne **Chaîne source** la chaine que vous recherchez (sauf s'il ne s'agit pas d'une configuration auquel cas vous n'obtiendez pas de résultat). Entrez la traduction à afficher dans le champ text à côté de votre chaine comme indiqué dans la capture ci dessous avec **Read more** => **Lire la suite** puis cliquez sur **Enregistrer les traductions**
  ![image](../../assets/images/post-import/configurations/image_3.png)
- Vous pouvez vérifier que les modifications ont bien été prises en compte
  ![image](../../assets/images/post-import/configurations/image_4.png)
