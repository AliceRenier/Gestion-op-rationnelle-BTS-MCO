# PASSATION — Plateforme de missions BTS MCO

*À joindre au début de toute nouvelle conversation portant sur ce projet, avec le fichier de mission concerné.*

---

## Le projet en trois phrases

Un jeu d'enquête en ligne pour enseigner la Gestion Opérationnelle en BTS MCO, à des
étudiants souvent en difficulté scolaire et réfractaires à la matière. L'étudiant est
consultant junior : il est envoyé seul chez un dirigeant dont l'entreprise va mal, et
doit comprendre pourquoi. Chaque code à trouver est un calcul de gestion.

Objectif pédagogique central : **entraîner à déduire les étapes soi-même**, parce qu'à
l'épreuve E5 on ne demande pas « calculez le seuil de rentabilité » mais « que
conseillez-vous au dirigeant ? ». La sélection de l'outil est la vraie compétence.

---

## Architecture

| Fichier | Rôle | On y touche ? |
|---|---|---|
| `index.html` | Catalogue des missions. Autonome, styles embarqués. | À chaque ajout de mission |
| `jouer.html` | Charge `?m=go-01` puis le moteur | Jamais |
| `moteur.js` | Tout le jeu | Seulement pour ajouter un type d'épreuve |
| `outils.js` | Les formules, **communes à toutes les missions** | Pour ajouter un chapitre |
| `style.css` | Apparence du jeu | Rarement |
| `missions/*.js` | Le contenu d'une mission | **C'est ici que tout se passe** |
| `images/` | Illustrations, appelées par `<img src="images/x.jpg">` | Au besoin |

Chargement par balise `<script>` et non par requête réseau : le dossier fonctionne aussi
depuis une clé USB, hors ligne.

---

## Le contrat d'un fichier de mission

`window.MISSION = { ... }` avec :

- `ref`, `enseigne`, `sujet`, `role`, `situation`, `enjeux` — l'écran d'accueil
- `plan` — les étapes de la démarche, dans l'ordre (à reconstituer au niveau 2)
- `actes` — découpe la mission ; un acte se déverrouille quand le précédent est fini
- `pieces` — les documents. `debloc:null` = disponible d'emblée ; `debloc:"enquête"` = obtenu par un témoignage
- `serrures` — voir ci-dessous
- `personnages` + `budgetQuestions` — les interrogatoires
- `rapport` — le QCM final de recommandation
- `lexique` — le vocabulaire, en mots simples avec exemple

Une **serrure** enchaîne une `epreuve` (comprendre) puis un calcul (`outil` + `reponse`).
Sans `outil`, l'épreuve seule l'ouvre. Elle porte aussi :
`candidats` (les outils proposés), `faux` (une explication par mauvais choix),
`pieges` (les mauvaises réponses chiffrées classiques, avec leur explication),
`pouces` (3 indices de coût croissant), `fiche` (ajoutée au carnet), `reaction` (message du dirigeant).

### Types d'épreuve disponibles

| `type` | Ce que fait l'étudiant | Ce que ça travaille |
|---|---|---|
| `classement` | Range les postes dans les bonnes masses | Construire un bilan. **Tant que c'est faux, les totaux n'existent pas** |
| `appariement` | Associe un terme à sa définition ; chaque réussite livre un chiffre du code | Le vocabulaire (emplacement prévu pour H5P) |
| `document` | Retrouve les montants effacés d'une pièce | TVA, coefficient, prix unitaire |
| `temoin` | Désigne la pièce qui contredit un témoignage | Confronter des annexes, déduire |

---

## Règles non négociables

**Ne jamais nommer l'outil attendu dans l'énoncé.** L'énoncé est formulé dans les mots du
dirigeant. En mode accompagné, une `boussole` oriente le raisonnement sans donner la réponse.

**Mélanger les propositions.** La bonne réponse ne doit jamais occuper une position fixe.

**La jauge monte.** « Confiance du dirigeant » démarre à 55, +14 par code trouvé,
−1 ou −2 par erreur. Un étudiant qui se trompe partout finit quand même au maximum.
Se tromper ne doit jamais décourager.

**Chaque erreur est expliquée**, simplement, avec un exemple chiffré concret.
Y compris les mauvaises réponses numériques classiques.

**Les documents restent consultables pendant un calcul**, sans pénalité, sans perdre la saisie.

**Vérifier l'arithmétique par script** avant de livrer : la trésorerie doit tomber juste par
les deux chemins, aucun piège ne doit égaler la bonne réponse, chaque pièce doit être
accessible par au moins un chemin, chaque mauvais candidat doit avoir son explication.

---

## Vocabulaire simplifié déjà en usage

À réutiliser tel quel, dans le jeu comme dans les cours — c'est la cohérence qui fait l'effet.

| Terme officiel | Formulation retenue |
|---|---|
| Emplois stables | Ce qui dure |
| Ressources stables | L'argent qui reste longtemps |
| FRNG | Le matelas |
| BFR | L'argent bloqué en permanence par le fonctionnement |
| Actif circulant d'exploitation | Ce que le quotidien immobilise |
| Passif circulant d'exploitation | Ce que le quotidien laisse différer |
| Amortissements | L'usure déjà comptée sur le matériel |
| Taux de marque | Sur 100 € encaissés, ce qui reste |
| Taux de marge | Ce qu'on gagne pour 100 € dépensés chez le fournisseur |

Exemple pivot marge/marque : *croissant vendu 1 €, matières 0,52 € — marge 92 %, marque 48 %.
Même croissant, deux chiffres.*

---

## Identité visuelle

La boutique la nuit. Bleu nuit `#0B1425`, surfaces `#131F36`, enseigne néon `#FF3D8E`,
ambre `#FFC24A` pour l'argent, menthe `#3FD9A4` pour ce qui est validé, papier ticket `#F6F2E9`.
Polices : Bricolage Grotesque (titres), Karla (texte), JetBrains Mono (chiffres et codes).
Élément signature : l'enseigne « OUVERT » qui s'allume en clignotant à chaque code trouvé.

⚠️ Cette charte est faite pour un écran de téléphone. **Ne pas l'appliquer aux supports de
cours** : illisible projetée, ruineuse à imprimer. Les cours doivent avoir une identité
parente mais sur fond clair.

---

## Les trois niveaux de difficulté

Ce ne sont pas trois versions d'une même affaire — l'étudiant retiendrait les codes.
Ce sont des affaires différentes, qui montent d'un cran dans la chaîne du raisonnement.

1. **Facile** — les nombres sont écrits dans les documents. On repère et on calcule. *(GO-01, Ambiance & Co)*
2. **Moyen** — les nombres n'existent pas encore. Il faut les fabriquer avant de calculer. *(GO-02, Le Fournil de Sophie)*
3. **Difficile** — une seule question au départ, comme à l'E5. Personne ne dit quoi calculer. Plusieurs chapitres croisés, recommandation à rédiger.

---

## État au 11 août 2026

- **GO-01 — Ambiance & Co** (facile) : magasin de déco bénéficiaire mais à découvert. Surstockage.
- **GO-02 — Le Fournil de Sophie** (moyen) : boulangerie, les ventes montent et la marge s'effondre. Quatre épreuves, cinq personnages à interroger.
- Chapitres restants : coûts et seuil de rentabilité, stocks et approvisionnements, investissement et financement.
- Dossiers d'annales : à construire par recyclage des pièces existantes (chaque pièce porte son étiquette de chapitre).
- Reste à faire : un `atelier.html` local pour composer et vérifier les missions sans écrire de code.
