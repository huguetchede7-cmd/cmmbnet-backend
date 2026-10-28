# CMMBNet Backend : API de gestion de l'épargne

API REST de CMMBNet, plateforme de gestion de l'épargne pour la CMMB
(institution de microfinance, Bénin). Projet de fin d'études, Licence Pro SIL, ESTG Bénin, 2026.

🔗 Frontend : https://github.com/huguetchede7-cmd/cmmbnet-frontend
🔗 Démo : https://mdb-front-bice.vercel.app

## Fonctionnalités
- Authentification par **JWT** (connexion, déconnexion)
- **Rôles et permissions** : administrateur, caissier, chargé d'épargne
- Gestion des administrateurs : création, modification, blocage et déblocage
- Gestion des clients et de leurs comptes d'épargne (ordinaire et à terme)
- Enregistrement des **dépôts** et **retraits**, avec numéro de transaction
- Historique unifié des transactions
- Statistiques du tableau de bord, filtrées selon le rôle (un caissier ne voit que ses opérations)
- Validation des données avec express-validator

## Technologies
Node.js · Express · TypeScript · MySQL · Sequelize · JWT · bcrypt · Jest

## Installation
1. `git clone <lien du dépôt>`
2. `npm install`
3. Copier `.env.example` vers `.env` et renseigner la base de données et le secret JWT
4. `npm run migrate-dev` (création des tables)
5. `npm run seed-dev` (données initiales)
6. `npm run dev`

Autres commandes : `npm start`, `npm run build`, `npm test`.

## Routes principales
| Domaine | Routes |
|---|---|
| Auth | `POST /auth/login`, `POST /app/auth/logout` |
| Administrateurs | `GET/POST /app/user/administrator`, `GET/PUT/DELETE /app/user/administrator/:id`, `PUT .../blockUser/:id`, `PUT .../unblockUser/:id` |
| Clients | `GET/POST /app/clients`, `GET/PUT/DELETE /app/clients/:id` |
| Comptes | `GET/POST /app/comptes`, `GET/DELETE /app/comptes/:id`, `GET /app/comptes/client/:client_id` |
| Dépôts | `GET/POST /app/depots`, `GET /app/depots/compte/:compte_id` |
| Retraits | `GET/POST /app/retraits`, `GET /app/retraits/compte/:compte_id` |
| Tableau de bord | `GET /app/dashboard/stats` |
| Transactions | `GET /transactions` |

## Auteur
Hugues Akpado Tchede · huguetchede7@gmail.com
