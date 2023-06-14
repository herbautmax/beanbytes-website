---
title: "Les bases du déploiement web"
draft: false
description: "Cet article avait était écrit le cadre de mon poste de Product Manager pour Artifakt, il permet de faire un topo sur les techniques de déploiements web."
slug: "/les-bases-de-deploiement-web"
date: "2023-06-14"
type: "article" 
menu:
  main:
    identifier: "deploiement"
    weight: 301
    parent: "blog"
---
*Cet article avait était écrit le cadre de mon poste de Product Manager pour Artifakt, un PaaS qui permet d’automatiser l’hébergement, le déploiement et la gestion d’applications sur des infrastructures cloud.* 

Si les notions de SFTP, CI/CD, GitOps, déploiement blue/green ou encore canary vous sont encore méconnues, vous êtes au bon endroit. Dans cet article, nous allons revenir sur les bases du déploiement de site web, les différentes méthodes existantes et quelques points de vocabulaire associés.

Mettre en ligne son application web pour qu'elle soit visible et utilisée par des utilisateurs est sans doute une des plus grandes satisfactions de tout développeur. Après avoir choisi un nom de domaine et un mode d'hébergement, l'application est enfin prête à être déployée !

Que ce soit pour un développeur débutant ou sénior, le premier déploiement d'un nouveau site est toujours un moment spécial, car c’est l’aboutissement de plusieurs heures, voire mois ou années de travail. Mais ce n’est, en réalité, que le début. En effet, l’application va être utilisée, les utilisateurs vont donner leur avis, des bugs vont être identifiés, des librairies vont devoir être mises à jour, le besoin de nouvelles fonctionnalités va émerger…

Il faudra alors modifier le code et le déployer régulièrement pour apporter les changements nécessaires à la vie de l’application. Le déploiement est donc une étape cruciale pour la bonne santé d'un site et il existe plusieurs façons de le faire.

## Le modèle develop-staging-production

Pour tester et vérifier les changements sans affecter l’environnement de production, les développeurs créent des environnements supplémentaires de développement. Le modèle le plus connu est celui que j’appelle le DSP : développement/staging/production.

Le concept de base est simple. Les ingénieurs développent sur leur poste local et testent leur travail sur un environnement appelé "développement". Une fois que l’application est stable sur ce dernier, elle est déplacée vers un environnement intermédiaire, connu sous le nom de "staging" ou "pré-production". Il s'agit d'une copie du serveur de production, dont le but principal est de tester le code dans des conditions aussi proches que possible de la production.

Lorsque l'application fonctionne parfaitement en staging, elle est déployée en production.

Ce modèle est de plus en plus remis en question par la communauté des développeurs. Bien qu’il permette de découvrir plus de bugs, cela augmente également le coût, le temps et la complexité du processus de livraison. Ces dernières années, la productivité est devenue un sujet de plus en plus important. On cherche donc à éviter tout ce qui peut ralentir la livraison d'une application. De plus en plus d'équipes optent donc pour des configurations plus simples afin de livrer des développements plus petits, mais plus fréquemment. Cela permet de limiter les bugs, car on peut intervenir plus facilement et rapidement.

Maintenant que nous avons vu la notion d’environnement, examinons comment passer d’un environnement à un autre.

## Le déploiement manuel FTP

La méthode la plus simple pour déployer du code dans un environnement est le déploiement manuel via FTP (ou SFTP pour une version sécurisée). Il consiste à se connecter à un serveur distant en SFTP et à déplacer les fichiers modifiés dans les bons dossiers.

Cette méthode est très accessible et est souvent utilisée par les développeurs débutants pour mettre en production leur premier site web ou des petites applications personnelles. Toutefois, elle présente de nombreux inconvénients.

Le premier déploiement est facile à réaliser car il suffit de déplacer l’ensemble des fichiers sur le serveur. Il faut cependant veiller à ne pas copier les fichiers de configuration propres aux environnements de développement. Par contre, pour les déploiements suivants, il est plus complexe de remplacer les bons fichiers et une interruption de service est souvent nécessaire. De plus, il est très difficile de revenir en arrière (faire un rollback) car la version précédente a été écrasée par les nouveaux fichiers.

C’est pour ces raisons que cette solution est aujourd’hui abandonnée au profit de Git, qui est devenu un outil incontournable pour le déploiement.

## Git - un allié dans le déploiement

Git est un logiciel gratuit et open source, utilisé pour la gestion du code source. C'est un système de contrôle de version qui permet de suivre les modifications et facilite le travail collaboratif. Il est souvent couplé à un service de stockage du code source utilisant Git, tel que GitHub, GitLab ou Bitbucket.

Ces services répondent aux problématiques identifiées dans le déploiement manuel :

1. Les différentes versions de code sont stockées et accessibles facilement.
2. Il est possible d'ignorer le suivi de certains fichiers de configuration pour éviter d'écraser les variables propres à chaque environnement et de publier des variables confidentielles, telles qu'une clé API par exemple.
3. Ils permettent la collaboration entre plusieurs développeurs et la résolution de conflits entre deux versions du code.
4. Il est possible de mettre en place des déploiements automatisés en fonction d'une branche ou d'un tag.
5. Et bien plus encore, car ces fournisseurs Git sortent de nouvelles fonctionnalités chaque mois afin d'aider les développeurs.

On parle de plus en plus de GitOps, qui regroupe les meilleures pratiques DevOps basées sur Git et utilisées pour le développement d'applications, telles que le contrôle de version, la collaboration, la conformité et la CI/CD. Son utilisation permet d'automatiser la livraison des plateformes.

Ainsi, la mise en place d'une pipeline de CI/CD (*Continuous Integration / Continuous Delivery*) est devenue incontournable. L'intégration continue (*Continuous Integration*) et la livraison continue (*Continuous Delivery*) représentent une culture, des principes de fonctionnement et un ensemble de pratiques que les équipes de développement utilisent pour apporter des modifications de code plus fréquemment et de manière plus fiable.

La CI/CD est une bonne pratique pour les équipes DevOps. En effet, en automatisant l'intégration et la livraison, elle permet aux développeurs de se concentrer sur la satisfaction des besoins de l'entreprise tout en garantissant la qualité du code et la sécurité des logiciels.

- L'i**ntégration continue** (CI) est une pratique d’automatisation pour les développeurs qui consiste à apporter régulièrement des modifications au code, à les tester puis à les fusionner sur le référentiel partagé. Cela permet d’éviter les erreurs causées par la modification du code qu’il pourrait y avoir quand plusieurs développeurs travaillent sur la même base de code.
- La **livraison continue** (CD) est la livraison automatisée du code terminé sur des environnements de tests et de développement. Cette étape permet le **déploiement continu** : chaque modification validée par les tests automatisés peut donc être mise en production en évitant au maximum de perturber le trafic et l’utilisation de l’application live. C’est pour cela qu’il existe plusieurs stratégies de déploiement.

## Les stratégies de déploiements

Voici les méthodes les plus courantes.

### Déploiement par re-création (*Recreate*)

La stratégie de "récréation" est très appréciée pour sa simplicité et sa rapidité, elle consiste simplement à arrêter complètement la version A, puis à déployer la version B. Cette méthode est particulièrement adaptée aux environnements de développement ou aux projets non critiques, car elle est très facile à mettre en oeuvre. Cependant, elle implique un temps d'arrêt du service, qui dépendra principalement de la durée nécessaire pour arrêter et redémarrer l'application. En outre, l'arrêt et le redémarrage doivent être effectués avec soin, et à l'avance, pour éviter toute conséquence négative.

### Déploiement progressif

La stratégie de déploiement progressif est une méthode très pratique pour déployer une nouvelle version d'application en remplaçant les instances une à une, ce qui permet d'éviter d'exposer l'ensemble des utilisateurs à des risques et des bugs. Cependant, cette méthode présente un inconvénient majeur : le rollback est plus long, car il faut procéder dans l'ordre inverse pour annuler le déploiement. En outre, en cas de problème, il est plus difficile de diagnostiquer la cause de l'erreur car il peut être difficile de déterminer quelle instance a été déployée et quelle a été mise à jour. Par conséquent, lorsque vous décidez d'utiliser la stratégie de déploiement progressif, il est important de prendre le temps de bien planifier le processus et de prévoir un temps de rollback suffisamment long.

### Blue/Green

La stratégie de déploiement blue/green est une approche différente des méthodologies plus de déploiement progressif. Dans ce cas, la version B (verte) est déployée simultanément à la version A (bleue), avec le même nombre d'instances. Une fois que l'intégrité des tests sur la nouvelle version est vérifiée, le trafic est alors basculé de la version A à la version B. Cependant, si des problèmes sont détectés, il est toujours possible de revenir à la version A. 

### Canary

Un déploiement canary est une tactique qui consiste à répartir le trafic de production entre deux versions de manière progressive. Par exemple, en envoyant 90 % des requêtes à la version A et 10 % à la version B et en augmentant lentement le nombre de requêtes envoyées à la version B jusqu'à ce que le trafic soit totalement réparti entre les deux versions. Cette technique peut être très utile dans des situations où les tests sont difficiles à réaliser ou insuffisants, ou lorsque l'impact des changements sur des applications critiques doit être limité autant que possible. Elle peut également être utilisée pour pouvoir détecter rapidement et efficacement tout problème possible lié à la nouvelle version.

### Test A/B

Cette méthode basée sur le déploiement canary est souvent utilisée pour prendre des décisions basées sur des statistiques, par exemple pour tester la conversion d’une fonctionnalité donnée et déployer la version qui convertit le mieux. 

Par exemple, il est possible de tester simultanément deux versions différentes d'un tunnel d'achat e-commerce et de déterminer lequel est le plus performant en se basant sur des données quantitatives. 

La répartition du trafic entre les deux versions peut être faite en pourcentage, mais aussi en fonction d'autres attributs tels que la langue, la géolocalisation et le device utilisé. 

En outre, cette méthode est particulièrement utile lorsque les entreprises souhaitent tester une nouvelle fonctionnalité avant de la déployer à l'ensemble des utilisateurs. Cela leur permet d'analyser les données des deux versions et de choisir la plus performante, tout en réduisant le risque de mauvaise qualité et de bugs lors de la mise en œuvre.

## Conclusion

Le déploiement est une étape primordiale dans le cadre du développement d'un logiciel et peut se révéler très long et répétitif si elle n'est pas exécutée correctement. En effet, le premier déploiement permet de mettre l'application à la disposition de ses utilisateurs, mais les déploiements ultérieurs sont plus complexes car ils peuvent avoir un impact direct sur la qualité et la disponibilité de l'application. Ainsi, il est possible qu'une étape soit oubliée ou mal exécutée, ce qui pourrait causer des dégâts importants.

C'est pourquoi il est essentiel de mettre en place une procédure de déploiement claire et automatisée dans le but d'améliorer l'application tout en continuant à assurer sa stabilité.