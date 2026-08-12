/* ════════════════════════════════════════════════════════════
   MISSION GC-01 — Influx
   Adaptée du cas BTS MCO GammVert (session 2021, Dossier 1).
   Chiffres identiques au sujet original, contexte reskinné.
   Niveau difficile : une seule question de départ, comme à l'E5.
   ════════════════════════════════════════════════════════════ */
window.H5P_PATH = null;

window.MISSION = {
  ref:"GC-01",
  enseigne:"Influx",
  sujet:"Tableau de bord · VAN · Délai de récupération",
  niveau:"Difficile",
  duree:"~75 min",
  accroche:"Une seule question : le studio de tournage d'Influx mérite-t-il d'être agrandi ?",
  client:{prenom:"Nadia", nom:"Nadia Ferreira", genre:"f"},
  chapitres:["Gestion des coûts","Rentabilité des investissements"],

  role:"Vous êtes consultant junior au cabinet <b>ORIENS</b>. Ce dossier se traite comme à l'examen : un seul cas, plusieurs questions qui s'enchaînent, et personne ne vous dira quel outil utiliser.",
  situation:`<p><b>Influx</b> est une agence qui gère des créateurs de contenu — YouTube, TikTok, Instagram — et organise leurs partenariats de marque. L'agence est structurée en plusieurs pôles d'activité. <b>Nadia Ferreira</b> en est la directrice.</p>
    <p>Le pôle « Studio & Production » existe déjà, modestement : un petit plateau que les créateurs empruntent à l'occasion. Nadia veut l'agrandir pour de bon, avec du matériel de tournage professionnel, afin de proposer des productions abouties en interne plutôt que de renvoyer les créateurs vers des prestataires externes.</p>
    <p><b>« Avant de signer un chèque à 400 000 €, je veux être sûre que ce pôle le mérite — et que l'investissement se rentabilise vraiment. »</b></p>
    <p style="color:#8FA3C4;font-size:14px;font-style:italic">Comme dans les vraies épreuves BTS, cette mise en situation s'inspire d'un cas réel, mais les chiffres et les décisions présentés ici sont fictifs, imaginés pour l'exercice.</p>`,
  enjeux:[{n:"7", t:"pôles d'activité"}, {n:"400 000 €", t:"d'investissement envisagé"}, {n:"5 ans", t:"pour rentabiliser"}],

  plan:[
    "Construire le tableau de bord du pôle Studio & Production",
    "Évaluer la rentabilité du projet avec la VAN",
    "Déterminer le délai de récupération du capital investi",
    "Conclure sur la faisabilité du projet"
  ],

  actes:[
    {titre:"Le pôle Studio & Production", serrures:["v1","v2","v3","v4"],
     intro:"Avant de parler d'agrandissement, encore faut-il savoir ce que pèse vraiment ce pôle aujourd'hui, comparé aux six autres.",
     plan:[
       "Mesurer l'évolution du chiffre d'affaires du pôle",
       "Mesurer le poids du pôle dans l'ensemble de l'agence",
       "Calculer ce que le pôle rapporte sur ses ventes",
       "Calculer ce que le pôle rapporte sur ses coûts"
     ]},
    {titre:"Le projet d'équipement", serrures:["v5","v6"],
     intro:"Le diagnostic est posé. Reste à savoir si les 400 000 € demandés seront un jour remboursés — et en combien de temps.",
     plan:[
       "Reconstituer les flux de trésorerie prévisionnels et en déduire la VAN",
       "Déterminer le délai de récupération du capital investi"
     ]}
  ],

  pieces:[
    {id:"mot", ic:"✉️", titre:"Message de Nadia", type:"Reçu à 9h15", chap:"Contexte", debloc:null, html:`
      <p class="manuscrit">« Entrez. J'ai un dossier d'investissement sur le bureau depuis une semaine et je n'ose pas le signer sans être sûre de moi. Avant de parler des 400 000 €, je veux d'abord qu'on regarde froidement ce que rapporte le pôle Studio aujourd'hui, comparé aux autres. Tout est dans le tableau. »</p>`},

    {id:"tableau-poles", ic:"📊", titre:"Performances des pôles d'activité", type:"Annexe 1", chap:"Gestion des coûts", debloc:null, html:`
      <p style="font-size:13.5px;color:#6C7891">Chiffre d'affaires HT et coûts directs, par pôle. En euros.</p>
      <table class="reg">
        <tr><th>Pôle</th><th>CA HT N−1</th><th>CA HT N</th><th>Coûts directs N−1</th><th>Objectif CA N</th></tr>
        <tr><td>Gestion de créateurs</td><td>735 918</td><td>824 575</td><td>478 250</td><td>820 400</td></tr>
        <tr><td>Partenariats de marque</td><td>407 624</td><td>406 765</td><td>285 330</td><td>408 000</td></tr>
        <tr><td>Formation & coaching</td><td>145 234</td><td>135 498</td><td>94 665</td><td>145 000</td></tr>
        <tr><td>Événementiel</td><td>591 243</td><td>582 320</td><td>378 408</td><td>600 500</td></tr>
        <tr><td>Studio & Production</td><td>101 567</td><td>135 235</td><td>94 660</td><td>105 000</td></tr>
        <tr><td>Merchandising</td><td>725 900</td><td>731 780</td><td>351 255</td><td>730 000</td></tr>
        <tr><td>Autres prestations</td><td>60 758</td><td>62 542</td><td>36 270</td><td>62 500</td></tr>
        <tr class="total"><td>TOTAL</td><td>2 768 244</td><td>2 878 715</td><td>1 718 838</td><td>2 871 400</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">« Coûts directs » : ce que chaque pôle a dépensé pour produire son chiffre d'affaires (freelances, prestataires, matériel consommable).</p>`},

    {id:"projet-investissement", ic:"🎥", titre:"Le projet d'équipement studio", type:"Annexe 2", chap:"—", debloc:"v4", html:`
      <table class="reg">
        <tr><td>Investissement (matériel de tournage, HT)</td><td>400 000 €</td></tr>
        <tr><td>Durée d'amortissement (linéaire, valeur résiduelle nulle)</td><td>5 ans</td></tr>
        <tr><td>Financement</td><td>Fonds propres, sans emprunt</td></tr>
        <tr><td>Taux d'imposition sur les bénéfices</td><td>33,33 %</td></tr>
        <tr><td>Taux d'actualisation retenu</td><td>2 %</td></tr>
      </table>
      <table class="reg">
        <tr><th>En K€</th><th>Année 1</th><th>Année 2</th><th>Année 3</th><th>Année 4</th><th>Année 5</th></tr>
        <tr><td>Chiffre d'affaires prévisionnel du pôle agrandi</td><td>320</td><td>345</td><td>375</td><td>380</td><td>385</td></tr>
        <tr><td>Charges prévisionnelles</td><td>245</td><td>222</td><td>170</td><td>175</td><td>185</td></tr>
      </table>`},

    {id:"flux-annees", ic:"📈", titre:"Le tableau prévisionnel — années déjà calculées", type:"Annexe 3", chap:"—", debloc:"v4", html:`
      <p style="font-size:13.5px;color:#6C7891">En K€. L'année 3 n'a pas encore été calculée — à vous de la reconstituer avec la même méthode.</p>
      <table class="reg">
        <tr><th>En K€</th><th>Année 1</th><th>Année 2</th><th>Année 3</th><th>Année 4</th><th>Année 5</th></tr>
        <tr><td>Amortissement</td><td>80</td><td>80</td><td>80</td><td>80</td><td>80</td></tr>
        <tr><td>Résultat avant impôt</td><td>−5</td><td>43</td><td>?</td><td>125</td><td>120</td></tr>
        <tr><td>Résultat après impôt</td><td>−5</td><td>28,67</td><td>?</td><td>83,33</td><td>80</td></tr>
        <tr><td>Flux net de trésorerie (FNT)</td><td>75</td><td>108,67</td><td>?</td><td>163,33</td><td>160</td></tr>
        <tr><td>FNT actualisé</td><td>73,53</td><td>104,45</td><td>?</td><td>150,89</td><td>144,92</td></tr>
        <tr><td>FNT actualisés cumulés (investissement : −400)</td><td>−326,47</td><td>−222,02</td><td>?</td><td>82,78</td><td>227,70</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">Un résultat avant impôt négatif ne génère pas d'économie d'impôt : le résultat après impôt reste alors identique au résultat avant impôt (voir Année 1).</p>`},

    {id:"note-comptable", ic:"🧮", titre:"Note du comptable", type:"Message", chap:"—", debloc:"v4", html:`
      <p class="manuscrit">« Petit rappel avant de vous lancer sur le tableau : le résultat après impôt, ce n'est pas ce qui part réellement en trésorerie — il faut y rajouter l'amortissement, qui n'est qu'une écriture comptable, pas une vraie sortie d'argent. Et n'oubliez pas d'actualiser chaque flux à son année : 2 % par an, ça compte sur 5 ans. »</p>`},

    {id:"bilan-final", ic:"📋", titre:"Synthèse du dossier", type:"Récapitulatif", chap:"—", debloc:"v6", html:`
      <p>Tableau de bord établi, VAN calculée, délai de récupération connu.</p>
      <p>Reste à trancher : Nadia signe, ou pas.</p>`}
  ],

  serrures:[
    {
      id:"v1", ic:"📈", nom:"L'évolution du pôle Studio",
      demande:"Sur l'Annexe 1, une question soulignée : <i>« code = de combien le chiffre d'affaires du pôle Studio & Production a évolué entre N−1 et N, en pourcentage »</i>.",
      boussole:"Une évolution se lit toujours dans le même sens : on part de la valeur de départ, on arrive à la valeur d'arrivée.",
      outil:"tx-var", candidats:["tx-var","part","tx-marque","reduc"],
      reponse:33.15, tol:0.05, unite:"%",
      debloque:[],
      reaction:"+33 % en un an. C'est la plus forte progression de tous les pôles, et de loin.",
      faux:{
        "part":{t:"Ça mesure un poids, pas une évolution", p:"Le pourcentage de part dit quelle place le pôle occupe dans le total à un instant donné. Ici on demande si son chiffre d'affaires a progressé entre deux années.", ex:"Part répondrait à « Studio pèse combien du total ? », pas à « ça progresse de combien ? »."},
        "tx-marque":{t:"Autre famille de calcul", p:"Le taux de marque compare une marge à un chiffre d'affaires, à une période donnée. Ici il s'agit de comparer un même pôle à deux dates différentes.", ex:"Aucune marge n'entre dans ce calcul, seulement deux chiffres d'affaires."},
        "reduc":{t:"Ça calcule une remise, pas une évolution", p:"Cet outil chiffre une remise déjà connue en pourcentage. Ici il faut TROUVER un pourcentage d'évolution à partir de deux montants.", ex:"Aucun taux n'est donné à appliquer : il faut le calculer."}
      },
      pieges:[
        {val:24.90, t:"Le sens du calcul est inversé", p:"On a divisé par la valeur d'arrivée (135 235) au lieu de la valeur de départ (101 567). L'évolution se mesure toujours par rapport au point de départ.", ex:"(135 235 − 101 567) ÷ 135 235 × 100 ≈ 24,90 %, ce n'est pas la bonne base de comparaison."}
      ],
      fiche:{titre:"Pourcentage d'évolution", f:"(Arrivée − Départ) ÷ Départ × 100", txt:"On compare toujours à la valeur de départ, jamais à la valeur d'arrivée.", ex:"(135 235 − 101 567) ÷ 101 567 × 100 ≈ 33,15 %."},
      pouces:[
        {cout:1, txt:"CA du pôle Studio en N−1 et en N, sur l'Annexe 1."},
        {cout:2, txt:"(135 235 − 101 567) ÷ 101 567 × 100."},
        {cout:4, txt:"≈ 33,15 %."}
      ]
    },
    {
      id:"v2", ic:"🥧", nom:"Le poids du pôle Studio",
      demande:"Nadia : <i>« mdp = quelle part du chiffre d'affaires total de l'agence représente aujourd'hui le pôle Studio, en pourcentage »</i>.",
      boussole:"« Aujourd'hui » élimine une bonne partie du travail : une seule année vous intéresse, pas une comparaison entre deux dates.",
      outil:"part", candidats:["part","tx-var","tx-marge","coef"],
      reponse:4.70, tol:0.02, unite:"%",
      debloque:[],
      reaction:"4,70 %. Le pôle Studio pèse encore très peu dans l'ensemble, malgré sa croissance.",
      faux:{
        "tx-var":{t:"Ça mesure une évolution, pas un poids", p:"Le pourcentage d'évolution compare deux dates. Nadia demande combien pèse le pôle Studio AUJOURD'HUI, un seul instant.", ex:"tx-var répondrait « Studio progresse de 33 % », pas « il pèse 4,70 % du total »."},
        "tx-marge":{t:"Autre famille de calcul", p:"Le taux de marge compare une marge à un coût d'achat. Ici il n'est question que de répartition du chiffre d'affaires entre pôles.", ex:"Il n'y a ni marge ni coût direct dans ce calcul, seulement des chiffres d'affaires."},
        "coef":{t:"Ça n'a rien à voir", p:"Le coefficient multiplicateur relie un coût d'achat à un prix de vente. Ici on compare une partie du chiffre d'affaires à son total.", ex:"Aucun coût d'achat n'entre dans ce calcul."}
      },
      pieges:[
        {val:3.53, t:"Le mauvais chiffre d'affaires a été pris au numérateur", p:"101 567 ÷ 2 878 715 × 100 utilise le CA de l'an dernier (N−1) au numérateur. Nadia demande la situation actuelle : c'est le CA de l'année N qu'il faut prendre.", ex:"Toujours vérifier que le numérateur et le dénominateur portent sur la même période."}
      ],
      fiche:{titre:"Pourcentage de part", f:"Valeur partielle ÷ Valeur totale × 100", txt:"Le poids d'une catégorie dans un total, à une période donnée — ici l'année N pour les deux termes.", ex:"135 235 ÷ 2 878 715 × 100 ≈ 4,70 %."},
      pouces:[
        {cout:1, txt:"CA du pôle Studio en N, et CA total de l'agence en N (ligne TOTAL de l'Annexe 1)."},
        {cout:2, txt:"135 235 ÷ 2 878 715 × 100."},
        {cout:4, txt:"≈ 4,70 %."}
      ]
    },
    {
      id:"v3", ic:"💶", nom:"Ce que rapporte le pôle Studio",
      demande:"Sur l'annexe, une case à remplir : <i>« code = sur 100 € encaissés par le pôle Studio cette année, ce qu'il en reste une fois les coûts directs payés, en pourcentage »</i>.",
      boussole:"« Sur 100 € encaissés » est la clé : on divise par ce qui rentre en caisse, pas par ce qui a été dépensé.",
      outil:"tx-marque", candidats:["tx-marque","tx-marge","part","tx-var"],
      reponse:30, tol:0.05, unite:"%",
      debloque:[],
      reaction:"30 %. Dans la moyenne de l'agence, ni un point fort ni un point faible particulier.",
      faux:{
        "tx-marge":{t:"Attention, ce n'est pas pareil", p:"Le taux de marge se calcule sur les COÛTS DIRECTS. Nadia parle de ce qui reste sur 100 € ENCAISSÉS : c'est le chiffre d'affaires au dénominateur, donc le taux de marque.", ex:"Marque et marge divisent par deux nombres différents — le même écart de marge donne deux résultats différents selon lequel on choisit."},
        "part":{t:"Ça mesure un poids, pas une rentabilité", p:"Le pourcentage de part compare le pôle au total de l'agence. Ici on ne compare pas le pôle à autre chose : on regarde ce qu'IL rapporte, en interne.", ex:"Part répondrait à « Studio pèse combien de l'agence ? », pas « Studio garde combien sur ses ventes ? »."},
        "tx-var":{t:"Autre famille de calcul", p:"Le pourcentage d'évolution compare deux dates. Ici il s'agit de comparer un chiffre d'affaires à un coût, à une seule date.", ex:"Aucune comparaison dans le temps n'est demandée ici."}
      },
      pieges:[
        {val:42.86, t:"Marge et marque ont été confondues", p:"42,86 %, c'est le taux de marge : on a divisé par les coûts directs (94 660) au lieu du chiffre d'affaires (135 235).", ex:"Marque = on divise par les VENTES. Marge = on divise par les COÛTS. Le mot « marque » comme sur l'étiquette de vente."}
      ],
      fiche:{titre:"Taux de marque", f:"Marge brute ÷ Chiffre d'affaires HT × 100", txt:"Marge brute = CA − coûts directs. On divise par le CA, ce qui rentre en caisse.", ex:"Marge : 135 235 − 94 660 = 40 575 €. Taux de marque : 40 575 ÷ 135 235 × 100 ≈ 30 %."},
      pouces:[
        {cout:1, txt:"Marge brute = CA du pôle en N − coûts directs du pôle. Puis on divise par le CA."},
        {cout:2, txt:"135 235 − 94 660 = 40 575 € de marge brute."},
        {cout:4, txt:"40 575 ÷ 135 235 × 100 ≈ 30 %."}
      ]
    },
    {
      id:"v4", ic:"🏭", nom:"Ce que coûte vraiment le pôle Studio",
      demande:"Nadia : <i>« mdp = ce que le pôle Studio gagne pour 100 € réellement dépensés en coûts directs, en pourcentage »</i>.",
      boussole:"Cette fois on part des coûts, pas des ventes — c'est l'autre façon de mesurer la rentabilité.",
      outil:"tx-marge", candidats:["tx-marge","tx-marque","coef","van"],
      reponse:42.86, tol:0.05, unite:"%",
      debloque:["projet-investissement","flux-annees","note-comptable"],
      reaction:"42,86 %. Le diagnostic est posé : un petit pôle, mais qui grandit vite et reste rentable. Passons au projet.",
      faux:{
        "tx-marque":{t:"Attention, ce n'est pas pareil", p:"Le taux de marque se calcule sur le chiffre d'affaires. Nadia parle de ce qui est gagné pour 100 € DÉPENSÉS : c'est le coût direct au dénominateur, donc le taux de marge.", ex:"30 % (marque) et 42,86 % (marge) mesurent la même marge brute, mais rapportée à deux bases différentes."},
        "coef":{t:"Ça n'a rien à voir ici", p:"Le coefficient multiplicateur relie un coût d'achat à un prix de vente affiché. Il n'est pas question de fixer un prix ici.", ex:"Aucun prix de vente unitaire n'entre dans ce calcul."},
        "van":{t:"Pas encore", p:"La VAN sert à juger un investissement sur plusieurs années. On est encore sur le diagnostic du pôle tel qu'il existe aujourd'hui.", ex:"La VAN arrive à l'acte suivant, une fois le diagnostic posé."}
      },
      pieges:[
        {val:30, t:"Marge et marque ont été confondues", p:"30 %, c'est le taux de marque : on a divisé par le chiffre d'affaires (135 235) au lieu des coûts directs (94 660).", ex:"Marge = on divise par les COÛTS. 40 575 ÷ 94 660 × 100 ≈ 42,86 %, pas 40 575 ÷ 135 235."}
      ],
      fiche:{titre:"Taux de marge", f:"Marge brute ÷ Coûts directs × 100", txt:"Ce qu'on gagne pour 100 € réellement dépensés. On divise par les coûts, pas par les ventes.", ex:"40 575 ÷ 94 660 × 100 ≈ 42,86 %."},
      pouces:[
        {cout:1, txt:"Même marge brute que la question précédente (40 575 €), mais on divise par les coûts directs cette fois."},
        {cout:2, txt:"40 575 ÷ 94 660 × 100."},
        {cout:4, txt:"≈ 42,86 %."}
      ]
    },
    {
      id:"v5", ic:"🎬", nom:"Le tableau prévisionnel",
      epreuve:{
        type:"document",
        titre:"Complétez l'année 3",
        consigne:"Les années 1, 2, 4 et 5 sont déjà calculées sur l'Annexe 3. Reconstituez l'année 3 avec la même méthode, à partir du chiffre d'affaires et des charges prévisionnels de l'Annexe 2.",
        entete:`<p style="font-size:13.5px;color:#6C7891">Année 3 — CA prévisionnel : 375 K€. Charges prévisionnelles : 170 K€. Amortissement : 80 K€ (identique chaque année).</p>`,
        lignes:[
          {label:"Chiffre d'affaires prévisionnel (K€)", valeur:"375"},
          {label:"Charges prévisionnelles (K€)", valeur:"170"},
          {label:"Amortissement (K€)", valeur:"80"},
          {label:"Résultat avant impôt (K€)", champ:"rai"},
          {label:"Résultat après impôt (K€)", champ:"rap"},
          {label:"Flux net de trésorerie — FNT (K€)", champ:"fnt"},
          {label:"FNT actualisé (K€)", champ:"fnta"}
        ],
        champs:[
          {id:"rai", label:"Résultat avant impôt", reponse:125, tol:0,
           expl:{t:"Résultat avant impôt", p:"Chiffre d'affaires − charges − amortissement.", ex:"375 − 170 − 80 = 125."}},
          {id:"rap", label:"Résultat après impôt", reponse:83.33, tol:0.05,
           expl:{t:"Résultat après impôt", p:"On retire l'impôt sur les bénéfices (33,33 %) — seulement si le résultat est positif.", ex:"125 × (1 − 0,3333) ≈ 83,33."}},
          {id:"fnt", label:"Flux net de trésorerie (FNT)", reponse:163.33, tol:0.05,
           expl:{t:"Flux net de trésorerie", p:"On rajoute l'amortissement : ce n'est qu'une écriture comptable, pas une vraie sortie d'argent.", ex:"83,33 + 80 = 163,33."}},
          {id:"fnta", label:"FNT actualisé", reponse:153.91, tol:0.1,
           expl:{t:"FNT actualisé", p:"On actualise au taux de 2 %, à la puissance du nombre d'années écoulées.", ex:"163,33 ÷ 1,02³ ≈ 153,91."}}
        ],
        conclusion:"Le flux net de trésorerie actualisé de l'année 3 s'élève à 153,91 K€. Cumulé aux années précédentes (−222,02), le solde reste négatif de 68,11 K€ à ce stade — mais plus pour longtemps."
      },
      demande:"Une fois le tableau complété : <i>« mdp = la VAN du projet, en K€ »</i>.",
      boussole:"Additionnez tous les FNT actualisés des 5 années, puis retirez l'investissement de départ — ou lisez directement le dernier cumul.",
      outil:"van", candidats:["van","delai-recup","sr","caf"],
      reponse:227.70, tol:0.5, unite:"K€",
      debloque:[],
      reaction:"VAN positive, +227,70 K€. Le projet rapporte plus qu'il ne coûte sur les 5 ans. Reste à savoir en combien de temps.",
      faux:{
        "delai-recup":{t:"Pas encore", p:"Le délai de récupération donne une DURÉE, pas un montant en euros. C'est la question suivante.", ex:"delai-recup répondrait en jours ou en années, pas en K€."},
        "sr":{t:"Autre outil", p:"Le seuil de rentabilité donne un chiffre d'affaires à atteindre pour ne rien perdre. Ici on évalue un investissement sur plusieurs années, pas un seuil d'équilibre annuel.", ex:"Aucune charge fixe annuelle n'est comparée à une marge sur coûts variables ici."},
        "caf":{t:"Autre outil", p:"La capacité d'autofinancement mesure l'argent généré par l'activité sur UNE année. La VAN cumule plusieurs années actualisées et les compare à l'investissement.", ex:"La CAF ne retranche pas l'investissement initial."}
      },
      pieges:[
        {val:627.70, t:"L'investissement n'a pas été retiré", p:"En additionnant seulement les 5 FNT actualisés (73,53 + 104,45 + 153,91 + 150,89 + 144,92), sans retirer les 400 K€ investis au départ, la VAN paraît beaucoup trop élevée.", ex:"Le cumul brut est de 627,70 K€, mais la VAN se calcule après avoir retiré l'investissement de départ : 627,70 − 400 = 227,70 K€."}
      ],
      fiche:{titre:"Valeur actuelle nette (VAN)", f:"Σ FNT actualisés − Investissement initial", txt:"Positive, le projet rapporte plus qu'il ne coûte sur la durée retenue.", ex:"73,53 + 104,45 + 153,91 + 150,89 + 144,92 − 400 = 227,70 K€."},
      pouces:[
        {cout:1, txt:"Additionnez les 5 FNT actualisés (Annexe 3, dont votre année 3 tout juste calculée), puis retirez l'investissement de départ."},
        {cout:2, txt:"73,53 + 104,45 + 153,91 + 150,89 + 144,92 = 627,70 K€ de flux actualisés cumulés."},
        {cout:4, txt:"627,70 − 400 = 227,70 K€."}
      ]
    },
    {
      id:"v6", ic:"⏱️", nom:"Le temps pour rembourser",
      demande:"Dernière question de Nadia : <i>« mdp = à partir de combien de jours, dans la 4ᵉ année, l'investissement est-il totalement remboursé »</i>.",
      boussole:"Regardez à quel moment le cumul actualisé passe de négatif à positif — c'est entre deux années précises que ça se joue.",
      outil:"delai-recup", candidats:["delai-recup","van","pm","caf"],
      reponse:163, tol:2, unite:"jours",
      debloque:["bilan-final"],
      reaction:"163 jours après le début de l'année 4, donc un peu plus de 3 ans au total. Raisonnable pour un investissement à 400 000 €.",
      faux:{
        "van":{t:"Déjà fait", p:"La VAN a été trouvée à l'étape précédente (227,70 K€). Ici Nadia demande une DURÉE, pas un montant.", ex:"227,70 n'est pas exprimé en jours."},
        "pm":{t:"Presque le bon principe, mauvaise donnée de départ", p:"Le point mort convertit un seuil de rentabilité ANNUEL en jours. Ici il s'agit de convertir un délai de récupération d'investissement sur PLUSIEURS années, à partir des cumuls actualisés.", ex:"Le point mort se calcule à partir d'un seul exercice, pas d'un cumul pluriannuel."},
        "caf":{t:"Autre outil", p:"La capacité d'autofinancement mesure un flux annuel, pas une durée de récupération.", ex:"La CAF ne donne jamais un résultat en jours."}
      },
      pieges:[
        {val:150.12, t:"Le flux non actualisé a été utilisé", p:"En divisant par le FNT de l'année 4 SANS l'actualiser (163,33 au lieu de 150,89), le résultat est faussé.", ex:"(360 × 68,11) ÷ 163,33 ≈ 150,12 jours — mais le calcul doit utiliser des flux actualisés du début à la fin, jamais mélanger les deux."}
      ],
      fiche:{titre:"Délai de récupération du capital investi", f:"(360 × dernier cumul négatif) ÷ FNT actualisé de l'année suivante", txt:"Le temps qu'il faut pour que les flux actualisés remboursent entièrement l'investissement de départ.", ex:"(360 × 68,11) ÷ 150,89 ≈ 163 jours après le début de l'année 4."},
      pouces:[
        {cout:1, txt:"Le cumul passe de négatif (−68,11 fin année 3) à positif (+82,78 fin année 4) : c'est pendant l'année 4 que ça se joue."},
        {cout:2, txt:"(360 × 68,11) ÷ 150,89 (le FNT actualisé de l'année 4)."},
        {cout:4, txt:"≈ 163 jours après le début de l'année 4, soit un peu plus de 3 ans au total."}
      ]
    }
  ],

  rapport:[
    {
      q:"Le tableau de bord est établi. Le pôle Studio & Production mérite-t-il d'être développé ?",
      choix:[
        {t:"Non, il pèse trop peu dans le chiffre d'affaires de l'agence (4,70 %).", bon:false, r:"Le poids actuel est faible, c'est vrai, mais ce n'est pas le bon critère pour juger un potentiel de développement : c'est justement parce qu'il est encore petit qu'il peut le plus progresser."},
        {t:"Oui : c'est le pôle qui progresse le plus vite (+33 %) et sa rentabilité (42,86 % de taux de marge) est dans la moyenne de l'agence.", bon:true, r:"Exactement. Le pôle Studio a la plus forte croissance de tous les pôles et une rentabilité tout à fait correcte. Son faible poids actuel n'est pas un problème, c'est justement ce qui laisse de la place pour grandir."},
        {t:"Non, sa rentabilité est la plus faible de tous les pôles.", bon:false, r:"Faux : à 42,86 % de taux de marge, le pôle Studio est dans la moyenne de l'agence, ni le meilleur ni le pire."},
        {t:"Impossible à dire sans les chiffres des autres pôles.", bon:false, r:"Les autres pôles sont dans l'Annexe 1 : ils montrent que Studio a la plus forte progression du magasin, ce qui suffit à dégager une première tendance."}
      ]
    },
    {
      q:"Nadia doit-elle valider les 400 000 € d'investissement ?",
      choix:[
        {t:"Non, le projet ne sera jamais rentabilisé.", bon:false, r:"Faux : la VAN est positive (+227,70 K€) et l'investissement est récupéré en un peu plus de 3 ans sur les 5 années du projet."},
        {t:"Oui : la VAN est positive et l'investissement est récupéré avant la fin de la durée du projet (un peu plus de 3 ans sur 5).", bon:true, r:"Exactement. Une VAN positive de 227,70 K€ et un délai de récupération de 3 ans et 163 jours, sur un horizon de 5 ans, valident financièrement le projet."},
        {t:"Oui, mais seulement en empruntant pour ne pas immobiliser la trésorerie de l'agence.", bon:false, r:"Rien dans le dossier ne pousse à emprunter : l'agence finance sur fonds propres et le projet reste rentable sans dette supplémentaire. Ce choix de financement n'est pas remis en cause par les chiffres."},
        {t:"Il faut attendre encore un an pour avoir plus de visibilité avant de décider.", bon:false, r:"Les projections sur 5 ans donnent déjà une VAN positive et un délai de récupération raisonnable : rien n'indique qu'attendre apporterait une information décisive supplémentaire."}
      ]
    }
  ],

  lexique:[
    {terme:"Pourcentage d'évolution", def:"On compare toujours à la valeur de départ, jamais à la valeur d'arrivée.", ex:"(135 235 − 101 567) ÷ 101 567 × 100 ≈ 33,15 %."},
    {terme:"Pourcentage de part", def:"Le poids d'une catégorie dans un total, à une période précise.", ex:"135 235 ÷ 2 878 715 × 100 ≈ 4,70 %."},
    {terme:"Taux de marque", def:"Sur 100 € encaissés, ce qui reste une fois les coûts directs payés. On divise par le chiffre d'affaires.", ex:"40 575 ÷ 135 235 × 100 ≈ 30 %."},
    {terme:"Taux de marge", def:"Ce qu'on gagne pour 100 € réellement dépensés. On divise par les coûts directs.", ex:"40 575 ÷ 94 660 × 100 ≈ 42,86 %."},
    {terme:"Flux net de trésorerie (FNT)", def:"Résultat après impôt, auquel on rajoute l'amortissement — qui n'est qu'une écriture comptable, pas une vraie sortie d'argent.", ex:"83,33 + 80 = 163,33 K€."},
    {terme:"Valeur actuelle nette (VAN)", def:"La somme des flux de trésorerie actualisés, moins l'investissement de départ. Positive, le projet rapporte plus qu'il ne coûte.", ex:"627,70 − 400 = 227,70 K€."},
    {terme:"Délai de récupération du capital investi", def:"Le temps qu'il faut pour que les flux actualisés remboursent entièrement l'investissement.", ex:"3 ans et 163 jours, sur un projet prévu pour durer 5 ans."}
  ]
};
