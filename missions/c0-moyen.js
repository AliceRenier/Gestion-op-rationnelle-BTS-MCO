/* ════════════════════════════════════════════════════════════
   MISSION C0-MOYEN — Chapitre 0 : Rappels de calculs (niveau moyen)
   Pour créer une mission : copier ce fichier, renommer, réécrire.
   Puis l'ajouter au catalogue dans index.html.
   ════════════════════════════════════════════════════════════ */
window.H5P_PATH = null;   // chemin d'un .h5p pour remplacer le lexique

window.MISSION = {
  ref:"C0-M",
  enseigne:"Nomade Vélo",
  sujet:"Remises en cascade · Coût réel · Marge · Évolution du CA",
  client:{prenom:"Marc", nom:"Marc Delorme"},
  chapitres:["Calculs de base"],

  role:"Vous êtes consultant junior au cabinet <b>ORIENS</b>. Ce matin, votre responsable vous envoie seul sur un dossier.",
  situation:`<p><b>Marc Delorme</b> tient « Nomade Vélo », un magasin de vélos et d'accessoires, depuis 4 ans. Deux salariés. La saison de printemps commence : grosse commande chez les fournisseurs, et un début de doute.</p>
    <p>« J'ai négocié de bonnes remises cette année. Sur le papier, tout va bien. Mais quand je regarde mon compte en banque, je ne retrouve pas cet argent-là. Et sur les casques, ma marge affichée est belle… trop belle, peut-être. »</p>
    <p>Marc vous tend deux factures et un tableau de son cahier de suivi. <b>Il veut savoir ce qu'il gagne vraiment, pas ce qu'il croit gagner.</b></p>`,
  enjeux:[{n:"4 ans", t:"d'activité"}, {n:"2", t:"salariés"}, {n:"646 €", t:"de commande à vérifier"}],

  plan:[
    "Calculer le prix réellement payé chez le fournisseur de pneus",
    "Reconstituer le coût d'achat réel des casques, frais de port compris",
    "Vérifier si la marge sur les casques est aussi bonne qu'annoncée",
    "Mesurer si l'activité progresse vraiment cette saison",
    "Conseiller Marc sur la suite"
  ],

  pieces:[
    {id:"mot", ic:"✉️", titre:"Message de Marc", type:"Reçu à 8h03", chap:"Contexte", debloc:null, html:`
      <p class="manuscrit">« Entrez, entrez. Je viens de valider ma commande de printemps, je devrais être content — j'ai deux remises négociées cette année. Sauf que je regarde mon compte et je ne vois pas où elles sont passées. Et sur les casques, ma marge me paraît trop belle pour être vraie. Vérifiez-moi tout ça, s'il vous plaît. »</p>`},

    {id:"devis-pneus", ic:"🚲", titre:"Devis fournisseur — pneus", type:"Annexe 1", chap:"Calculs de base", debloc:null, html:`
      <p style="font-size:13.5px;color:#6C7891">Cycles Auvray — devis pour la commande de printemps.</p>
      <table class="reg">
        <tr><td>Lot de pneus (prix catalogue HT)</td><td>800,00</td></tr>
        <tr><td>Remise fournisseur négociée</td><td>15 %</td></tr>
        <tr><td>Escompte pour règlement comptant</td><td>5 %</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">Les deux remises s'appliquent l'une après l'autre, pas en même temps.</p>`},

    {id:"facture-casques", ic:"🪖", titre:"Facture d'achat — casques", type:"Annexe 2", chap:"Calculs de base", debloc:null, html:`
      <p style="font-size:13.5px;color:#6C7891">HKM Distribution — facture n° 4471.</p>
      <table class="reg">
        <tr><td>40 casques × 15,00 € HT (prix catalogue)</td><td>600,00</td></tr>
        <tr><td>Remise volume −10 %</td><td>−60,00</td></tr>
        <tr class="sous"><td>Net marchandise</td><td>540,00</td></tr>
        <tr><td>Frais de port (forfait, non remisable)</td><td>60,00</td></tr>
        <tr class="total"><td>Net à payer (HT)</td><td>600,00</td></tr>
      </table>`},

    {id:"rayon", ic:"🏷️", titre:"Étiquette en rayon", type:"Relevé sur place", chap:"Calculs de base", debloc:null, html:`
      <p>Prix affiché sur les casques en rayon : <b>28,80 € TTC</b>.</p>
      <p>TVA applicable : 20 %.</p>`},

    {id:"politique", ic:"📋", titre:"Politique tarifaire", type:"Note interne", chap:"—", debloc:null, html:`
      <p>Extrait du classeur de Marc : <i>« Sur les accessoires, je vise toujours un coefficient multiplicateur de 2 et un taux de marge d'au moins 65 %. En dessous, ce n'est pas assez rentable pour justifier l'espace en rayon. »</i></p>`},

    {id:"apprenti", ic:"🗣️", titre:"Léo, apprenti vendeur", type:"Témoignage", chap:"Calculs de base", debloc:null, html:`
      <p class="manuscrit">« Moi j'ai calculé la marge des casques la semaine dernière pour m'entraîner : je suis arrivé à un taux de marge énorme, un truc comme 90 quelque chose pour cent. Marc a eu l'air content mais après il a dit "attends, refais ça, y'a un truc qui cloche". »</p>`},

    {id:"cahier-suivi", ic:"📒", titre:"Cahier de suivi — CA par famille", type:"Annexe 3", chap:"Calculs de base", debloc:null, html:`
      <p style="font-size:13.5px;color:#6C7891">Chiffre d'affaires HT, printemps N−1 et printemps N.</p>
      <table class="reg">
        <tr><th>Famille</th><th>Printemps N−1</th><th>Printemps N</th></tr>
        <tr><td>Vélos</td><td>9 000</td><td>10 200</td></tr>
        <tr><td>Pièces & entretien</td><td>4 500</td><td>4 800</td></tr>
        <tr><td>Accessoires</td><td>3 000</td><td>3 300</td></tr>
        <tr><td>Textile</td><td>1 500</td><td>1 500</td></tr>
      </table>`},

    {id:"banque", ic:"🏦", titre:"Relevé bancaire", type:"Extrait", chap:"—", debloc:"v1", html:`
      <p>Prélèvement Cycles Auvray : <b>646,00 €</b>.</p>
      <p>Note de Marc au dos : « Voilà, c'est ce chiffre-là que je voulais comprendre. »</p>`}
  ],

  serrures:[
    {
      id:"v1", ic:"🔐", nom:"Le classeur des devis",
      demande:"Post-it collé sur le devis pneus, de la main de Marc : <i>« le code = ce que je paie vraiment, une fois les deux remises passées, l'une après l'autre »</i>.",
      boussole:"Deux remises qui se suivent ne s'additionnent jamais. On applique la première, puis on applique la seconde sur ce qu'il reste — pas sur le prix de départ.",
      outil:"apres-remise", candidats:["apres-remise","reduc","avant-remise","tx-var"],
      reponse:646, tol:0, unite:"€",
      debloque:["banque"],
      reaction:"646 €, exactement ce qui est sorti de mon compte. Donc mes remises sont bien là. Bon. Reste les casques…",
      faux:{
        "reduc":{t:"Ça donne un montant de remise, pas un prix", p:"Cet outil calcule combien vaut UNE remise en euros. Ici Marc veut le prix final, après les DEUX remises.", ex:"Reduc dirait « la remise de 15 % vaut 120 € ». Ce n'est pas la question posée."},
        "avant-remise":{t:"Le sens est inversé", p:"Cet outil part d'un prix déjà remisé pour retrouver le prix de départ. Ici, c'est l'inverse : on connaît le prix de départ et on cherche le prix remisé.", ex:"On a le prix catalogue (800 €), on descend vers ce qui est payé — pas l'inverse."},
        "tx-var":{t:"Autre famille de calcul", p:"Le pourcentage d'évolution compare deux dates. Ici il n'y a qu'un seul prix qui descend en deux étapes, pas une évolution dans le temps.", ex:"Une remise n'est pas une évolution : rien n'a « changé entre deux périodes », on retire juste une part du prix."}
      },
      pieges:[
        {val:640, t:"Les deux taux ont été additionnés", p:"15 % + 5 % = 20 %, mais ce n'est pas comme ça que deux remises successives se cumulent. La seconde s'applique sur ce qu'il reste après la première, qui est déjà plus petit que le prix de départ.", ex:"800 × 0,85 = 680, puis 680 × 0,95 = 646. Alors que 800 × 0,80 = 640 : c'est plus, parce qu'on a fait comme si les deux remises portaient sur 800 € en entier."}
      ],
      fiche:{titre:"Remises successives", f:"Départ × (1 − %1÷100) × (1 − %2÷100)", txt:"Quand deux remises s'appliquent l'une après l'autre, on ne les additionne jamais : on applique la première, puis la seconde sur le nouveau montant.", ex:"800 × 0,85 × 0,95 = 646 €. (Et non 800 × 0,80 = 640 €.)"},
      pouces:[
        {cout:1, txt:"Les deux remises sont sur l'Annexe 1. Elles s'appliquent l'une après l'autre, jamais en les additionnant."},
        {cout:2, txt:"D'abord la remise fournisseur sur 800 €, puis l'escompte sur ce qu'il reste."},
        {cout:4, txt:"800 × 0,85 = 680, puis 680 × 0,95 = 646 €."}
      ]
    },
    {
      id:"v2", ic:"🪖", nom:"Le carton de casques",
      demande:"Étiquette scotchée sur le carton : <i>« mdp = le coefficient que j'obtiens VRAIMENT sur ce carton, pas celui que je crois obtenir »</i>.",
      boussole:"Le prix catalogue ne suffit pas ici : il a été remisé, puis des frais de port se sont ajoutés. Il faut d'abord reconstituer ce que le carton a coûté au total, pour un seul casque — avant de comparer ce coût au prix affiché en rayon.",
      outil:"coef", candidats:["coef","apres-aug","marge","avant-aug"],
      reponse:1.92, tol:0.01, unite:"",
      debloque:["cahier-suivi"],
      reaction:"1,92 ? Je pensais appliquer 2 sur toute la boutique... Les frais de port ont mangé une partie de ma remise.",
      faux:{
        "apres-aug":{t:"Ça sert à passer du HT au TTC", p:"Cet outil ajoute une hausse (comme la TVA) à un prix. Ici on ne cherche pas un prix, mais le nombre par lequel le coût a été multiplié pour arriver au prix affiché.", ex:"apres-aug donnerait un prix en euros, pas un coefficient comme 1,92."},
        "marge":{t:"Ça donne un montant, pas un coefficient", p:"La marge se compte en euros. Le code demandé est un coefficient, un nombre sans unité, comme 1,92 ou 2,50.", ex:"La marge est un ingrédient utile plus tard, pas la réponse ici."},
        "avant-aug":{t:"Le sens est inversé", p:"Cet outil retire une hausse pour retrouver un prix de départ. Ici on ne retire rien : on compare un prix de vente déjà fixé à un coût déjà reconstitué.", ex:"On a les deux chiffres (coût et prix) : il ne reste qu'à diviser, pas à remonter une hausse."}
      },
      pieges:[
        {val:2.13, t:"Les frais de port ont été oubliés", p:"En ne comptant que la remise (540 € pour 40 casques, soit 13,50 € pièce), le coût réel est sous-estimé. Les frais de port de 60 € font partie du prix payé au fournisseur.", ex:"540 € de marchandise + 60 € de port = 600 € au total, pas seulement 540 €."}
      ],
      fiche:{titre:"Coefficient multiplicateur (coût réel)", f:"Prix de vente TTC ÷ Coût d'achat HT réel", txt:"Avant de calculer un coefficient, il faut s'assurer que le coût d'achat est complet : marchandise remisée ET frais annexes (port, transport). Sinon le coefficient affiché est faux.", ex:"(600 € marchandise+port) ÷ 40 casques = 15 € le coût réel. 28,80 ÷ 15 = 1,92."},
      pouces:[
        {cout:1, txt:"La facture (Annexe 2) donne le prix catalogue, la remise ET les frais de port. Les trois comptent dans le coût réel."},
        {cout:2, txt:"(600 × 0,90 + 60) ÷ 40 = coût réel d'un casque. Puis on divise le prix affiché (28,80 €) par ce coût."},
        {cout:4, txt:"Coût réel = 15 € le casque. 28,80 ÷ 15 = 1,92."}
      ]
    },
    {
      id:"v3", ic:"💰", nom:"Le tiroir-caisse",
      demande:"Marc, en désignant le tiroir : <i>« mdp = ce que je gagne vraiment sur 100 € que ce casque m'a coûté, en pourcentage »</i>.",
      boussole:"Le prix affiché est en TTC, mais le coût que vous avez reconstitué est en HT. Il faut comparer des prix habillés pareil avant de calculer quoi que ce soit.",
      outil:"tx-marge", candidats:["tx-marge","tx-marque","marge","coef"],
      reponse:60, tol:0, unite:"%",
      debloque:[],
      reaction:"60 %... c'est bien en dessous des 65 % que je vise d'habitude. Léo avait raison de trouver son calcul suspect.",
      faux:{
        "tx-marque":{t:"Attention, ce n'est pas pareil", p:"Le taux de marque se calcule sur le prix de VENTE. Marc demande ce qu'il gagne pour 100 € que le casque lui a COÛTÉ : c'est le prix d'achat au dénominateur, donc le taux de marge.", ex:"Marque : 9 ÷ 24 × 100 = 37,5 %. Marge : 9 ÷ 15 × 100 = 60 %. Même casque, deux chiffres différents."},
        "marge":{t:"En euros, pas en pourcentage", p:"La marge commerciale donne un montant en euros. Le code demandé est un pourcentage.", ex:"La marge (9 €) est l'ingrédient, le taux de marge (60 %) est le résultat."},
        "coef":{t:"Déjà fait", p:"Le coefficient a été trouvé à l'étape précédente (1,92). Ici Marc demande autre chose : un pourcentage de rentabilité, pas un multiplicateur.", ex:"1,92 n'est pas un pourcentage, ce n'est pas ce que demande le tiroir-caisse."}
      },
      pieges:[
        {val:92, t:"Le TTC n'a pas été converti en HT", p:"28,80 € est un prix TTC. Pour calculer une marge, il faut comparer des prix hors taxes : 28,80 ÷ 1,20 = 24 € HT, pas 28,80 € directement.", ex:"(28,80 − 15) ÷ 15 × 100 = 92 %, un chiffre gonflé parce que la TVA n'a pas été retirée."},
        {val:77.78, t:"Les frais de port ont encore été oubliés", p:"En reprenant le coût sans les frais de port (13,50 € au lieu de 15 €), la marge paraît meilleure qu'elle ne l'est. C'est exactement l'erreur que Léo a faite.", ex:"(24 − 13,50) ÷ 13,50 × 100 ≈ 77,8 %, contre 60 % avec le vrai coût."}
      ],
      fiche:{titre:"Taux de marge (coût complet)", f:"Marge commerciale ÷ Coût d'achat HT réel × 100", txt:"Ce qu'on gagne pour 100 € réellement dépensés chez le fournisseur, port compris. Toujours comparer des prix hors taxes entre eux, et un coût complet — jamais un coût partiel.", ex:"(24 − 15) ÷ 15 × 100 = 60 %."},
      pouces:[
        {cout:1, txt:"Convertissez d'abord le prix affiché (28,80 € TTC) en HT avant de calculer quoi que ce soit."},
        {cout:2, txt:"Prix de vente HT : 28,80 ÷ 1,20 = 24 €. Coût réel déjà trouvé : 15 €."},
        {cout:4, txt:"(24 − 15) ÷ 15 × 100 = 60 %."}
      ]
    },
    {
      id:"v4", ic:"📈", nom:"Le cahier de suivi",
      demande:"Marc, en tapotant le tableau : <i>« mdp = est-ce que je progresse vraiment, cette saison, sur l'ensemble du magasin ? Un pourcentage, sur le TOTAL. »</i>",
      boussole:"Quatre familles de produits, deux saisons : additionnez d'abord chaque colonne pour obtenir un total par saison, puis comparez les deux totaux. Ne comparez jamais des pourcentages de familles entre eux avant d'avoir fait cette somme.",
      outil:"tx-var", candidats:["tx-var","part","tx-marque","reduc"],
      reponse:10, tol:0, unite:"%",
      debloque:[],
      reaction:"+10 % sur l'ensemble, ça c'est une bonne nouvelle. Au moins un chiffre qui ne me réserve pas de mauvaise surprise.",
      faux:{
        "part":{t:"Ça mesure un poids, pas une évolution", p:"Le pourcentage de part dit quelle place une famille occupe dans un total à un instant donné. Marc veut savoir si le total a progressé entre deux saisons.", ex:"Part répondrait à « les vélos pèsent combien du CA total ? », pas à « le magasin progresse-t-il ? »."},
        "tx-marque":{t:"Autre famille de calcul", p:"Le taux de marque compare une marge à un prix de vente. Ici il n'est question que de chiffre d'affaires d'une saison à l'autre.", ex:"Il n'y a ni marge ni coût d'achat dans ce tableau, seulement des ventes."},
        "reduc":{t:"Ça calcule une remise, pas une évolution", p:"Cet outil sert à chiffrer une remise ou une hausse déjà connue en pourcentage. Ici, c'est l'inverse : il faut TROUVER le pourcentage d'évolution à partir de deux montants.", ex:"On ne vous donne pas un taux à appliquer, on vous demande de le calculer."}
      },
      pieges:[
        {val:7.5, t:"Les taux des familles ont été moyennés", p:"Faire la moyenne des quatre pourcentages de familles n'a pas de sens : chaque famille ne pèse pas le même poids dans le total. Il faut additionner les euros d'abord, calculer le pourcentage ensuite.", ex:"Moyenne des 4 taux : (13,33 + 6,67 + 10 + 0) ÷ 4 = 7,5 %. Ce n'est pas l'évolution du magasin, seulement une moyenne qui ignore le poids de chaque famille."},
        {val:10.91, t:"Une famille a été oubliée dans la somme", p:"En oubliant le Textile dans les deux totaux, le calcul se fait sur une base incomplète.", ex:"Sans le Textile : 16 500 → 18 300, soit +10,91 % — proche du bon chiffre, mais faux, car une famille entière manque à l'appel."}
      ],
      fiche:{titre:"Pourcentage d'évolution (plusieurs familles)", f:"(Total arrivée − Total départ) ÷ Total départ × 100", txt:"Quand les données sont réparties par famille, on additionne d'abord chaque colonne pour obtenir un total par période. On ne compare et on ne moyenne jamais des pourcentages de familles entre eux.", ex:"Total N−1 = 18 000 €. Total N = 19 800 €. (19 800 − 18 000) ÷ 18 000 × 100 = 10 %."},
      pouces:[
        {cout:1, txt:"Additionnez d'abord les 4 familles de l'Annexe 3, colonne par colonne, pour obtenir un total par saison."},
        {cout:2, txt:"Total printemps N−1 = 18 000 €. Total printemps N = 19 800 €."},
        {cout:4, txt:"(19 800 − 18 000) ÷ 18 000 × 100 = 10 %."}
      ]
    }
  ],

  rapport:[
    {
      q:"Marc a l'impression que ses remises négociées n'ont servi à rien. Que lui répondez-vous ?",
      choix:[
        {t:"Il a raison, les remises ne se voient jamais sur le compte en banque.", bon:false, r:"Non. Sur les pneus, les 646 € prélevés correspondent exactement aux deux remises appliquées l'une après l'autre. Elles sont bien là."},
        {t:"Sur les pneus, les remises sont bien passées ; sur les casques, elles ont été mangées par des frais de port qui ne sont jamais remisés.", bon:true, r:"C'est exactement ça. Les 646 € des pneus prouvent que les remises fonctionnent. Mais sur les casques, la remise volume (60 €) a été entièrement absorbée par des frais de port (60 €) : le coût réel reste à 15 € pièce, comme au catalogue."},
        {t:"Ses fournisseurs le trompent sur les pourcentages annoncés.", bon:false, r:"Rien ne le montre. Les deux devis appliquent exactement les pourcentages annoncés. Le problème n'est pas une tromperie, c'est un coût oublié : le transport."},
        {t:"C'est le comptable qui a mal saisi les factures.", bon:false, r:"Rien dans le dossier ne pointe une erreur de saisie. Les montants sur le relevé bancaire correspondent aux devis."}
      ]
    },
    {
      q:"Sur les casques, que recommandez-vous à Marc ?",
      choix:[
        {t:"Baisser le prix affiché pour attirer plus de clients.", bon:false, r:"Ce serait aggraver le problème : le taux de marge est déjà sous l'objectif (60 % contre 65 % visé). Baisser le prix l'éloignerait encore plus de sa politique tarifaire."},
        {t:"Changer de fournisseur, la remise volume ne sert à rien.", bon:false, r:"La remise volume fonctionne (60 € économisés) ; c'est le forfait de port fixe qui pose problème, pas la remise elle-même. Changer de fournisseur ne réglerait rien si le nouveau facture aussi des frais fixes."},
        {t:"Renégocier le forfait de port ou relever légèrement le prix affiché pour retrouver les 65 % de marge visés.", bon:true, r:"Oui. Le coût réel (15 €) est correct, mais le prix de vente (28,80 € TTC) a été fixé sans compter les frais de port dans le calcul. Pour revenir à 65 % de marge, il faut soit réduire ce coût (négocier le port), soit ajuster le prix en rayon."},
        {t:"Ne rien changer, l'activité progresse de toute façon de 10 %.", bon:false, r:"La progression globale du magasin (+10 %) est une bonne nouvelle, mais elle ne dit rien sur la rentabilité d'une famille de produits en particulier. Les deux sujets sont liés, pas interchangeables."}
      ]
    }
  ],

  lexique:[
    {terme:"Remises successives", def:"Quand deux remises s'appliquent l'une après l'autre, on ne les additionne jamais. On applique la première, puis la seconde sur ce qu'il reste.", ex:"800 × 0,85 × 0,95 = 646 €, et non 800 × 0,80 = 640 €."},
    {terme:"Coût d'achat réel", def:"Le prix catalogue remisé, plus tous les frais annexes qui ne sont pas remisables (port, transport, emballage).", ex:"540 € de marchandise + 60 € de port = 600 € au total pour 40 casques, soit 15 € pièce."},
    {terme:"Coefficient multiplicateur", def:"Le nombre par lequel on multiplie le coût d'achat HT pour obtenir le prix de vente TTC. Il faut un coût complet pour qu'il soit juste.", ex:"28,80 ÷ 15 = 1,92, alors que la politique de la boutique en vise 2."},
    {terme:"Taux de marque", def:"Sur 100 € encaissés à la caisse, ce qui reste une fois le fournisseur payé.", ex:"9 ÷ 24 × 100 = 37,5 % pour les casques."},
    {terme:"Taux de marge", def:"Ce qu'on gagne pour 100 € réellement dépensés chez le fournisseur, port compris.", ex:"9 ÷ 15 × 100 = 60 % pour les casques, contre 65 % visé."},
    {terme:"Pourcentage d'évolution (plusieurs familles)", def:"Quand les données sont réparties par famille, on additionne d'abord les totaux de chaque période avant de calculer l'évolution. On ne moyenne jamais des pourcentages entre eux.", ex:"18 000 € → 19 800 € sur l'ensemble du magasin : +10 %."}
  ]
};
