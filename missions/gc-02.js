/* ════════════════════════════════════════════════════════════
   MISSION GC-02 — Influx (suite)
   Adaptée du cas BTS MCO GammVert (session 2021, Dossier 2).
   Structure et méthode identiques au sujet original ; certaines
   valeurs ont été recalculées (le corrigé Studyrama utilisé comme
   référence contenait une incohérence sur les frais d'envoi —
   voir PASSATION.md). Le reste suit la même trame.
   Niveau difficile : une seule question de départ, comme à l'E5.
   ════════════════════════════════════════════════════════════ */
window.H5P_PATH = null;

window.MISSION = {
  ref:"GC-02",
  enseigne:"Influx",
  sujet:"Compte de résultat prévisionnel · Seuil de rentabilité · Approvisionnement",
  niveau:"Difficile",
  duree:"~65 min",
  accroche:"Une seule question : la soirée de lancement du studio va-t-elle rapporter à Influx, ou lui coûter de l'argent ?",
  client:{prenom:"Nadia", nom:"Nadia Ferreira", genre:"f"},
  chapitres:["Gestion des coûts","Approvisionnement"],

  role:"Vous êtes consultant junior au cabinet <b>ORIENS</b>. Ce dossier se traite comme à l'examen : un seul cas, plusieurs questions qui s'enchaînent, et personne ne vous dira quel outil utiliser.",
  situation:`<p>Le studio agrandi d'<b>Influx</b> est enfin prêt. <b>Nadia Ferreira</b> organise une soirée d'inauguration pour le présenter aux créateurs et aux marques partenaires de l'agence : cocktail, démonstration du plateau, et une offre de lancement sur les premières sessions de tournage.</p>
    <p>L'équipe a envoyé les invitations, réservé le traiteur, prévu deux collaborateurs sur place. Mais personne n'a encore vérifié si la soirée elle-même sera rentable — ni comment gérer les stocks des kits d'accueil offerts aux participants pendant tout l'été.</p>
    <p><b>« On a tout organisé sans regarder les chiffres. Dites-moi si cette soirée va nous coûter de l'argent. »</b></p>
    <p style="color:#8FA3C4;font-size:14px;font-style:italic">Comme dans les vraies épreuves BTS, cette mise en situation s'inspire d'un cas réel, mais les chiffres et les décisions présentés ici sont fictifs, imaginés pour l'exercice.</p>`,
  enjeux:[{n:"130", t:"participants attendus"}, {n:"2 h", t:"de soirée après la fermeture"}, {n:"8", t:"semaines de stock à planifier"}],

  plan:[
    "Construire le compte de résultat prévisionnel de la soirée",
    "Déterminer le seuil de rentabilité en nombre de participants",
    "Organiser l'approvisionnement des kits d'accueil pour l'été"
  ],

  actes:[
    {titre:"La soirée de lancement", serrures:["v1","v2"],
     intro:"Avant de savoir si la soirée est une bonne idée, il faut d'abord savoir si elle est rentable telle qu'elle est prévue.",
     plan:[
       "Construire le compte de résultat prévisionnel de la soirée",
       "En déduire le seuil de rentabilité en nombre de participants"
     ]},
    {titre:"L'approvisionnement des kits d'accueil", serrures:["v3"],
     intro:"La soirée n'est que le début : les kits d'accueil doivent être disponibles toute la saison, sans rupture ni surstock.",
     plan:[
       "Identifier le besoin de la période pour la semaine 30",
       "En déduire la quantité de kits, puis de cartons, à commander"
     ]}
  ],

  pieces:[
    {id:"mot", ic:"✉️", titre:"Message de Nadia", type:"Reçu à 10h30", chap:"Contexte", debloc:null, html:`
      <p class="manuscrit">« Entrez. La soirée est dans deux semaines, tout est réservé. Mais personne n'a fait le calcul : est-ce que ça va nous coûter de l'argent, ou pas ? Et il faut aussi que je sache comment gérer les kits d'accueil pour tout l'été, pas seulement pour ce soir-là. »</p>`},

    {id:"infos-soiree", ic:"🎉", titre:"Informations sur la soirée", type:"Annexe 1", chap:"Gestion des coûts", debloc:null, html:`
      <ul style="padding-left:18px;line-height:1.9">
        <li>Le CRM d'Influx comprend <b>10 000 contacts</b> (créateurs et marques). Seuls ceux du <b>cœur de cible</b> seront invités : ils représentent <b>65 %</b> du fichier.</li>
        <li>Taux de confirmation attendu sur les invitations envoyées : <b>2 %</b>.</li>
        <li>Invitations imprimées et envoyées par courrier, négociées à <b>60 € HT</b> par lot de 500 adresses.</li>
        <li>Deux collaborateurs seront présents de 19h à 21h, après la fermeture. Coût horaire brut : <b>10,86 €</b>. Charges sociales patronales : <b>15 %</b> du brut. Ces deux heures sont majorées à <b>25 %</b> (heures supplémentaires).</li>
        <li>200 kits d'accueil seront distribués, pour un montant total de <b>29 € HT</b>.</li>
        <li>On estime que <b>80 %</b> des participants réserveront un « Pack Découverte » (première session de tournage) à l'issue de la soirée, pour un panier moyen HT de <b>30,77 €</b>.</li>
        <li>Taux de marque moyen habituel sur ce type de prestation : <b>25 %</b>.</li>
      </ul>`},

    {id:"repartition-ventes", ic:"📦", titre:"Réservations prévisionnelles des kits — été", type:"Annexe 2", chap:"Approvisionnement", debloc:"v2", html:`
      <p style="font-size:13.5px;color:#6C7891">Les kits sont livrés par cartons de 6. Le studio est livré en quantités variables les semaines paires, en début de semaine.</p>
      <table class="reg">
        <tr><th>Semaine</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th><th>32</th><th>33</th><th>34</th></tr>
        <tr><td>Part des réservations</td><td>5 %</td><td>5 %</td><td>25 %</td><td>15 %</td><td>15 %</td><td>10 %</td><td>10 %</td><td>15 %</td></tr>
      </table>
      <p>Les réservations des semaines 27 à 34 sont estimées à <b>130 kits</b> au total. La semaine 35 est estimée séparément à <b>25 kits</b>.</p>
      <p>Stock initial en début de semaine 27 : <b>9 kits</b>. Pas de stock de sécurité prévu. Arrondir tous les calculs à l'entier supérieur.</p>`},

    {id:"exemple-semaines", ic:"📋", titre:"Semaines déjà planifiées", type:"Votre travail préparatoire", chap:"—", debloc:"v2", html:`
      <p style="font-size:13.5px;color:#6C7891">Les réservations et les stocks des trois premières semaines sont déjà calculés — la méthode est la même pour toutes les semaines paires.</p>
      <table class="reg">
        <tr><th>Semaine</th><th>Stock initial</th><th>Réservations</th><th>Besoin de la période</th><th>Kits à commander</th><th>Cartons</th><th>Stock final</th></tr>
        <tr><td>27 (impaire)</td><td>9</td><td>7</td><td>—</td><td>—</td><td>—</td><td>2</td></tr>
        <tr><td>28 (paire)</td><td>2</td><td>7</td><td>40</td><td>38</td><td>7</td><td>37</td></tr>
        <tr><td>29 (impaire)</td><td>37</td><td>33</td><td>—</td><td>—</td><td>—</td><td>4</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">Semaine 28 (paire, avec livraison) : besoin = réservations S28 + réservations S29 = 7 + 33 = 40. Kits à commander = besoin − stock initial = 40 − 2 = 38. Cartons = 38 ÷ 6, arrondi au-dessus = 7, soit 42 kits livrés. Stock après livraison = 2 + 42 = 44. Stock final = 44 − 7 = 37.</p>
      <p style="font-size:13.5px;color:#6C7891">Semaine impaire (pas de livraison) : stock final = stock initial − réservations.</p>`},

    {id:"bilan-final", ic:"📋", titre:"Synthèse du dossier", type:"Récapitulatif", chap:"—", debloc:"v3", html:`
      <p>Compte de résultat prévisionnel établi, seuil de rentabilité connu, approvisionnement de l'été planifié.</p>
      <p>Reste à décider : Nadia maintient-elle la soirée telle quelle ?</p>`}
  ],

  serrures:[
    {
      id:"v1", ic:"🧾", nom:"Le compte de résultat de la soirée",
      epreuve:{
        type:"document",
        titre:"Construisez le résultat prévisionnel",
        consigne:"Complétez chaque ligne à partir des informations de l'Annexe 1. Arrondissez au centime.",
        lignes:[
          {label:"Nombre de participants attendus", champ:"participants"},
          {label:"Chiffre d'affaires prévisionnel (€)", champ:"ca"},
          {label:"Coût de production des sessions vendues (€)", champ:"cout"},
          {label:"Salaires et charges sociales (€)", champ:"salaires"},
          {label:"Frais d'impression et d'envoi (€)", champ:"envoi"},
          {label:"Achat des kits d'accueil (200 pièces, HT)", valeur:"29,00"},
          {label:"Résultat prévisionnel (€)", champ:"resultat"}
        ],
        champs:[
          {id:"participants", label:"Nombre de participants", reponse:130, tol:0,
           expl:{t:"Nombre de participants", p:"CRM total × part du cœur de cible × taux de confirmation.", ex:"10 000 × 65 % × 2 % = 130."}},
          {id:"ca", label:"Chiffre d'affaires prévisionnel", reponse:3200.08, tol:0.5,
           expl:{t:"Chiffre d'affaires prévisionnel", p:"Participants × taux de transformation × panier moyen HT.", ex:"130 × 80 % × 30,77 ≈ 3 200,08 €."}},
          {id:"cout", label:"Coût de production", reponse:2400.06, tol:0.5,
           expl:{t:"Coût de production", p:"Le taux de marque donne ce qui RESTE sur 100 € encaissés. Le coût de production, c'est donc le complément à 100 %.", ex:"3 200,08 × (1 − 25 %) ≈ 2 400,06 €."}},
          {id:"salaires", label:"Salaires et charges", reponse:62.44, tol:0.5,
           expl:{t:"Salaires et charges", p:"Taux horaire brut × nombre de personnes × heures × charges sociales × majoration heures sup.", ex:"10,86 × 2 × 2 × 1,15 × 1,25 ≈ 62,44 €."}},
          {id:"envoi", label:"Frais d'envoi", reponse:780, tol:1,
           expl:{t:"Frais d'envoi", p:"Nombre de contacts ciblés (cœur de cible), divisé par la taille d'un lot, arrondi au lot supérieur, multiplié par le prix du lot.", ex:"10 000 × 65 % = 6 500 contacts. 6 500 ÷ 500 = 13 lots. 13 × 60 = 780 €."}},
          {id:"resultat", label:"Résultat prévisionnel", reponse:-71.42, tol:1,
           expl:{t:"Résultat prévisionnel", p:"Chiffre d'affaires moins l'ensemble des charges.", ex:"3 200,08 − (2 400,06 + 62,44 + 780 + 29) ≈ −71,42 €."}}
        ],
        conclusion:"La soirée coûte 71,42 € de plus qu'elle ne rapporte, telle qu'elle est prévue actuellement. Ce n'est pas une catastrophe, mais ce n'est pas gratuit non plus."
      },
      demande:"Déterminez le résultat prévisionnel de la soirée de lancement, à partir des informations de l'Annexe 1.",
      boussole:"Construisez la soirée comme un petit compte de résultat : ce qui rentre (chiffre d'affaires), moins tout ce qui sort (coût de production, personnel, envoi, kits). Chaque montant se calcule à partir d'un pourcentage ou d'un taux donné dans l'Annexe 1.",
      candidats:[], debloque:[],
      reaction:"Un léger déficit, pas une catastrophe. Reste à savoir combien de participants en plus changeraient la donne.",
      pouces:[
        {cout:1, txt:"Toutes les données sont dans l'Annexe 1. Suivez l'ordre des lignes du tableau."},
        {cout:2, txt:"CA = 130 × 0,80 × 30,77. Coût de production = CA × 0,75."},
        {cout:4, txt:"Résultat = 3 200,08 − 2 400,06 − 62,44 − 780 − 29 ≈ −71,42 €."}
      ]
    },
    {
      id:"v2", ic:"⚖️", nom:"Le seuil de rentabilité de la soirée",
      epreuve:{
        type:"document",
        titre:"À partir de combien de participants ?",
        consigne:"À partir de votre résultat prévisionnel, déterminez le nombre total de participants à partir duquel la soirée devient rentable.",
        lignes:[
          {label:"Résultat prévisionnel (€)", valeur:"−71,42"},
          {label:"Panier moyen HT par participant transformé (€)", valeur:"30,77"},
          {label:"Nombre total de participants pour atteindre l'équilibre", champ:"seuil"}
        ],
        champs:[
          {id:"seuil", label:"Seuil de participants", reponse:133, tol:0,
           expl:{t:"Seuil de participants", p:"Le manque à gagner divisé par le panier moyen donne le nombre de participants en plus à faire venir ; on l'ajoute au nombre déjà attendu, en arrondissant toujours au-dessus.", ex:"71,42 ÷ 30,77 ≈ 2,32, arrondi à 3 participants de plus. 130 + 3 = 133."}}
        ],
        conclusion:"À partir de 133 participants, la soirée devient rentable — soit seulement 3 de plus que prévu. Un petit effort sur les confirmations suffirait."
      },
      demande:"Déterminez à partir de combien de participants la soirée devient rentable.",
      boussole:"Le résultat trouvé à l'étape précédente est un manque à gagner. Chaque participant en plus rapporte le panier moyen : combien en faut-il pour combler ce manque ?",
      candidats:[], debloque:["repartition-ventes","exemple-semaines"],
      reaction:"133, à peine plus que les 130 attendus. Un tout petit effort sur les confirmations changerait la donne.",
      pouces:[
        {cout:1, txt:"Le manque à gagner, c'est la valeur absolue du résultat trouvé à l'étape précédente."},
        {cout:2, txt:"71,42 ÷ 30,77 ≈ 2,32 — toujours arrondir au-dessus, on ne peut pas avoir 0,32 participant."},
        {cout:4, txt:"3 participants de plus, soit 130 + 3 = 133 au total."}
      ]
    },
    {
      id:"v3", ic:"📦", nom:"La semaine 30",
      epreuve:{
        type:"document",
        titre:"Complétez la semaine 30",
        consigne:"Les semaines 27, 28 et 29 sont déjà planifiées (pièce « Semaines déjà planifiées »). La semaine 30 est paire : appliquez la même méthode que la semaine 28.",
        entete:`<p style="font-size:13.5px;color:#6C7891">Semaine 30 — stock initial : 4 kits (= stock final de la semaine 29). Réservations semaine 30 : 15 % × 130, arrondi au-dessus = 20. Réservations semaine 31 : 15 % × 130, arrondi au-dessus = 20.</p>`,
        lignes:[
          {label:"Stock initial (semaine 30)", valeur:"4"},
          {label:"Réservations semaine 30", valeur:"20"},
          {label:"Besoin de la période (S30 + S31)", champ:"besoin"},
          {label:"Kits à commander", champ:"commander"},
          {label:"Cartons à commander", champ:"cartons"},
          {label:"Stock final de la semaine 30", champ:"stockfinal"}
        ],
        champs:[
          {id:"besoin", label:"Besoin de la période", reponse:40, tol:0,
           expl:{t:"Besoin de la période", p:"Une semaine paire couvre ses propres réservations ET celles de la semaine impaire suivante, puisqu'il n'y a pas de nouvelle livraison entre les deux.", ex:"Réservations S30 (20) + réservations S31 (20) = 40."}},
          {id:"commander", label:"Kits à commander", reponse:36, tol:0,
           expl:{t:"Kits à commander", p:"Le besoin moins ce qu'il reste déjà en stock.", ex:"40 − 4 (stock initial) = 36."}},
          {id:"cartons", label:"Cartons à commander", reponse:6, tol:0,
           expl:{t:"Cartons à commander", p:"On commande par cartons de 6, toujours arrondi au-dessus.", ex:"36 ÷ 6 = 6 cartons (tombe juste, pas d'arrondi nécessaire)."}},
          {id:"stockfinal", label:"Stock final semaine 30", reponse:20, tol:0,
           expl:{t:"Stock final", p:"Stock initial + kits livrés − réservations de la semaine.", ex:"4 + (6 × 6) − 20 = 4 + 36 − 20 = 20."}}
        ],
        conclusion:"20 kits en stock fin de semaine 30 — de quoi couvrir le début de la semaine 31 sans rupture, sans excès non plus."
      },
      demande:"Présentez le programme d'approvisionnement des kits d'accueil pour la semaine 30.",
      boussole:"La méthode est déjà sous vos yeux, appliquée aux semaines 27 à 29 : à vous de la reproduire à l'identique sur la semaine 30.",
      candidats:[], debloque:["bilan-final"],
      reaction:"L'approvisionnement de l'été est calé. Reste la décision finale.",
      pouces:[
        {cout:1, txt:"Même méthode que la semaine 28 (pièce « Semaines déjà planifiées ») : besoin = réservations de la semaine + réservations de la semaine suivante."},
        {cout:2, txt:"Besoin = 20 + 20 = 40. À commander = 40 − 4 = 36."},
        {cout:4, txt:"36 ÷ 6 = 6 cartons. Stock final = 4 + 36 − 20 = 20."}
      ]
    }
  ],

  rapport:[
    {
      q:"Nadia doit-elle maintenir la soirée telle qu'elle est prévue ?",
      choix:[
        {t:"Non, il faut l'annuler : elle coûte de l'argent à Influx.", bon:false, r:"Le déficit prévu est minime (71,42 €) et le seuil de rentabilité n'est qu'à 3 participants de plus que prévu. Annuler reviendrait à perdre une occasion de présenter le studio pour un risque financier très limité."},
        {t:"Oui, en cherchant simplement à faire venir 3 participants de plus que prévu pour passer à l'équilibre.", bon:true, r:"Exactement. Le déficit est faible et le seuil de rentabilité très proche du nombre de participants déjà attendu. Un effort ciblé sur les relances (un rappel par SMS la veille, par exemple) suffirait à passer dans le vert."},
        {t:"Oui, sans rien changer : le résultat est de toute façon positif.", bon:false, r:"Faux : le compte de résultat prévisionnel montre un déficit de 71,42 €, pas un bénéfice."},
        {t:"Oui, en réduisant le nombre de kits d'accueil distribués pour économiser.", bon:false, r:"Les kits d'accueil (29 € au total) pèsent très peu dans le déficit. Le vrai levier est ailleurs : les frais d'envoi (780 €) pèsent bien plus lourd dans le budget."}
      ]
    },
    {
      q:"Quel levier réduirait le plus efficacement le déficit de la soirée, sans toucher à la qualité de l'événement ?",
      choix:[
        {t:"Réduire le nombre de collaborateurs présents.", bon:false, r:"Les salaires et charges ne représentent que 62,44 € sur un déficit de 71,42 € : même les supprimer entièrement ne suffirait pas, et ça dégraderait l'accueil des invités."},
        {t:"Remplacer une partie des invitations papier par un envoi numérique aux contacts qui l'acceptent.", bon:true, r:"Les frais d'envoi (780 €) sont de loin le plus gros poste de charges après le coût de production. Réduire le nombre d'invitations papier, au profit d'un envoi numérique pour une partie du fichier, ferait immédiatement basculer la soirée dans le positif."},
        {t:"Supprimer les kits d'accueil.", bon:false, r:"29 € sur un déficit de 71,42 € : l'effet serait réel mais insuffisant à lui seul, et les kits d'accueil font partie de l'expérience proposée aux invités."},
        {t:"Augmenter le prix du Pack Découverte vendu ce soir-là.", bon:false, r:"C'est un levier possible sur le chiffre d'affaires, mais il risque de réduire le taux de transformation (moins de participants achèteraient) — l'effet net est incertain, contrairement à la réduction des frais d'envoi qui n'a pas cet inconvénient."}
      ]
    }
  ],

  lexique:[
    {terme:"Résultat prévisionnel", def:"Chiffre d'affaires attendu, moins l'ensemble des charges prévues pour l'opération.", ex:"3 200,08 − (2 400,06 + 62,44 + 780 + 29) ≈ −71,42 €."},
    {terme:"Seuil de rentabilité (en nombre de clients)", def:"Le nombre de personnes à faire venir pour que les charges soient couvertes par les ventes — toujours arrondi au-dessus.", ex:"71,42 ÷ 30,77 ≈ 2,32, arrondi à 3 participants de plus, soit 133 au total."},
    {terme:"Besoin de la période", def:"Pour une semaine avec livraison, ce qu'il faut couvrir jusqu'à la prochaine livraison : les réservations de la semaine elle-même, plus celles de la semaine suivante sans livraison.", ex:"Réservations S30 (20) + réservations S31 (20) = 40."},
    {terme:"Kits/cartons à commander", def:"Le besoin de la période, moins ce qu'il reste déjà en stock — puis converti en nombre de cartons, toujours arrondi au-dessus.", ex:"(40 − 4) ÷ 6 = 6 cartons exactement."}
  ]
};
