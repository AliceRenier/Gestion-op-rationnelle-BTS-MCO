/* ════════════════════════════════════════════════════════════
   LA BOÎTE À OUTILS — commune à toutes les missions.
   Ajouter un outil ici le rend disponible partout, y compris
   dans les annales qui mélangent les chapitres.
   ════════════════════════════════════════════════════════════ */
window.OUTILS = {
  "frng":{nom:"Fonds de roulement net global (FRNG)",
    formules:["Ressources stables − Emplois stables",
              "(Capitaux propres + Amortissements + Dettes financières) − Immobilisations brutes"],
    simple:"Le matelas de sécurité. L'argent qui reste quand on a fini de payer tout le matériel qui dure (murs, meubles, véhicule).",
    exemple:"J'ai 210 € de ressources durables, mon matériel m'a coûté 180 € : il me reste 30 € de matelas."},

  "bfre":{nom:"Besoin en fonds de roulement (BFR)",
    formules:["Actif circulant d'exploitation − Passif circulant d'exploitation",
              "(Stocks + Créances clients) − (Dettes fournisseurs + Dettes fiscales et sociales)"],
    simple:"L'argent bloqué en permanence dans le fonctionnement du magasin : les marchandises qui dorment en réserve et ce que les clients n'ont pas encore payé, moins ce que les fournisseurs acceptent d'attendre.",
    exemple:"J'ai 85 € de marchandises en réserve, mais mon fournisseur me laisse 48 € d'ardoise : il me manque 37 € à sortir de ma poche."},

  "tn":{nom:"Trésorerie nette",
    formules:["FRNG − BFR",
              "Disponibilités − Concours bancaires courants",
              "(Banque + Caisse) − Découvert utilisé"],
    simple:"Ce qu'il y a vraiment sur le compte. Le matelas moins le besoin. Si le besoin dépasse le matelas, on est à découvert.",
    exemple:"Matelas 30 €, besoin 50 € : je suis à −20 €. Les deux façons de la calculer donnent toujours le même résultat, c'est le moyen de se vérifier."},

  "marge":{nom:"Marge commerciale",
    formules:["Prix de vente HT − Coût d'achat HT",
              "Ventes de marchandises HT − Coût d'achat des marchandises vendues"],
    simple:"Ce qu'on gagne en euros sur ce qu'on revend. Attention : les deux montants doivent être hors taxes.",
    exemple:"Vendu 900 € TTC (soit 750 € HT), acheté 500 € HT : marge de 250 €."},

  "tx-marque":{nom:"Taux de marque",
    formules:["Marge commerciale ÷ Prix de vente HT × 100",
              "Marge commerciale ÷ Chiffre d'affaires HT × 100"],
    simple:"Sur 100 € encaissés en caisse, combien il en reste après avoir payé le fournisseur. On divise par le prix de VENTE.",
    exemple:"Vase vendu 100 €, acheté 65 € : il reste 35 € sur 100 € encaissés → taux de marque 35 %."},

  "tx-marge":{nom:"Taux de marge",
    formules:["Marge commerciale ÷ Coût d'achat HT × 100"],
    simple:"Combien on gagne pour 100 € dépensés chez le fournisseur. On divise par le prix d'ACHAT.",
    exemple:"Même vase : 35 € gagnés pour 65 € dépensés → taux de marge 54 %. Attention, ce n'est pas la même chose que le taux de marque."},

  "coef":{nom:"Coefficient multiplicateur",
    formules:["Prix de vente TTC ÷ Coût d'achat HT"],
    simple:"Le nombre par lequel on multiplie le prix d'achat pour obtenir directement l'étiquette en magasin. Attention : achat en HT, vente en TTC.",
    exemple:"Acheté 800 € HT, vendu 2 000 € TTC : 2 000 ÷ 800 = coefficient de 2,50."},

  "mcv":{nom:"Marge sur coûts variables",
    formules:["Chiffre d'affaires − Charges variables",
              "Chiffre d'affaires × Taux de marge sur coûts variables"],
    simple:"Ce qui reste du chiffre d'affaires une fois payées les dépenses qui augmentent avec les ventes (marchandises, emballages).",
    exemple:"100 € vendus, 60 € de marchandises : il reste 40 € pour payer le loyer et les salaires."},

  "sr":{nom:"Seuil de rentabilité",
    formules:["Charges fixes ÷ Taux de marge sur coûts variables",
              "(Charges fixes × CA) ÷ Marge sur coûts variables"],
    simple:"Le chiffre d'affaires à atteindre pour ne rien gagner ni rien perdre. En dessous on perd, au-dessus on gagne.",
    exemple:"40 000 € de loyer et salaires à payer, 40 % de marge : il faut vendre pour 100 000 € pour être à l'équilibre."},

  "pm":{nom:"Point mort",
    formules:["(Seuil de rentabilité ÷ Chiffre d'affaires) × 360",
              "(Seuil de rentabilité ÷ CA) × 12 (en mois)"],
    simple:"La DATE à laquelle on atteint l'équilibre. Le seuil de rentabilité en euros, converti en jours.",
    exemple:"Équilibre atteint au bout de 250 jours : à partir du 7 septembre, tout ce qu'on vend devient du bénéfice."},

  "stock-j":{nom:"Durée moyenne de stockage",
    formules:["(Stock moyen ÷ Coût d'achat des marchandises vendues) × 360",
              "360 ÷ Rotation des stocks"],
    simple:"Combien de JOURS un article reste en réserve avant d'être vendu. Plus c'est long, plus l'argent dort au lieu de circuler.",
    exemple:"Un vase reste 98 jours en réserve : l'argent qui a servi à l'acheter est immobilisé plus de trois mois."},

  "rota":{nom:"Rotation des stocks",
    formules:["Coût d'achat des marchandises vendues ÷ Stock moyen"],
    simple:"Combien de FOIS par an on vide et remplit la réserve. Le résultat est un nombre de fois, pas des jours.",
    exemple:"Rotation de 3,7 : la réserve se renouvelle moins de 4 fois dans l'année. Un supermarché tourne à 20 ou 30."},

  "cli":{nom:"Délai moyen de règlement clients",
    formules:["(Créances clients ÷ Chiffre d'affaires TTC) × 360"],
    simple:"Combien de jours les clients mettent à payer. En magasin, la plupart paient tout de suite.",
    exemple:"14 jours de délai : les clients règlent vite, ce n'est pas là que l'argent se bloque."},

  "fou":{nom:"Délai moyen de règlement fournisseurs",
    formules:["(Dettes fournisseurs ÷ Achats TTC) × 360"],
    simple:"Combien de jours on met à payer les fournisseurs. Plus c'est long, plus ils nous financent gratuitement.",
    exemple:"46 jours : le fournisseur avance l'argent pendant un mois et demi, c'est plutôt confortable."},

  "caf":{nom:"Capacité d'autofinancement (CAF)",
    formules:["Résultat net + Dotations aux amortissements",
              "EBE + produits encaissables − charges décaissables"],
    simple:"L'argent que l'activité fabrique en un an et qu'on peut réinvestir sans emprunter.",
    exemple:"12 600 € de bénéfice + 12 000 € d'amortissements = 24 600 € générés par l'activité."},

  "van":{nom:"Valeur actuelle nette (VAN)",
    formules:["Σ flux de trésorerie actualisés − Investissement initial"],
    simple:"Sert à décider si un investissement vaut le coup. Positive, le projet rapporte plus qu'il ne coûte.",
    exemple:"Un deuxième magasin coûte 80 000 € et rapportera 95 000 € actualisés : VAN de +15 000 €, le projet est rentable."},

  "delai-recup":{nom:"Délai de récupération du capital investi",
    formules:["(360 × dernier cumul actualisé négatif, en valeur absolue) ÷ FNT actualisé de l'année suivante"],
    simple:"Le temps qu'il faut pour que les flux de trésorerie actualisés remboursent entièrement l'investissement de départ.",
    exemple:"Cumul de −68,11 K€ fin année 3, +150,89 K€ de flux actualisé en année 4 : (360 × 68,11) ÷ 150,89 ≈ 163 jours après le début de l'année 4."},

  "elas":{nom:"Élasticité prix de la demande",
    formules:["Variation en % des quantités ÷ Variation en % du prix"],
    simple:"Mesure la réaction des clients à un changement de prix.",
    exemple:"Prix +10 %, ventes −20 % : élasticité de −2, la clientèle est très sensible au prix."},

  "tx-var":{nom:"Pourcentage d'évolution",
    formules:["(Arrivée − Départ) ÷ Départ × 100"],
    simple:"De combien de pour cent une valeur a augmenté ou baissé entre deux dates.",
    exemple:"CA de 180 000 € l'an dernier, 207 000 € cette année : (207 000 − 180 000) ÷ 180 000 × 100 = +15 %."},

  "part":{nom:"Pourcentage de part",
    formules:["Partiel ÷ Total × 100","Sur Excel : =Partiel / $Total$ puis format %"],
    simple:"Quel poids un élément représente dans un total. Sert à savoir qui pèse le plus.",
    exemple:"Une gamme fait 144 900 € sur 207 000 € de ventes : 144 900 ÷ 207 000 × 100 = 70 % du chiffre d'affaires."},

  "reduc":{nom:"Montant d'une réduction ou d'une hausse",
    formules:["Montant × (% ÷ 100)"],
    simple:"Combien vaut la remise en euros, ou combien la hausse ajoute. Le résultat est un montant, pas un prix final.",
    exemple:"Meuble à 850 €, hausse de 12 % : 850 × 0,12 = 102 € de hausse."},

  "apres-remise":{nom:"Montant après remise",
    formules:["Départ × (1 − % ÷ 100)"],
    simple:"Le prix à payer une fois la remise enlevée. En une seule opération, sans soustraction séparée.",
    exemple:"569 € avec 8 % de remise : 569 × 0,92 = 523,48 €."},

  "apres-aug":{nom:"Montant après augmentation",
    formules:["Départ × (1 + % ÷ 100)"],
    simple:"Le prix une fois la hausse ajoutée. C'est aussi comme ça qu'on passe du HT au TTC.",
    exemple:"523,48 € HT avec 5,5 % de TVA : 523,48 × 1,055 = 552,27 € TTC."},

  "avant-remise":{nom:"Montant avant remise",
    formules:["Après ÷ (1 − % ÷ 100)"],
    simple:"Le prix catalogue, retrouvé à partir de ce qui a réellement été payé. On divise, on ne multiplie pas.",
    exemple:"Payé 1 850 € avec 7,5 % de remise : 1 850 ÷ 0,925 = 2 000 € au catalogue."},

  "avant-aug":{nom:"Montant avant augmentation",
    formules:["Après ÷ (1 + % ÷ 100)"],
    simple:"Le prix de base, retrouvé en retirant une hausse incluse. C'est comme ça qu'on passe du TTC au HT.",
    exemple:"600 € TTC avec 20 % de TVA : 600 ÷ 1,20 = 500 € HT."}
};
