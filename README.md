# WebGos

## Sommaire
* [Architecture](#architecture)
* [Installer le projet](#installer-le-projet)
  * [Prérequis](#prrequis)
  * [Récupérer les sources](#rcuprer-les-sources)
  * [Installer les sources](#installer)
  * [Lancer le projet](#lancer)

## Architecture

### Technologies utilisées

L'application a été développée en Angular 8, avec la bibliothèque Angular Material. Nous avons
également utilisé la librairie angular-google-maps pour l'intégration de Maps dans l'application.
Elle est aussi PWA grâce à la libraire @angular/pwa.

## Installer le projet
### Prérequis
Avoir NodeJS d'installé, utiliser un navigateur récent.

### Récupérer les sources
La première étape est de cloner le repository afin d'obtenir les sources du projet. 
Pour rappel :
```
SSH : git clone git@github.com:bref-n-share/web-gos.git
HTTPS : git clone https://github.com/bref-n-share/web-gos.git
```
### Installer
Installer les paquets 
```
npm install
```

### Lancer
Si le back est lancé, vous pouvez lancer le front
```
ng serve
```
