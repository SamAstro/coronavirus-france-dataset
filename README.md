# Coronavirus COVID-19 - France dataset

**Ce projet a besoin de contributeurs. Aidez-nous à maintenir ce dataset à jour. Nous avons besoin d'un contributeur pour chaque région française.**

## Visualisation

Une visualisation des données [est disponible en cliquant ici](https://app.powerbi.com/view?r=eyJrIjoiZWUyM2YzNmItMDE3My00ZTQ1LWI5YTEtNzE5ZDAyZjRhMGU5IiwidCI6ImQwYjE3MTZmLWQ5NDEtNGNjMy1iNWY5LWU0MmViMzdmZDgwYiIsImMiOjh9). 

## Disclaimer

Le dataset n'est pas encore complet. Il contient les données pour les régions :
  * Nouvelle-Aquitaine (jusqu'au 12 mars)
  * Occitanie (jusqu'au 11 mars)
  * Hauts-de-France (jusqu'au 9 mars)
  * Normandie (jusqu'au 9 mars)
  * Pays de la Loire (jusqu'au 9)
  * Bourgogne Franche Comté (jusqu'au 11 mars) - les informations de cette région ont été éclatées arbitrairement entre les départements, l'ARS ne communiquant pas les informations détaillées
  * Bretagne (jusqu'au 12 mars)
  * PACA (jusqu'au 10 mars)
  * Centre-Val de Loire (jusqu'au 11 mars)
  * Auvergne-Rhône-Alpes (jusqu'au 10 mars)
  * Outre-mer (jusqu'au 13 mars)
  * Grand-Est (jusqu'au 10 mars)

Il est fourni sans garantie et peut contenir des erreurs ou omissions.

## Contexte

La France est devenue un foyer de propagation du COVID-19, avec une forte croissance du nombre de cas depuis début mars 2020.

## Objectif

L'objectif de ce repository est de constituer un dataset structuré des patients infectés par le COVID-19 en France.

Ce dataset est constitué à partir des communiqués de presse des autorités : Agences Régionales de la Santé, préfectures...

## Contributions

Les contributions sont bienvenues. Si vous souhaitez contribuer, il suffit de :
  * vous signaler en ouvrant une issue,
  * lire les communiqués de presse des Agences Régionales de Santé ou de toute autre source fiable, et sauvegarder ces sources de données dans le dossier 'sources',
  * transcrire les informations dans le tableau csv,
  * puis faire une pull request.

Le fichier csv est en encodage Unicode UTF-8.

Les années de naissance sont calculées selon la formule suivante : (2020 - âge).

## Kaggle

Le dataset du présent repository est également recopié sur Kaggle pour permettre des travaux de visualisation et d'analyse des données : https://www.kaggle.com/lperez/coronavirus-france-dataset

## Utilitaires

Trois utilitaires permettant de faciliter le travail de consolidation des
données France de la pandémie COVID-19 se trouvent dans le projet suivant :
[Git Repo for coronavirus-france-utils](https://github.com/SamAstro/coronavirus-france-utils)

## Remerciements

Ce dataset s'inspire d'un travail similaire réalisé en Corée : https://github.com/jihoo-kim/Coronavirus-Dataset

## Licence

Ce dataset est soumis à la licence CC-BY 4.0.

Contributeurs : Lior Perez, Samia Drappeau, Manon Fourniol, Zoragna, Raphaël Presberg
