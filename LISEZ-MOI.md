# Plateforme de missions — BTS MCO Gestion opérationnelle

## Mettre en ligne
Déposer **tout le dossier** sur Vercel (vercel.com/new, glisser-déposer).
Une adresse est générée, elle ne change plus.

- Catalogue : `votre-adresse.vercel.app`
- Une mission : `votre-adresse.vercel.app/jouer.html?m=go-01`

Le bouton « Lien » de chaque carte copie l'adresse à coller dans Google Classroom.
Pas de compte, pas d'installation : les étudiants ouvrent et jouent.

## Ajouter une mission
1. Copier `missions/go-01.js` → `missions/go-02.js`
2. Réécrire le contenu (pièces, serrures, rapport, lexique)
3. Ajouter une ligne dans `CATALOGUE`, en haut de `index.html`, avec `pret:true`

Le moteur et la boîte à outils ne changent jamais.

## Les types d'épreuve disponibles
Une serrure peut enchaîner une **épreuve** (comprendre) puis un **calcul** (ouvrir).
Une serrure sans `outil` est ouverte par la seule épreuve.

| `epreuve.type` | Ce que l'étudiant fait | Ce que ça travaille |
|---|---|---|
| `classement` | Range des postes dans les bonnes masses | Lire et construire un bilan |
| `appariement` | Associe un terme à sa définition ; chaque bonne réponse livre un chiffre du code | Le vocabulaire (emplacement H5P) |
| `document` | Retrouve les montants effacés d'une pièce | TVA, coefficient, prix unitaire |
| `temoin` | Désigne la pièce qui contredit un témoignage | Confronter des annexes, déduire |

Autres réglages de mission :
- `actes` : découpe la mission ; un acte se déverrouille quand le précédent est fini
- `personnages` + `budgetQuestions` : les interrogatoires, avec un nombre de questions limité
- `piece.debloc:"enquête"` : pièce obtenue par un témoignage et non par un code

## Les fichiers
| Fichier | Rôle | À modifier ? |
|---|---|---|
| `index.html` | Catalogue des missions | oui, à chaque ajout |
| `jouer.html` | Lance une mission | non |
| `moteur.js` | Le jeu | non |
| `outils.js` | Les formules, communes à tout | oui, pour ajouter un chapitre |
| `style.css` | L'apparence | non |
| `missions/*.js` | Le contenu d'une mission | c'est ici que tout se passe |
| `images/` | Vos illustrations | à créer, appelées par `<img src="images/x.jpg">` |

## Hors ligne
Le dossier fonctionne aussi depuis une clé USB, en ouvrant `index.html`.
Sans internet, seules les polices changent.
