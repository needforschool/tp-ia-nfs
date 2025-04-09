# Guide d'installation et d'utilisation

## Prérequis

- Node.js (version 16 ou supérieure)
- MongoDB Atlas (compte gratuit)
- Git

## Installation du projet

### 1. Cloner le projet

```bash
git clone <votre-repo>
cd tp-ia-antoine-charlotte-said
```

### 2. Configuration de MongoDB Atlas

1. Créez un compte gratuit sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Créez un nouveau cluster (l'option gratuite M0 est suffisante)
3. Configurez les règles d'accès réseau pour autoriser votre IP
4. Créez un utilisateur de base de données avec un nom d'utilisateur et mot de passe
5. Obtenez votre chaîne de connexion dans "Connect > Connect your application"

### 4. Installation du backend

```bash
cd backend
npm install
```

Créez un fichier `.env` à la racine du dossier backend:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/airbnb?retryWrites=true&w=majority
PORT=5000
```

Remplacez la chaîne de connexion par celle de votre cluster MongoDB Atlas.

### 5. Installation du frontend

```bash
cd ../frontend
npm install
```

### 6. Démarrage de l'application

Dans un terminal, démarrez le backend:
```bash
cd backend
npm run dev
```

Dans un autre terminal, démarrez le frontend:
```bash
cd frontend
npm start
```

L'application sera accessible à l'adresse http://localhost:3000

## Utilisation de l'application

