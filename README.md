# Le paradis des Pattouilles 🐾

## Description du projet

**Le paradis des Pattouilles** est un site web développé en local avec Angular, conçu pour un refuge animal fictif. Ce projet met en œuvre plusieurs concepts essentiels du développement web, notamment :

- **Formulaires réactifs (ReactiveForms)** pour la prise de rendez-vous et l'enregistrement des visiteurs.
- **Services Angular** pour la gestion centralisée des données des animaux.
- **Communication avec une API simulée** à l'aide d'un fichier JSON pour récupérer les informations des animaux.
- **Routing Angular** pour naviguer entre les différentes pages (accueil, détails des animaux, formulaire de contact, etc.).
- **Consommation d'observables** pour afficher dynamiquement les informations.

Ce projet a été réalisé dans le cadre d'une formation en développement, et est conçu pour mettre en pratique des concepts clés du framework Angular.

## Fonctionnalités

- **Accueil** : Liste des animaux du refuge sous forme de cartes.
- **Page de détails** : Informations détaillées sur chaque animal, avec photo, âge, race, etc.
- **Formulaire de prise de rendez-vous** : Permet aux utilisateurs de planifier une visite pour rencontrer un animal.
- **Page des animaux adoptés** : Présente les animaux qui ont trouvé une nouvelle famille.
- **Filtrage dynamique** : Sépare les animaux disponibles à l’adoption de ceux qui sont déjà adoptés.

## Technologies utilisées

- **Angular 18+**
- **HTML5 / SCSS**
- **JSON-server** pour simuler une API
- **TypeScript**
- **RxJS** pour la gestion des observables

## Installation et utilisation

1. **Cloner le dépôt** :
   ``
   git clone https://github.com/MaudouxEva/shelter.git
   ``
2. **Installer les dépendances** :
   ``
   npm install
   ``
3. **Lancer l'application Angular** :
   ``
   ng serve 
   ``
4. **Lancer le serveur JSON** :
   ``
   npm run fakeApi
   ``
5. **Accéder à l'application** :
   - Ouvrez votre navigateur à l'adresse http://localhost:4200 pour l'application Angular.
   - Le serveur JSON sera accessible à l'adresse http://localhost:3000.
  
## Prochaines étapes
- Mise en place d'un CRUD pour les animaux.
- Création d'une interface admin.
- Connexion à une véritable API REST pour gérer les données des animaux.
- Ajout d'un système de gestion des utilisateurs pour les adoptions.
- Amélioration du design.

## Auteur
Projet réalisé par Eva Maudoux dans le cadre de la formation en développement web.
