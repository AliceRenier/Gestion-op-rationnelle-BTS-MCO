/* ════════════════════════════════════════════════════════════
   MISSION C0-DIFFICILE — Chapitre 0 : Rappels de calculs (niveau difficile)
   Une seule question de départ, comme à l'E5. Trois dossiers,
   sept serrures, aucun outil n'est nommé nulle part.
   ════════════════════════════════════════════════════════════ */
window.H5P_PATH = null;

window.MISSION = {
  ref:"C0-D",
  enseigne:"Ciao Kombucha",
  sujet:"Remises en cascade · Marge · Coefficient · Évolution · Part de marché",
  niveau:"Difficile",
  duree:"~70 min",
  accroche:"Une seule question : Ciao Kombucha peut-elle se permettre d'accepter l'offre de Kabani Distribution ?",
  client:{prenom:"Squeezie", nom:"Lucas Hauchard, dit Squeezie"},
  chapitres:["Chapitre 0","Calculs de base"],

  role:"Vous êtes consultant junior au cabinet <b>ORIENS</b>. Ce dossier se traite comme à l'examen : un seul cas, plusieurs dossiers, et personne ne vous dira quel outil utiliser.",
  situation:`<p><b>Squeezie</b>, créateur de contenu suivi par plus de 36 millions d'abonnés, a lancé <b>Ciao Kombucha</b> il y a un an. Le démarrage a été spectaculaire : rupture de stock en quelques heures, édition limitée revendue au triple sur les réseaux.</p>
    <p>Un an après, son équipe doit prendre deux décisions à la fois : <b>Kabani Distribution</b>, un distributeur national, propose de référencer la marque dans 400 magasins — à leurs conditions. Et il faut savoir si la croissance du premier semestre est aussi solide qu'elle en a l'air avant d'investir davantage.</p>
    <p><b>« On nous propose 400 magasins. Est-ce qu'on peut se le permettre, et est-ce qu'on doit foncer ? »</b></p>
    <p style="color:#8FA3C4;font-size:14px;font-style:italic">Comme dans les vraies épreuves BTS, cette mise en situation s'inspire d'un cas réel, mais les chiffres et les décisions présentés ici sont fictifs, imaginés pour l'exercice.</p>`,
  enjeux:[{n:"36 M", t:"abonnés"}, {n:"1 an", t:"d'existence de la marque"}, {n:"400", t:"magasins visés par l'offre"}],

  plan:[
    "Vérifier ce que coûte réellement le lancement en édition limitée",
    "Étudier l'offre de Kabani Distribution",
    "Faire le bilan du premier semestre"
  ],

  actes:[
    {titre:"Le lancement en édition limitée", serrures:["v1","v2"],
     intro:"Avant de parler de grande distribution, l'équipe veut d'abord un état des lieux propre : le lancement a-t-il vraiment été aussi rentable qu'il en a eu l'air ?"},
    {titre:"L'offre de Kabani Distribution", serrures:["v3","v4","v5"],
     intro:"400 magasins, mais des conditions à décortiquer : remise volume, frais logistiques, et un prix déjà annoncé sans avoir tout vérifié."},
    {titre:"Le bilan du premier semestre", serrures:["v6","v7"],
     intro:"Les deux premiers trimestres sont bouclés. Reste à savoir si la croissance affichée résiste à l'examen, parfum par parfum."}
  ],

  pieces:[
    {id:"mot", ic:"✉️", titre:"Message de l'équipe", type:"Reçu à 8h47", chap:"Contexte", debloc:null, html:`
      <p class="manuscrit">« Entrez. On a une offre de Kabani Distribution sur la table depuis trois jours et personne n'ose dire si c'est une bonne ou une mauvaise idée. Avant ça, on aimerait déjà être sûrs d'avoir bien compris ce qu'a vraiment rapporté le lancement de l'édition limitée. On vous laisse les dossiers. »</p>`},

    {id:"devis-faconnage", ic:"🧴", titre:"Devis du façonnier", type:"Annexe 1", chap:"Calculs de base", debloc:null, html:`
      <p style="font-size:13.5px;color:#6C7891">BrewCraft Façonnage — devis pour le lot de lancement (édition limitée « Goût Fraise »).</p>
      <table class="reg">
        <tr><td>Façonnage du lot (prix catalogue HT)</td><td>24 000,00</td></tr>
        <tr><td>Remise volume négociée</td><td>30 %</td></tr>
        <tr><td>Escompte pour règlement comptant</td><td>8 %</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">Les deux remises s'appliquent l'une après l'autre, pas en même temps.</p>`},

    {id:"catalogue-vente", ic:"🥤", titre:"Fiche produit — édition limitée", type:"Annexe 2", chap:"Calculs de base", debloc:"v1", html:`
      <table class="reg">
        <tr><td>Quantité de packs produits (lot ci-contre)</td><td>1 288</td></tr>
        <tr><td>Prix de vente en ligne (TTC)</td><td>21,60</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">TVA applicable : 20 %.</p>`},

    {id:"offre-kabani", ic:"🏬", titre:"Conditions proposées par Kabani", type:"Annexe 3", chap:"Calculs de base", debloc:"v2", html:`
      <p style="font-size:13.5px;color:#6C7891">Commande initiale envisagée pour référencement dans 400 magasins.</p>
      <table class="reg">
        <tr><td>50 000 canettes (format classique) × 0,85 € HT catalogue</td><td>42 500,00</td></tr>
        <tr><td>Remise volume Kabani</td><td>15 %</td></tr>
        <tr><td>Frais logistiques forfaitaires (livraison en 400 points)</td><td>3 500,00</td></tr>
      </table>`},

    {id:"prix-propose", ic:"🏷️", titre:"Prix déjà annoncé à Kabani", type:"Note interne", chap:"—", debloc:"v2", html:`
      <p>L'équipe a déjà transmis un prix à Kabani, avant tout recalcul : <b>1,50 € TTC</b> la canette.</p>
      <p>Politique habituelle de Ciao Kombucha, rappelée par la direction financière : <i>« On vise toujours un coefficient de 2 et un taux de marge d'au moins 65 % sur nos accords de distribution. En dessous, on ne signe pas. »</i></p>`},

    {id:"facture-transport", ic:"🚚", titre:"Facture du transporteur", type:"Annexe 5", chap:"—", debloc:"v4", html:`
      <p style="font-size:13.5px;color:#6C7891">TransExpress — acheminement du premier lot vers les entrepôts Kabani.</p>
      <table class="reg">
        <tr><td>Montant TTC de la facture</td><td>4 620,00</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">TVA applicable : 20 %. Le comptable a besoin du montant hors taxes pour l'enregistrer.</p>`},

    {id:"cahier-parfums", ic:"📊", titre:"Ventes par parfum — S1", type:"Annexe 6", chap:"Calculs de base", debloc:"v5", html:`
      <p style="font-size:13.5px;color:#6C7891">Chiffre d'affaires HT par parfum, T1 et T2 de la première année.</p>
      <table class="reg">
        <tr><th>Parfum</th><th>Trimestre 1</th><th>Trimestre 2</th></tr>
        <tr><td>Original</td><td>50 000</td><td>60 000</td></tr>
        <tr><td>Fraise</td><td>30 000</td><td>33 000</td></tr>
        <tr><td>Gingembre</td><td>25 000</td><td>30 000</td></tr>
        <tr><td>Fruits rouges</td><td>15 000</td><td>15 000</td></tr>
      </table>`},

    {id:"note-comptable", ic:"🧮", titre:"Note du comptable", type:"Message", chap:"—", debloc:"v5", html:`
      <p class="manuscrit">« Avant que quelqu'un ne fasse une moyenne rapide des pourcentages par parfum pour aller vite : ne faites pas ça. Ça ne veut rien dire tant que les parfums ne pèsent pas le même poids dans le total. Additionnez d'abord. »</p>`},

    {id:"bilan-final", ic:"📈", titre:"Tableau de bord", type:"Synthèse", chap:"—", debloc:"v7", html:`
      <p>Croissance globale confirmée sur le premier semestre, tous parfums confondus.</p>
      <p>Note manuscrite de l'équipe : « Reste à savoir si on signe avec Kabani. »</p>`}
  ],

  serrures:[
    {
      id:"v1", ic:"🔐", nom:"Le devis du façonnier",
      demande:"Post-it sur le devis : <i>« code = ce qu'on a vraiment payé pour ce lot, une fois les deux remises passées, l'une après l'autre »</i>.",
      boussole:"Deux remises qui se suivent ne s'additionnent jamais.",
      outil:"apres-remise", candidats:["apres-remise","reduc","avant-remise","apres-aug"],
      reponse:15456, tol:0, unite:"€",
      debloque:["catalogue-vente"],
      reaction:"15 456 €, exactement ce qu'on a réglé à BrewCraft. Bon début.",
      faux:{
        "reduc":{t:"Ça donne un montant de remise, pas un prix", p:"Cet outil calcule combien vaut UNE remise en euros. Ici on veut le prix final, après les DEUX remises.", ex:"Reduc dirait « la remise de 10 % vaut 2 400 € ». Ce n'est pas la question posée."},
        "avant-remise":{t:"Le sens est inversé", p:"Cet outil part d'un prix déjà remisé pour retrouver le prix de départ. Ici, c'est l'inverse : on part du prix catalogue et on descend vers ce qui est payé.", ex:"On a 24 000 € de départ, on cherche l'arrivée — pas l'inverse."},
        "apres-aug":{t:"Il n'y a pas de hausse ici", p:"Cet outil ajoute un pourcentage à un prix. Les deux pourcentages du devis sont des remises, pas des hausses.", ex:"On multiplie par (1 − %), pas par (1 + %)."}
      },
      pieges:[
        {val:14880, t:"Les deux taux ont été additionnés", p:"30 % + 8 % = 38 %, mais deux remises successives ne se cumulent pas comme ça : la seconde s'applique sur ce qu'il reste après la première.", ex:"24 000 × 0,70 = 16 800, puis 16 800 × 0,92 = 15 456. Alors que 24 000 × 0,62 = 14 880 : ce n'est pas la même chose."}
      ],
      fiche:{titre:"Remises successives", f:"Départ × (1 − %1÷100) × (1 − %2÷100)", txt:"On applique la première remise, puis la seconde sur le nouveau montant — jamais en additionnant les taux.", ex:"24 000 × 0,70 × 0,92 = 15 456 €."},
      pouces:[
        {cout:1, txt:"Les deux remises sont sur l'Annexe 1, l'une après l'autre."},
        {cout:2, txt:"D'abord la remise volume sur 24 000 €, puis l'escompte sur ce qu'il reste."},
        {cout:4, txt:"24 000 × 0,70 = 16 800, puis 16 800 × 0,92 = 15 456 €."}
      ]
    },
    {
      id:"v2", ic:"🥤", nom:"La fiche produit",
      demande:"Sur la fiche produit, une case vide : <i>« code = ce qu'on gagne réellement sur un seul pack vendu, en euros »</i>.",
      boussole:"Le prix de vente est en TTC. Le coût que vous venez de trouver ne l'est pas. Il faut d'abord les habiller pareil.",
      outil:"marge", candidats:["marge","tx-marque","coef","reduc"],
      reponse:6, tol:0, unite:"€",
      debloque:["offre-kabani","prix-propose"],
      reaction:"6 € par pack. Sur 1 288 packs, ça fait plus de 7 700 € rien que sur l'édition limitée. Le lancement a payé.",
      faux:{
        "tx-marque":{t:"Ça donne un pourcentage, pas un montant", p:"Le taux de marque exprime la marge en pourcentage du prix de vente. Ici le code demandé est un montant en euros.", ex:"Le taux de marque répondrait « 33 % », pas « 6 € »."},
        "coef":{t:"Ça donne un multiplicateur, pas un gain", p:"Le coefficient dit par combien on multiplie le coût pour obtenir le prix de vente. Ce n'est pas ce qui est demandé ici : on veut ce qu'on gagne, en euros.", ex:"Le coefficient donnerait un nombre comme 1,50, pas un montant en euros."},
        "reduc":{t:"Il n'y a pas de remise dans cette question", p:"Cet outil calcule le montant d'une remise ou d'une hausse déjà connue en pourcentage. Ici, aucun pourcentage n'est donné : on compare deux prix.", ex:"On a un coût et un prix de vente, pas un taux à appliquer."}
      },
      pieges:[
        {val:9.6, t:"Le TTC n'a pas été converti en HT", p:"21,60 € est un prix TTC. Pour calculer une marge, il faut comparer deux prix hors taxes : 21,60 ÷ 1,20 = 18 € HT, pas 21,60 € directement.", ex:"21,60 − 12 = 9,60 €, un chiffre gonflé parce que la TVA n'a pas été retirée."}
      ],
      fiche:{titre:"Marge commerciale", f:"Prix de vente HT − Coût d'achat HT", txt:"Toujours comparer deux prix hors taxes. Le coût unitaire se retrouve en divisant le total payé par la quantité produite.", ex:"15 456 ÷ 1 288 = 12 € le pack. Prix de vente HT : 21,60 ÷ 1,20 = 18 €. Marge : 18 − 12 = 6 €."},
      pouces:[
        {cout:1, txt:"Coût unitaire = montant payé au façonnier (Annexe 1) ÷ quantité produite (Annexe 2)."},
        {cout:2, txt:"15 456 ÷ 1 288 = 12 € le coût. Prix de vente HT : 21,60 ÷ 1,20 = 18 €."},
        {cout:4, txt:"18 − 12 = 6 €."}
      ]
    },
    {
      id:"v3", ic:"🏬", nom:"L'offre Kabani",
      demande:"Dans la marge du document, écrit à la main : <i>« code = le coefficient qu'on obtient VRAIMENT sur cette commande, pas celui qu'on croit obtenir »</i>.",
      boussole:"Le prix catalogue ne suffit pas : il y a une remise, puis des frais qui s'ajoutent après. Reconstituez le coût complet d'une canette avant de comparer au prix déjà annoncé.",
      outil:"coef", candidats:["coef","apres-aug","avant-aug","marge"],
      reponse:1.89, tol:0.01, unite:"",
      debloque:[],
      reaction:"1,89, pas 2. On est en dessous de notre politique habituelle, et personne ne s'en était rendu compte avant de répondre à Kabani.",
      faux:{
        "apres-aug":{t:"Ça sert à passer du HT au TTC", p:"Cet outil ajoute une hausse à un prix. Ici on ne cherche pas un prix, mais un coefficient : le nombre par lequel le coût a été multiplié.", ex:"apres-aug donnerait un prix en euros, pas un coefficient comme 1,89."},
        "avant-aug":{t:"Le sens est inversé", p:"Cet outil retire une hausse pour retrouver un prix de départ. Ici on a déjà les deux chiffres (coût et prix annoncé), il ne reste qu'à diviser.", ex:"Pas de hausse à retirer ici : juste un rapport entre deux montants déjà connus."},
        "marge":{t:"Ça donne un montant, pas un coefficient", p:"La marge se compte en euros. Le code demandé est un coefficient, un nombre sans unité.", ex:"1,89 n'est pas un montant en euros, c'est un multiplicateur."}
      },
      fiche:{titre:"Coefficient multiplicateur (coût réel)", f:"Prix de vente TTC ÷ Coût d'achat HT réel", txt:"Le coût réel doit inclure la marchandise remisée ET les frais annexes. Sinon le coefficient affiché est faux.", ex:"(42 500 × 0,85 + 3 500) ÷ 50 000 = 0,7925 € le coût réel. 1,50 ÷ 0,7925 ≈ 1,89."},
      pouces:[
        {cout:1, txt:"L'Annexe 3 donne le prix catalogue, la remise ET les frais logistiques : les trois comptent dans le coût réel unitaire."},
        {cout:2, txt:"(42 500 × 0,85 + 3 500) ÷ 50 000 = coût réel d'une canette. Puis on divise le prix déjà annoncé (1,50 €) par ce coût."},
        {cout:4, txt:"Coût réel ≈ 0,7925 €. 1,50 ÷ 0,7925 ≈ 1,89."}
      ]
    },
    {
      id:"v4", ic:"💰", nom:"La politique maison",
      demande:"Sur la note interne, une question soulignée deux fois : <i>« code = ce qu'on gagne vraiment sur 100 € que cette commande nous coûte, en pourcentage »</i>.",
      boussole:"Même logique qu'avant : un prix en TTC, un coût en HT. Les habiller pareil avant de calculer.",
      outil:"tx-marge", candidats:["tx-marge","tx-marque","coef","marge"],
      reponse:57.73, tol:0.05, unite:"%",
      debloque:["facture-transport"],
      reaction:"57,73 %. En dessous des 65 % qu'on s'était fixés. On signe quand même, mais pas sans le savoir.",
      faux:{
        "tx-marque":{t:"Attention, ce n'est pas pareil", p:"Le taux de marque se calcule sur le prix de VENTE. Ici on demande ce qu'on gagne pour 100 € que la commande a COÛTÉ : c'est le coût d'achat au dénominateur, donc le taux de marge.", ex:"Marque et marge ne divisent pas par le même nombre — même écart, deux résultats différents."},
        "coef":{t:"Déjà fait", p:"Le coefficient a été trouvé à l'étape précédente (1,89). Ici on demande un pourcentage de rentabilité, pas un multiplicateur.", ex:"1,89 n'est pas un pourcentage."},
        "marge":{t:"En euros, pas en pourcentage", p:"La marge commerciale donne un montant. Le code demandé est un pourcentage.", ex:"La marge est l'ingrédient, le taux de marge est le résultat exprimé en %."}
      },
      pieges:[
        {val:89.27, t:"Le TTC n'a pas été converti en HT", p:"1,50 € est un prix TTC. Il fallait d'abord le convertir en HT (1,50 ÷ 1,20 = 1,25 €) avant de comparer au coût.", ex:"(1,50 − 0,7925) ÷ 0,7925 × 100 ≈ 89,3 %, gonflé parce que la TVA n'a pas été retirée."},
        {val:73.01, t:"Les frais logistiques ont encore été oubliés", p:"En reprenant le coût sans les frais logistiques (0,7225 € au lieu de 0,7925 €), la marge paraît meilleure qu'elle ne l'est.", ex:"(1,25 − 0,7225) ÷ 0,7225 × 100 ≈ 73 %, contre 57,73 % avec le vrai coût."}
      ],
      fiche:{titre:"Taux de marge (coût complet)", f:"Marge commerciale ÷ Coût d'achat HT réel × 100", txt:"Toujours un coût complet, jamais partiel — et toujours deux prix hors taxes comparés entre eux.", ex:"(1,25 − 0,7925) ÷ 0,7925 × 100 ≈ 57,73 %."},
      pouces:[
        {cout:1, txt:"Convertissez le prix annoncé (1,50 € TTC) en HT avant tout calcul."},
        {cout:2, txt:"Prix HT : 1,50 ÷ 1,20 = 1,25 €. Coût réel déjà trouvé : 0,7925 €."},
        {cout:4, txt:"(1,25 − 0,7925) ÷ 0,7925 × 100 ≈ 57,73 %."}
      ]
    },
    {
      id:"v5", ic:"🚚", nom:"La facture du transporteur",
      demande:"Le comptable, par message : <i>« code = le montant hors taxes de cette facture, j'en ai besoin pour l'enregistrer »</i>.",
      boussole:"On connaît le montant final, TVA comprise. Il faut remonter vers le montant de départ, avant la taxe.",
      outil:"avant-aug", candidats:["avant-aug","apres-aug","avant-remise","tx-var"],
      reponse:3850, tol:0, unite:"€",
      debloque:["cahier-parfums","note-comptable"],
      reaction:"3 850 € HT, noté. Un détail comptable, mais qui compte pour la suite.",
      faux:{
        "apres-aug":{t:"Le sens est inversé", p:"Cet outil part d'un prix HT pour ajouter une hausse et obtenir le TTC. Ici c'est l'inverse : on part du TTC pour retrouver le HT.", ex:"On descend vers le HT, on ne monte pas vers le TTC — on l'a déjà."},
        "avant-remise":{t:"Ce n'est pas une remise ici", p:"La TVA n'est pas une remise : c'est une taxe ajoutée au prix. Le mécanisme de calcul n'est pas le même.", ex:"Une remise enlève une part du prix ; la TVA en ajoute une."},
        "tx-var":{t:"Il n'y a pas deux dates ici", p:"Le pourcentage d'évolution compare deux montants à deux moments différents. Ici il n'y a qu'un seul prix, à convertir.", ex:"Rien n'évolue dans le temps sur cette facture : c'est une simple conversion TTC → HT."}
      },
      pieges:[
        {val:3696, t:"Mauvaise opération", p:"Multiplier directement par 0,80 revient à retirer 20 % du montant TTC, ce qui n'est pas la même chose que retrouver le prix hors taxes.", ex:"4 620 × 0,80 = 3 696 €, alors que le bon calcul est 4 620 ÷ 1,20 = 3 850 €. Ce n'est pas la même opération."}
      ],
      fiche:{titre:"Montant avant augmentation (TTC → HT)", f:"Montant TTC ÷ (1 + %÷100)", txt:"Pour retrouver un montant hors taxes à partir d'un montant TTC, on divise — on ne multiplie jamais par (1 − %).", ex:"4 620 ÷ 1,20 = 3 850 €."},
      pouces:[
        {cout:1, txt:"Le montant de la facture (Annexe 5) est en TTC. Il faut redescendre vers le HT."},
        {cout:2, txt:"On divise par (1 + taux de TVA), on ne multiplie pas par (1 − taux)."},
        {cout:4, txt:"4 620 ÷ 1,20 = 3 850 €."}
      ]
    },
    {
      id:"v6", ic:"📊", nom:"Le tableau de bord — vue globale",
      demande:"Sur le tableau de bord, une case à remplir : <i>« code = l'évolution du chiffre d'affaires total entre les deux trimestres, en pourcentage »</i>.",
      boussole:"Quatre parfums, deux trimestres : additionnez d'abord chaque colonne. Le comptable vous a prévenus — pas de moyenne de pourcentages.",
      outil:"tx-var", candidats:["tx-var","part","reduc","tx-marque"],
      reponse:15, tol:0, unite:"%",
      debloque:[],
      reaction:"+15 % sur l'ensemble en un trimestre. La marque tient la route, au moins sur le volume.",
      faux:{
        "part":{t:"Ça mesure un poids, pas une évolution", p:"Le pourcentage de part dit quelle place un parfum occupe dans le total à un instant donné. Ici on demande si le total a progressé entre deux trimestres.", ex:"Part répondrait à « Fraise pèse combien du total ? », pas à « ça progresse ? »."},
        "reduc":{t:"Ça calcule une remise, pas une évolution", p:"Cet outil chiffre une remise déjà connue en pourcentage. Ici il faut TROUVER un pourcentage d'évolution à partir de deux montants.", ex:"Aucun taux n'est donné à appliquer : il faut le calculer."},
        "tx-marque":{t:"Autre famille de calcul", p:"Le taux de marque compare une marge à un prix de vente. Il n'y a ni marge ni coût d'achat dans ce tableau, seulement des ventes.", ex:"Le tableau ne contient que du chiffre d'affaires, pas de coûts."}
      },
      pieges:[
        {val:12.5, t:"Les taux par parfum ont été moyennés", p:"La note du comptable le disait : chaque parfum ne pèse pas le même poids dans le total. Il faut additionner les euros d'abord.", ex:"Moyenne des 4 taux (20 %, 10 %, 20 %, 0 %) = 12,5 %. Ce n'est pas l'évolution réelle de l'activité, juste une moyenne qui ignore le poids de chaque parfum."},
        {val:17.14, t:"Un parfum a été oublié dans la somme", p:"En oubliant « Fruits rouges » dans les deux totaux, le calcul se fait sur une base incomplète.", ex:"Sans cette ligne : 105 000 → 123 000, soit +17,14 % — proche du bon chiffre, mais faux, une ligne entière manque."}
      ],
      fiche:{titre:"Pourcentage d'évolution (plusieurs catégories)", f:"(Total arrivée − Total départ) ÷ Total départ × 100", txt:"On additionne d'abord chaque colonne pour obtenir un total par période. On ne moyenne et on ne compare jamais des pourcentages de catégories entre eux.", ex:"Total T1 = 120 000 €. Total T2 = 138 000 €. (138 000 − 120 000) ÷ 120 000 × 100 = 15 %."},
      pouces:[
        {cout:1, txt:"Additionnez les 4 parfums de l'Annexe 6, colonne par colonne, pour obtenir un total par trimestre."},
        {cout:2, txt:"Total T1 = 120 000 €. Total T2 = 138 000 €."},
        {cout:4, txt:"(138 000 − 120 000) ÷ 120 000 × 100 = 15 %."}
      ]
    },
    {
      id:"v7", ic:"🍓", nom:"Le tableau de bord — le parfum Gingembre",
      demande:"Dernière case du tableau : <i>« code = quelle part du chiffre d'affaires total du trimestre 2 représente le Gingembre, en pourcentage »</i>.",
      boussole:"On demande un poids, pas une évolution — et sur le trimestre 2 précisément, pas le premier.",
      outil:"part", candidats:["part","tx-var","tx-marque","coef"],
      reponse:21.74, tol:0.02, unite:"%",
      debloque:["bilan-final"],
      reaction:"21,74 %. Le Gingembre n'est pas le parfum vedette, mais il pèse plus qu'on ne le pensait.",
      faux:{
        "tx-var":{t:"Ça mesure une évolution, pas un poids", p:"Le pourcentage d'évolution compare deux périodes. Ici on demande combien pèse le Gingembre à UN instant donné (le trimestre 2), pas s'il progresse.", ex:"tx-var répondrait « le Gingembre progresse de 20 % », pas « il pèse 21,74 % du total »."},
        "tx-marque":{t:"Autre famille de calcul", p:"Le taux de marque compare une marge à une vente. Ici il n'est question que de répartition du chiffre d'affaires entre parfums.", ex:"Il n'y a ni marge ni coût d'achat dans ce calcul."},
        "coef":{t:"Ça n'a rien à voir", p:"Le coefficient multiplicateur relie un coût d'achat à un prix de vente. Ici on compare une partie du chiffre d'affaires à son total.", ex:"Aucun coût d'achat n'entre dans ce calcul."}
      },
      pieges:[
        {val:20.83, t:"Le mauvais trimestre a été utilisé", p:"25 000 ÷ 120 000 × 100 = 20,83 % est la part du Gingembre au trimestre 1, pas au trimestre 2 demandé.", ex:"Toujours vérifier sur quelle colonne porte la question avant de diviser."}
      ],
      fiche:{titre:"Pourcentage de part", f:"Valeur partielle ÷ Valeur totale × 100", txt:"Le poids d'une catégorie dans un total, à une période donnée. Bien vérifier qu'on prend le numérateur ET le dénominateur sur la même période.", ex:"30 000 ÷ 138 000 × 100 ≈ 21,74 % pour le Gingembre au trimestre 2."},
      pouces:[
        {cout:1, txt:"Prenez la ligne Gingembre et le total, tous les deux au trimestre 2 (Annexe 6)."},
        {cout:2, txt:"Gingembre T2 = 30 000 €. Total T2 = 138 000 €."},
        {cout:4, txt:"30 000 ÷ 138 000 × 100 ≈ 21,74 %."}
      ]
    }
  ],

  rapport:[
    {
      q:"Squeezie doit-il accepter l'offre de Kabani Distribution telle quelle ?",
      choix:[
        {t:"Oui, sans négocier : 400 magasins, c'est une opportunité qu'on ne refuse pas.", bon:false, r:"La marge tient (57,73 %), mais elle est sous l'objectif maison (65 %) et le coefficient réel (1,89) est sous la politique habituelle (2). Accepter sans discuter, c'est signer un accord moins bon que ce que Ciao Kombucha vise d'habitude."},
        {t:"Non, la commande n'est pas rentable.", bon:false, r:"Rien ne le montre : la marge reste positive et confortable (57,73 %). Ce n'est pas une perte, c'est un accord un peu en dessous des objectifs habituels — nuance importante."},
        {t:"Accepter, mais en renégociant les frais logistiques ou le prix pour se rapprocher des 65 % de marge visés.", bon:true, r:"Oui. L'opération reste rentable et l'opportunité (400 magasins) est réelle, mais le prix a été annoncé avant d'avoir vérifié le coût complet. Renégocier les frais logistiques ou ajuster légèrement le prix permettrait de revenir vers la politique habituelle de la marque."},
        {t:"Refuser et rester uniquement sur la vente en ligne.", bon:false, r:"Rien n'indique que la vente en ligne seule permettrait de continuer la croissance observée. Le problème identifié est un prix mal calculé, pas le principe même de la distribution physique."}
      ]
    },
    {
      q:"La croissance du premier semestre justifie-t-elle d'investir davantage dans la marque ?",
      choix:[
        {t:"Oui, sans réserve : tous les parfums progressent au même rythme.", bon:false, r:"Faux : les rythmes sont très différents d'un parfum à l'autre (de 0 % à 20 %). Le Gingembre et l'Original tirent la croissance, Fruits rouges stagne complètement."},
        {t:"Oui, la croissance globale est réelle (+15 %), mais elle repose surtout sur deux parfums sur quatre — à surveiller avant d'investir massivement sur toute la gamme.", bon:true, r:"Exactement. Le +15 % global est vrai et solide, mais Original et Gingembre portent l'essentiel de cette hausse pendant que Fruits rouges stagne. Une décision d'investissement gagnerait à cibler les parfums qui tirent réellement la marque."},
        {t:"Non, une croissance de 15 % en un trimestre n'est pas significative.", bon:false, r:"15 % de progression d'un trimestre à l'autre sur un total de 120 000 € est une hausse réelle et notable, pas un bruit statistique."},
        {t:"Impossible à dire sans les chiffres du reste de l'année.", bon:false, r:"Les deux trimestres disponibles suffisent à observer une tendance claire et à la nuancer parfum par parfum — inutile d'attendre pour dégager une première recommandation."}
      ]
    }
  ],

  lexique:[
    {terme:"Remises successives", def:"Deux remises qui s'appliquent l'une après l'autre ne s'additionnent jamais : on applique la première, puis la seconde sur ce qu'il reste.", ex:"24 000 × 0,70 × 0,92 = 15 456 €, et non 24 000 × 0,62 = 14 880 €."},
    {terme:"Coût d'achat réel", def:"Le prix catalogue remisé, plus tous les frais annexes non remisables (transport, logistique, emballage).", ex:"36 125 € de marchandise + 3 500 € de frais logistiques = 39 625 € au total pour 50 000 canettes."},
    {terme:"Coefficient multiplicateur", def:"Le nombre par lequel on multiplie le coût d'achat HT pour obtenir le prix de vente TTC.", ex:"1,50 ÷ 0,7925 ≈ 1,89, sous la politique maison qui vise 2."},
    {terme:"Taux de marge", def:"Ce qu'on gagne pour 100 € réellement dépensés à l'achat, tous frais compris.", ex:"(1,25 − 0,7925) ÷ 0,7925 × 100 ≈ 57,73 %."},
    {terme:"Montant avant augmentation (TTC → HT)", def:"Pour retrouver un montant hors taxes à partir d'un montant TTC, on divise par (1 + taux de TVA) — on ne multiplie jamais par (1 − taux).", ex:"4 620 ÷ 1,20 = 3 850 €."},
    {terme:"Pourcentage d'évolution (plusieurs catégories)", def:"On additionne d'abord les totaux de chaque période avant de calculer l'évolution. On ne moyenne jamais des pourcentages de catégories entre eux.", ex:"120 000 € → 138 000 € sur l'ensemble des parfums : +15 %."},
    {terme:"Pourcentage de part", def:"Le poids d'une catégorie dans un total, à une période précise. Numérateur et dénominateur doivent porter sur la même période.", ex:"30 000 ÷ 138 000 × 100 ≈ 21,74 % pour le Gingembre au trimestre 2."}
  ]
};
