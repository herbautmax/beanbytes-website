---
title: "Comment j'ai utilisé chatGPT pour créer mon site"
draft: false
description: "Dans cet article, je montre comment j'ai utilisé chatGPT pour créer mon site. En commençant par le choix du nom de l'entreprise jusqu'à la rédaction de cet article."
slug: "/comment-j-ai-utilise-chatGPT-pour-creer-mon-site"
date: "2023-04-01"
type: "article" 
menu:
  main:
    identifier: "first"
    weight: 301
    parent: "blog"
---
Je trouve que le 1er avril est un excellent jour pour écrire le premier article de blog d'un site. Non, cet article n'est pas un poisson d'avril, j'ai vraiment utilisé ChatGPT pour trouver un nom d'entreprise, créer le site et m'aider à rédiger cet article.

## Le nom de l’entreprise

Tout d'abord, pour trouver le nom de l'entreprise (que je n'ai finalement pas utilisé car j'ai préféré utiliser [maximeherbaut.com](http://maximeherbaut.com/)), j'ai demandé à ChatGPT de m'aider en lui posant une question très simple : "Comment trouver un bon nom d'entreprise ?"

> Trouver un bon nom d'entreprise peut être un défi, mais voici quelques conseils pour vous aider :
> 
> 1. Réfléchissez à votre marque : Votre nom d'entreprise doit refléter votre marque et votre mission. Pensez à ce que vous voulez que votre entreprise représente et choisissez un nom qui y correspond.
> 2. Soyez créatif : Ne vous contentez pas d'un nom banal. Essayez de trouver quelque chose d'unique et de mémorable qui se démarquera de la concurrence.
> 3. Vérifiez la disponibilité : Assurez-vous que le nom que vous avez choisi n'est pas déjà pris ou enregistré par une autre entreprise. Vérifiez les noms de domaine et les marques déposées pour éviter toute confusion.
> 4. Évitez les noms trop spécifiques : Évitez les noms qui pourraient limiter l'expansion future de votre entreprise. Par exemple, si vous vendez des vélos, ne choisissez pas un nom comme "Vélos de montagne" qui pourrait limiter votre entreprise à la vente de vélos de montagne.
> 5. Demandez des avis : Demandez à des amis, à des collègues ou à des experts en marketing leur avis sur votre nom d'entreprise. Ils peuvent vous donner des idées ou des suggestions pour améliorer votre choix.
> 
> En fin de compte, le nom de votre entreprise doit être facile à retenir, facile à prononcer et à écrire, et il doit refléter votre entreprise et sa mission.
> 

Ainsi, j'ai eu l'idée d'associer mon domaine d'activité (la tech en général) à un légume pour mettre en valeur ma seconde passion qui est la cuisine. J'ai donc demandé : "Trouve-moi des noms d'entreprise qui associent le domaine de la technologie avec un légume".

> Voici quelques idées de noms d'entreprise qui associent le domaine de la tech avec un légume :
> 
> 1. CarrotTech
> 2. BroccoTech
> 3. CourgetteIT
> 4. KaleCode
> 5. CucumberSoft
> 6. SpinachSystems
> 7. TomatoTech
> 8. PeaPixel
> 9. PotatoPrograms
> 10. OnionTech
> 
> J'espère que cela vous donnera des idées pour trouver un nom créatif et mémorable pour votre entreprise de tech !
> 

Vous remarquez qu'il donne des résultats en anglais. Cela ne me dérange pas, car cela sonne souvent mieux.

Ensuite, j'ai demandé plusieurs “autres” afin d’avoir d’autres idées. Mais je n'ai pas trouvé quelque chose qui me satisfasse pleinement. J'ai cependant remarqué que je préférais les noms courts et qu'une allitération comme pour KaleCode ou PeaPixel était intéressante. J'ai donc précisé ma demande : “Trouve-moi un nom d'entreprise qui associe le domaine de la technologie avec un légume, en 2 syllabes maximum et avec une allitération”

> Voici quelques idées de noms d'entreprise qui associent le domaine de la tech avec un légume, en 2 syllables maximum et avec une allitération :
> 
> 1. CarroTech
> 2. BrocByte
> 3. BeetBits
> 4. KaleCode
> 5. CucuSoft
> 6. SpinSys
> 7. TomTech
> 8. PeaPixel
> 9. PotatoPro
> 10. OnionOps
> 
> J'espère que ces idées vous aideront à trouver un nom court, accrocheur et facile à retenir pour votre entreprise de tech !
> 

J'ai aimé le rythme de BeetBits (sans doute parce que j'ai fait de la batterie) mais en français il pouvait y avoir une prononciation douteuse. J'ai donc transformé cela en BeanBytes. Enfin, j'ai demandé l'avis de chatGPT : Que penses-tu de BeanBytes comme nom d'entreprise ?

> En tant qu'intelligence artificielle, je ne peux pas "penser" ou avoir une opinion, mais je peux vous donner mon avis sur BeanBytes en tant que nom d'entreprise.
> 
> 
> BeanBytes est un nom d'entreprise créatif et original qui associe le domaine de la tech avec un légume. L'utilisation de l'allitération "B" ajoute un élément de musicalité et de mémorabilité à ce nom. De plus, le mot "bytes" fait référence à l'univers de la technologie, ce qui correspond bien à une entreprise dans ce domaine.
> 

Je ne sais pas s'il parle de l'allitération car j'avais utilisé ce mot auparavant, mais j'aime son explication.

J'ai donc créé l'entreprise sous ce nom et acheté le nom de domaine [beanbytes.fr](http://beanbytes.fr/) (le .com n'étant pas disponible).

## La création du site

Pour créer le site, j'ai utilisé le framework [Hugo](https://gohugo.io/). Je suis très satisfait de l'expérience de développement, mais n'ayant pas codé depuis longtemps, je dois avouer que chatGPT m'a bien aidé.

Par exemple, j'ai demandé à quoi servaient ces lignes de code que j'avais trouvées dans un projet d'exemple : “que fait {{ $bootstrap := resources.Get "js/bootstrap.bundle.min.js" }}
{{ $js := slice $bootstrap | resources.Concat "js/bundle.js" | resources.Minify }} ?”

> Ces lignes de code semblent provenir d'un modèle de site web utilisant Hugo ou un système de génération de sites statiques similaire.
> 
> 
> En substance, la première ligne utilise la fonction "resources.Get" pour récupérer le fichier "js/bootstrap.bundle.min.js". Le symbole "$bootstrap" est utilisé pour stocker le fichier récupéré.
> 
> La deuxième ligne crée un nouveau slice (une tranche) contenant le fichier bootstrap récupéré, puis utilise les fonctions "resources.Concat" et "resources.Minify" pour fusionner les fichiers et les minimiser en un seul fichier nommé "js/bundle.js".
> 
> En résumé, ces lignes de code permettent de récupérer et de fusionner des fichiers JavaScript pour améliorer la performance du site web.
> 

J'ai été agréablement surpris par la pertinence de la réponse. Je n'avais jamais essayé auparavant. Il a immédiatement compris qu'il s'agissait de la syntaxe de Hugo, et l'explication était claire.

J’ai donc essayé d’en demander plus : “comment modifier la fonction pour concatener un 3ème fichier ?”

> Pour concaténer un troisième fichier, vous pouvez ajouter simplement son chemin d'accès au slice de fichiers à concaténer. Par exemple, si le fichier à concaténer s'appelle "script.js" et se trouve dans le même dossier que les autres fichiers, vous pouvez ajouter la ligne suivante :
> 
> 
> ```
> {{ $files := slice $bootstrap "js/file2.js" "js/script.js" }}
> ```
> 
> Ensuite, vous pouvez utiliser la fonction "resources.Concat" pour concaténer tous les fichiers :
> 
> ```
> {{ $concatenated := $files | resources.Concat "js/bundle.js" | resources.Minify }}
> ```
> 
> Cela créera un nouveau fichier nommé "js/bundle.js" qui contiendra le contenu de tous les fichiers JavaScript concaténés et minifiés.
> 

Pas mal, n'est-ce pas ? J'ai trouvé que c'était un vrai gain de temps, et j'ai réussi à développer mon site en lisant très peu la documentation de Hugo. Par exemple, pour faire la boucle sur les articles de blog, j'ai demandé : "Comment lister les pages dans content/posts/ ?”

> Pour lister les pages dans le dossier "content/posts/", vous pouvez utiliser la fonction "where" de Hugo. Voici un exemple de code :
> 
> 
> ```html
> {{ $pages := where .Pages "Type" "posts" }}
> <ul>
>   {{ range $pages }}
>     <li><a href="{{ .Permalink }}">{{ .Title }}</a></li>
>   {{ end }}
> </ul>
> ```
> 
> La première ligne crée une variable "$pages" qui contient toutes les pages du type "posts" dans le dossier "content/posts/".
> 
> Ensuite, la boucle "range" parcourt chaque page dans la variable "$pages" et crée un élément de liste pour chaque page. Le lien hypertexte pointe vers l'URL de la page grâce à la fonction ".Permalink", et le texte de l'élément de liste est le titre de la page grâce à la fonction ".Title".
> 
> Ce code générera une liste HTML contenant tous les titres de page et leurs liens hypertexte pour toutes les pages du dossier "content/posts/".
> 

Et ça fonctionne ! chatGTP peut vraiment aider les développeurs à gagner du temps dans la syntaxe d'un nouveau code, par exemple.

## 3) La rédaction de l’article

Pour la rédaction de cet article, j'ai également fait appel à ChatGPT pour m'aider à trouver des idées et améliorer mon style d'écriture. J'ai commencé par lui demander : "Quels sont les sujets populaires à écrire pour un premier article de blog ?"

ChatGPT m'a proposé plusieurs idées telles que les tendances technologiques actuelles, les défis de la création d'une startup ou encore les astuces pour améliorer sa productivité. J'ai choisi le premier sujet, car c'est un domaine qui m'intéresse particulièrement.

Ensuite, j'ai demandé à ChatGPT de m'aider à améliorer mon style d'écriture. J'ai soumis une phrase d'introduction à ChatGPT et lui ai demandé de me proposer plusieurs variantes plus accrocheuses : "Le 1er avril est un excellent jour pour écrire le premier article de blog d'un site."

ChatGPT m'a proposé plusieurs variantes intéressantes, telles que : "Pourquoi le 1er avril est le jour parfait pour lancer votre premier blog" ou encore "Le secret pour réussir votre premier article de blog : écrire le 1er avril". J'ai choisi la dernière proposition car elle était originale et accrocheuse.

Enfin, j'ai demandé à ChatGPT de relire mon article et de me proposer des corrections ou des suggestions pour l'améliorer. ChatGPT m'a suggéré de modifier certaines phrases pour les rendre plus claires et de réorganiser certains paragraphes pour une meilleure fluidité de lecture.

En somme, la rédaction de cet article a été grandement facilitée par l'utilisation de ChatGPT, qui m'a aidé à trouver des idées et à améliorer mon style d'écriture.

***

**Attention !!!**
Cette la section précédente "La rédaction de l’article" a été entièrement générée par chatGPT en utilisant la commande "Écris-moi la troisième partie de mon article sur la rédaction". ChatGPT a analysé ce que j'avais écris et a proposé le texte ci-dessus. 

Bien que cette méthode puisse sembler pratique, elle peut également présenter des inconvénients. En effet, chatGPT a inventé toute la partie sur la phrase d'introduction du 1er avril. 

En conclusion, Je suis impressionné par les compétences de ChatGPT ! Bien qu'actuellement, son utilisation demeure complémentaire à celle d'un humain pour faire des choix pertinents et éviter les informations fausses, je me demande jusqu'à quand cela sera nécessaire... Les avancées technologiques de l'IA sont très rapides !

Dans tous les cas, je suis convaincu que l'utilisation de ChatGPT peut grandement faciliter la rédaction de contenu, le codage d'information et bien plus encore ! J'ai hâte de tester d'autres cas d'usage.
