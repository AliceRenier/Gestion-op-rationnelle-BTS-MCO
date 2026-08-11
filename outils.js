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
    formules:["Ventes de marchandises HT − Coût d'achat des marchandises vendues"],
    simple:"Ce qu'on gagne en euros sur ce qu'on revend : prix de vente moins prix d'achat.",
    exemple:"Vase acheté 65 €, revendu 100 € : la marge est de 35 €."},

  "tx-marque":{nom:"Taux de marque",
    formules:["Marge commerciale ÷ Chiffre d'affaires HT × 100",
              "(PV HT − PA HT) ÷ PV HT × 100"],
    simple:"Sur 100 € encaissés en caisse, combien il en reste après avoir payé le fournisseur. On divise par le prix de VENTE.",
    exemple:"Vase vendu 100 €, acheté 65 € : il reste 35 € sur 100 € encaissés → taux de marque 35 %."},

  "tx-marge":{nom:"Taux de marge",
    formules:["Marge commerciale ÷ Coût d'achat des marchandises vendues × 100",
              "(PV HT − PA HT) ÷ PA HT × 100"],
    simple:"Combien on gagne pour 100 € dépensés chez le fournisseur. On divise par le prix d'ACHAT.",
    exemple:"Même vase : 35 € gagnés pour 65 € dépensés → taux de marge 54 %. Attention, ce n'est pas la même chose que le taux de marque."},

  "coef":{nom:"Coefficient multiplicateur",
    formules:["Prix de vente TTC ÷ Coût d'achat HT"],
    simple:"Par combien on multiplie le prix d'achat pour obtenir l'étiquette en rayon.",
    exemple:"Acheté 65 € HT, vendu 120 € TTC : coefficient de 1,85."},

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

  "elas":{nom:"Élasticité prix de la demande",
    formules:["Variation en % des quantités ÷ Variation en % du prix"],
    simple:"Mesure la réaction des clients à un changement de prix.",
    exemple:"Prix +10 %, ventes −20 % : élasticité de −2, la clientèle est très sensible au prix."},

  "tx-var":{nom:"Taux de variation",
    formules:["(Valeur d'arrivée − Valeur de départ) ÷ Valeur de départ × 100"],
    simple:"De combien de pour cent quelque chose a augmenté ou baissé.",
    exemple:"CA passé de 455 000 à 480 000 € : +5,5 %."}
};
