/* ════════════════════════════════════════════════════════════
   MISSION GO-00 — Këpler Store
   Chapitre 0 : pourcentages, remises, HT/TTC, marges.
   Niveau découverte — la première mission de l'année.
   ════════════════════════════════════════════════════════════ */
window.H5P_PATH = null;

window.MISSION = {
  ref:"GO-00",
  enseigne:"Këpler Store",
  sujet:"Pourcentages · Remises · Marges",
  niveau:"Découverte",
  duree:"~45 min",
  accroche:"Il vend 15 % de plus et gagne pareil. Et son fournisseur lui doit de l'argent.",
  client:{prenom:"Yanis", nom:"Yanis Ferhat"},
  chapitres:["Chapitre 0","Calculs de base"],
  budgetQuestions:5,

  role:"Vous êtes consultant junior au cabinet <b>ORIENS</b>. Première mission : un petit magasin, un patron de 26 ans, et une intuition qu'il n'arrive pas à prouver.",
  situation:`<p><b>Këpler Store</b> vend des sneakers et du streetwear rue de Charonne. Ouvert il y a deux ans par <b>Yanis Ferhat</b>, 26 ans, deux vendeurs.</p>
    <p>Le magasin marche : les ventes ont progressé cette année. Mais Yanis a une impression bizarre. <b>« Je vends plus et j'ai l'impression de gagner pareil. Et mon fournisseur, je crois qu'il me la met à l'envers. »</b></p>
    <p>Il ne sait pas le prouver. Il ne sait même pas par où commencer.</p>
    <p style="color:#8FA3C4;font-size:14px">Vous, si. Enfin, à la fin de cette mission.</p>`,
  enjeux:[{n:"2 ans", t:"d'existence"},{n:"3", t:"gammes à comparer"},{n:"5", t:"questions à poser"}],

  plan:[
    "Mesurer si le magasin progresse vraiment",
    "Voir quelle gamme pèse le plus dans les ventes",
    "Mesurer ce que chaque gamme rapporte réellement",
    "Vérifier les factures du fournisseur",
    "Chiffrer ce que Yanis peut récupérer"
  ],

  actes:[
    {titre:"L'état des lieux", serrures:["v1"],
     intro:"Yanis vous tend son ordinateur de caisse. Il est verrouillé, et il a oublié le code. « Il est écrit quelque part dans mes notes, mais je comprends rien à ce que j'ai marqué. »"},
    {titre:"Où se fait l'argent", serrures:["v2","v3"],
     intro:"Trois gammes : sneakers, textile, accessoires. Yanis est persuadé que les sneakers sont sa poule aux œufs d'or. C'est à vérifier."},
    {titre:"La facture déchirée", serrures:["v4"],
     intro:"Dans un classeur, une facture du fournisseur Northline. Du café a effacé la moitié des montants. Yanis a un contrat avec eux : 8 % de remise sur tout."},
    {titre:"Ce que Northline n'a pas fait", serrures:["v5"],
     intro:"Vous savez maintenant à quoi ressemble une facture correcte. Reste à regarder les autres."}
  ],

  personnages:[
    {id:"yanis", ic:"🧢", nom:"Yanis Ferhat", role:"Gérant, 26 ans",
     intro:"Il est assis sur le comptoir, un carton de baskets encore fermé à côté de lui.",
     questions:[
       {q:"Comment fixez-vous vos prix ?", cle:true,
        r:"« Je multiplie par 2. C'est ce qu'on m'a dit quand j'ai ouvert : tu achètes 100, tu vends 200, tu t'en sors. Je fais ça sur tout depuis deux ans. »"},
       {q:"Vous vérifiez vos factures fournisseur ?",
        r:"« Franchement ? Non. Elles arrivent par mail, je paie, je passe à autre chose. J'ai un contrat avec 8 % de remise, je pars du principe qu'ils l'appliquent. »"},
       {q:"Vos ventes ont progressé, non ?",
        r:"« Ouais, clairement. On a fait une bonne année. C'est bien pour ça que je comprends pas pourquoi je galère toujours autant à la fin du mois. »"}
     ]},
    {id:"ines", ic:"👟", nom:"Inès", role:"Vendeuse, à mi-temps",
     questions:[
       {q:"Qu'est-ce qui part le mieux en magasin ?", cle:true, debloque:["ventes-gamme"],
        r:"« Les sneakers, largement. Les gens viennent pour ça. Le textile et les casquettes, c'est de l'appoint — mais bizarrement c'est là-dessus qu'on nous félicite pour les prix. »"},
       {q:"Les modèles premium se vendent bien ?",
        r:"« Les 240 €, oui, ça part. Yanis est fier de sa vitrine. Mais je l'ai entendu dire à un client qu'il faisait 'un geste'. Il en fait souvent, des gestes. »"}
     ]},
    {id:"berthier", ic:"📦", nom:"M. Berthier", role:"Commercial chez Northline",
     questions:[
       {q:"Comment fonctionne la remise de Yanis ?", cle:true,
        r:"« Contrat cadre, 8 % sur l'ensemble du catalogue. C'est appliqué automatiquement, sur toutes ses factures, depuis la signature. Il n'a rien à demander. »"},
       {q:"Vous avez changé de logiciel récemment ?",
        r:"« En mars, oui. Migration du système de facturation. Ça s'est bien passé, à part deux ou trois clients qu'il a fallu re-paramétrer à la main. » Un silence. « Pourquoi ? »"}
     ]},
    {id:"comptable", ic:"🧮", nom:"Farida", role:"Comptable, une fois par trimestre",
     questions:[
       {q:"Comment se porte le magasin financièrement ?",
        r:"« Le chiffre d'affaires monte, ça c'est vrai. Mais la marge ne suit pas au même rythme. Quand ça arrive, c'est presque toujours soit les prix de vente, soit les prix d'achat. Parfois les deux. »"},
       {q:"Yanis vous a parlé de ses factures ?", cle:true, debloque:["factures-lot"],
        r:"« Il ne les regarde jamais. Je lui ai sorti le récapitulatif du semestre trois fois, il ne l'a pas ouvert. Tenez, le voilà. »"}
     ]}
  ],

  pieces:[
    {id:"notes", ic:"📝", titre:"Les notes de Yanis", type:"Carnet", chap:"Contexte", debloc:null, html:`
      <p>Une page de carnet, écriture rapide, quatre lignes soulignées :</p>
      <p class="manuscrit">« code caisse = les 4 trucs que le comptable m'a expliqués, dans l'ordre.<br>
      1. de combien j'ai progressé<br>
      2. combien pèse une gamme<br>
      3. ce que je garde sur ce que j'encaisse<br>
      4. le nombre par lequel je multiplie mes achats »</p>
      <p style="font-size:13.5px;color:#6C7891">Yanis : « Je me souviens plus lequel est lequel. »</p>`},

    {id:"ca", ic:"📈", titre:"Les ventes de l'année", type:"Extrait de caisse", chap:"Calculs de base", debloc:null, html:`
      <table class="reg">
        <tr><th>Exercice</th><th>Ventes HT</th></tr>
        <tr><td>N−1</td><td>180 000</td></tr>
        <tr><td>N</td><td>207 000</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">Toutes gammes confondues, hors taxes. TVA applicable : 20 %.</p>`},

    {id:"ventes-gamme", ic:"👕", titre:"Le détail par gamme", type:"Extrait de caisse", chap:"Calculs de base", debloc:"enquête", html:`
      <p style="font-size:13.5px;color:#6C7891">Exercice N — montants hors taxes.</p>
      <table class="reg">
        <tr><th>Gamme</th><th>Ventes HT</th></tr>
        <tr><td>Sneakers</td><td>144 900</td></tr>
        <tr><td>Textile</td><td>41 400</td></tr>
        <tr><td>Accessoires</td><td>20 700</td></tr>
        <tr class="total"><td>Total</td><td>207 000</td></tr>
      </table>
      <table class="reg">
        <tr><th>Gamme</th><th>Ce que la marchandise a coûté (HT)</th></tr>
        <tr><td>Sneakers</td><td>101 430</td></tr>
        <tr><td>Textile</td><td>16 560</td></tr>
        <tr><td>Accessoires</td><td>8 280</td></tr>
      </table>`},

    {id:"paire", ic:"👟", titre:"La paire premium", type:"Étiquette et bon de commande", chap:"Calculs de base", debloc:"v3", html:`
      <p>Le modèle phare de la vitrine, celui dont Yanis est le plus fier.</p>
      <table class="reg">
        <tr><td>Prix affiché en magasin (TTC)</td><td>240,00</td></tr>
        <tr><td>Quantité commandée chez Northline</td><td>30 paires</td></tr>
      </table>
      <p>Yanis, sur la règle qu'il s'applique : <b>« j'achète 100, je vends 200 »</b> — soit un coefficient de 2,00.</p>`},

    {id:"facture", ic:"☕", titre:"La facture tachée", type:"Northline n° 2214", chap:"Calculs de base", debloc:"v3", html:`
      <p style="font-size:13.5px;color:#6C7891">Reconstituée par vos soins.</p>
      <table class="reg">
        <tr><td>30 paires premium — prix catalogue HT</td><td>4 200,00</td></tr>
        <tr><td>Remise contractuelle 8 %</td><td>−336,00</td></tr>
        <tr class="total"><td>Net HT</td><td>3 864,00</td></tr>
        <tr><td>TVA 20 %</td><td>772,80</td></tr>
        <tr class="total"><td>Total TTC</td><td>4 636,80</td></tr>
      </table>
      <p>Soit un coût réel de <b>128,80 € HT la paire</b> (3 864 ÷ 30).</p>`},

    {id:"factures-lot", ic:"🗂️", titre:"Le récapitulatif du semestre", type:"Document comptable", chap:"Calculs de base", debloc:"enquête", html:`
      <p style="font-size:13.5px;color:#6C7891">Les cinq factures Northline du semestre.</p>
      <table class="reg">
        <tr><th>Facture</th><th>Catalogue HT</th><th>Net HT payé</th></tr>
        <tr><td>2214 — janvier</td><td>4 200,00</td><td>3 864,00</td></tr>
        <tr><td>2287 — février</td><td>2 500,00</td><td>2 300,00</td></tr>
        <tr><td>2361 — avril</td><td>4 600,00</td><td>4 600,00</td></tr>
        <tr><td>2402 — mai</td><td>3 150,00</td><td>3 150,00</td></tr>
        <tr><td>2455 — juin</td><td>1 800,00</td><td>1 656,00</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">Farida : « Regardez la troisième colonne, c'est tout. »</p>`},

    {id:"contrat", ic:"📜", titre:"Le contrat Northline", type:"Contrat cadre", chap:"Calculs de base", debloc:null, html:`
      <p class="manuscrit">« Article 4 — Conditions tarifaires. Une remise de <b>8 %</b> est appliquée sur l'intégralité des références du catalogue, sur toute la durée du contrat, sans condition de volume ni de délai de règlement. »</p>
      <p style="font-size:13.5px;color:#6C7891">Signé il y a deux ans. Toujours en vigueur.</p>`},

    {id:"vitrine", ic:"🪟", titre:"La vitrine", type:"Constat sur place", chap:"—", debloc:null, html:`
      <p>Douze paires exposées, éclairage soigné, affiche « NEW DROP » en néon.</p>
      <p>Inès a raison : la vitrine est belle. Trois clients entrent pendant que vous êtes là. Deux ressortent avec un sac.</p>`},

    {id:"loyer", ic:"🏠", titre:"Quittance de loyer", type:"Document", chap:"—", debloc:null, html:`
      <p>Loyer commercial : 1 850 € par mois, charges comprises. Révision annuelle de 1,2 %.</p>
      <p>Rien d'anormal pour la rue de Charonne.</p>`}
  ],

  serrures:[
    /* ── ACTE 1 : associer chaque question à sa formule ── */
    {
      id:"v1", ic:"🖥️", nom:"L'ordinateur de caisse", action:"Déverrouiller la caisse",
      demande:"Quatre lignes dans le carnet de Yanis, quatre chiffres à retrouver. Il faut comprendre ce que chaque ligne décrit.",
      boussole:"Ne cherchez pas de calcul ici. Lisez chaque ligne du carnet et demandez-vous simplement : <b>de quelle question de gestion s'agit-il ?</b> C'est le geste le plus important de l'année.",
      epreuve:{
        type:"appariement",
        titre:"Traduire les notes de Yanis",
        consigne:"Touchez un outil, puis la ligne du carnet qui lui correspond. Chaque bonne association livre un chiffre du code.",
        paires:[
          {terme:"Pourcentage d'évolution", chiffre:"7",
           def:"« De combien j'ai progressé » — comparer cette année à l'année d'avant.",
           expl:{t:"C'est la comparaison dans le temps", p:"Quand on compare deux dates, on mesure une évolution. On part toujours de la valeur de départ.", ex:"180 000 l'an dernier, 207 000 cette année : de combien ai-je progressé ?"}},
          {terme:"Pourcentage de part", chiffre:"3",
           def:"« Combien pèse une gamme » — quel poids un élément représente dans un total.",
           expl:{t:"C'est la comparaison dans un ensemble", p:"On ne compare pas deux dates mais un morceau et son total. Le résultat dit quelle place occupe ce morceau.", ex:"Les sneakers font 144 900 sur 207 000 de ventes : quelle part ça représente ?"}},
          {terme:"Taux de marque", chiffre:"9",
           def:"« Ce que je garde sur ce que j'encaisse » — la part de marge dans le prix de vente.",
           expl:{t:"Le mot « encaisse » est la clé", p:"Ce qu'on encaisse, c'est le prix de vente. Le taux de marque rapporte la marge au prix de vente.", ex:"Vendu 100 €, acheté 70 € : je garde 30 € sur 100 encaissés, soit 30 %."}},
          {terme:"Coefficient multiplicateur", chiffre:"4",
           def:"« Le nombre par lequel je multiplie mes achats » — pour obtenir directement l'étiquette.",
           expl:{t:"Ce n'est pas un pourcentage", p:"Le coefficient est un nombre comme 2,00 ou 1,86. On multiplie le prix d'achat par ce nombre pour trouver le prix affiché.", ex:"Yanis dit « j'achète 100, je vends 200 » : son coefficient est 2."}}
        ],
        reussite:{titre:"La caisse s'ouvre", txt:"Vous venez de faire ce qui bloque le plus d'étudiants à l'examen : reconnaître de quel outil on parle quand personne ne le nomme. Les ventes de l'année sont maintenant dans vos documents."}
      },
      outil:"tx-var", candidats:["tx-var","part","tx-marque","coef","reduc"],
      reponse:15, tol:0, unite:"%",
      debloque:[],
      reaction:"15 % ! Je le savais que ça montait. Alors pourquoi j'ai pas plus d'argent sur le compte, moi ?",
      faux:{
        "part":{t:"Ce n'est pas une part", p:"La part compare un morceau à son total, à un instant donné. Ici on compare deux années : c'est une évolution.", ex:"« Quel poids font les sneakers » = une part. « De combien j'ai progressé » = une évolution."},
        "tx-marque":{t:"Pas encore les marges", p:"Le taux de marque parle de ce qu'on gagne sur une vente. Ici on regarde seulement si le volume des ventes a bougé.", ex:"On compare 180 000 et 207 000, sans se demander ce que ça a coûté."},
        "coef":{t:"Ce n'est pas un pourcentage", p:"Le coefficient multiplicateur sert à fixer un prix de vente à partir d'un prix d'achat. Rien à voir avec une comparaison entre deux années.", ex:"Le coefficient donne 2,00. Ici on attend un pourcentage."},
        "reduc":{t:"Ce n'est pas une remise", p:"Cette formule calcule combien vaut une remise en euros. Ici on cherche un pourcentage de progression.", ex:"On ne connaît aucun pourcentage au départ : c'est justement lui qu'on cherche."}
      },
      pieges:[
        {val:-15, t:"Le sens est inversé", p:"On part toujours de la valeur de DÉPART, celle de l'année passée. Ici 180 000 est le départ, 207 000 l'arrivée.", ex:"(207 000 − 180 000) ÷ 180 000 × 100 = +15 %. Si vous obtenez −15 %, vous avez pris 207 000 comme point de départ."},
        {val:13.04, t:"Mauvais dénominateur", p:"On divise par la valeur de DÉPART, pas par celle d'arrivée. 13,04 %, c'est ce qu'on obtient en divisant par 207 000.", ex:"La question est « de combien ai-je progressé par rapport à AVANT » : c'est donc l'avant qui sert de référence."},
        {val:115, t:"C'est le rapport, pas l'évolution", p:"207 000 représente 115 % de 180 000. Mais l'évolution, c'est ce qui a été ajouté : 15 points, pas 115.", ex:"Passer de 100 à 115, c'est +15 % — pas +115 %."}
      ],
      fiche:{titre:"Le pourcentage d'évolution", f:"(Arrivée − Départ) ÷ Départ × 100", txt:"Sert à savoir de combien une valeur a augmenté ou baissé entre deux dates. Le piège est toujours le même : on divise par le DÉPART.", ex:"(207 000 − 180 000) ÷ 180 000 × 100 = +15 %."},
      pouces:[
        {cout:1, txt:"Les deux montants sont sur la pièce « Les ventes de l'année ». Le départ, c'est N−1."},
        {cout:2, txt:"On calcule d'abord la différence (207 000 − 180 000), puis on la divise par le départ (180 000)."},
        {cout:4, txt:"(207 000 − 180 000) ÷ 180 000 × 100 = 27 000 ÷ 180 000 × 100 = 15 %."}
      ]
    },

    /* ── ACTE 2 : le poids, puis le rendement ── */
    {
      id:"v2", ic:"🥧", nom:"Le tiroir-caisse", action:"Peser les gammes",
      demande:"Yanis : <i>« Les sneakers, c'est 90 % de mon business, facile. »</i> Il se trompe. De combien ?",
      boussole:"On compare un morceau à son total, à un instant donné. Le résultat est un pourcentage entier ici.",
      outil:"part", candidats:["part","tx-var","tx-marque","reduc"],
      reponse:70, tol:0, unite:"%",
      debloque:[],
      reaction:"70, pas 90. Bon. Ça reste énorme, non ? C'est bien que je me concentre là-dessus.",
      faux:{
        "tx-var":{t:"Ce n'est pas une évolution", p:"L'évolution compare deux dates. Ici tout est sur la même année : on compare une gamme au total.", ex:"« Combien pèsent les sneakers » = une part."},
        "tx-marque":{t:"Pas encore ce que ça rapporte", p:"Le taux de marque viendra juste après. Pour l'instant on mesure seulement le poids dans les ventes, pas le gain.", ex:"Peser d'abord, mesurer le rendement ensuite."},
        "reduc":{t:"Aucune remise ici", p:"Cette formule calcule un montant de remise ou de hausse. Il n'y en a aucune dans cette question.", ex:"On cherche quelle place occupe une gamme dans un total."}
      },
      pieges:[
        {val:30, t:"C'est le complément", p:"30 %, c'est le poids du textile et des accessoires réunis. La question portait sur les sneakers.", ex:"70 % + 30 % = 100 %."},
        {val:350, t:"Le rapport est inversé", p:"On divise le morceau par le total, pas l'inverse. 350 %, c'est 144 900 rapporté à... quelque chose de plus petit.", ex:"Partiel ÷ Total : 144 900 ÷ 207 000."}
      ],
      fiche:{titre:"Le pourcentage de part", f:"Partiel ÷ Total × 100", txt:"Dit quelle place occupe un élément dans un ensemble. Utile pour savoir sur quoi se concentrer — mais attention, peser lourd ne veut pas dire rapporter gros.", ex:"144 900 ÷ 207 000 × 100 = 70 %. Sur Excel : =B2/$E$2 puis format pourcentage."},
      pouces:[
        {cout:1, txt:"Le détail par gamme est dans vos documents. Le total des ventes est en bas du tableau."},
        {cout:2, txt:"144 900 pour les sneakers, 207 000 au total. Partiel divisé par total."},
        {cout:4, txt:"144 900 ÷ 207 000 × 100 = 70 %."}
      ]
    },
    {
      id:"v3", ic:"💰", nom:"Le coffre du bureau", action:"Mesurer le rendement",
      demande:"Sur 100 € encaissés en sneakers, combien Yanis garde-t-il réellement une fois le fournisseur payé ?",
      boussole:"Deux formules se ressemblent beaucoup ici : l'une divise par le prix de <b>vente</b>, l'autre par le prix d'<b>achat</b>. Le mot « encaissé » vous dit laquelle.",
      outil:"tx-marque", candidats:["tx-marque","tx-marge","marge","coef","part"],
      reponse:30, tol:0, unite:"%",
      debloque:["paire","facture"],
      reaction:"30 % sur les sneakers… et le textile alors ? Attendez. 60 % sur le textile ? Mais je vends trois fois plus de sneakers !",
      faux:{
        "tx-marge":{t:"Attention, ce n'est pas pareil", p:"Le taux de MARGE se calcule sur le prix d'ACHAT. Le taux de MARQUE se calcule sur le prix de VENTE. Ici on parle de ce qu'on garde sur ce qu'on encaisse : c'est donc la vente au dénominateur.", ex:"Acheté 70 €, vendu 100 €. Marge : 30 ÷ 70 = 43 %. Marque : 30 ÷ 100 = 30 %. Même paire, deux chiffres."},
        "marge":{t:"En euros, pas en pourcentage", p:"La marge commerciale donne un montant. Ici la question porte sur ce qu'on garde « sur 100 € », donc sur un pourcentage. Il reste une division à faire.", ex:"La marge est l'ingrédient, le taux de marque est le résultat."},
        "coef":{t:"Ce n'est pas un pourcentage", p:"Le coefficient donne un nombre comme 2,00. On le verra juste après, mais ce n'est pas ce qui est demandé ici.", ex:"« Ce que je garde sur 100 € encaissés » appelle un pourcentage."},
        "part":{t:"On a déjà pesé", p:"La part mesure le poids dans les ventes — c'est fait, 70 %. Maintenant on mesure ce que cette gamme rapporte, ce qui est une autre question.", ex:"Peser lourd et rapporter gros sont deux choses différentes. C'est tout l'intérêt de cette mission."}
      },
      pieges:[
        {val:42.86, t:"Marge et marque ont été confondues", p:"42,86 %, c'est le taux de marge : on a divisé par le coût d'achat (101 430). Le taux de marque divise par les ventes (144 900).", ex:"MARQUE = sur la VENTE, comme le prix marqué sur l'étiquette. MARGE = sur l'ACHAT."},
        {val:70, t:"C'est la part, pas la marque", p:"70 %, c'est le poids des sneakers dans les ventes, calculé juste avant. Ici on cherche ce que la gamme rapporte.", ex:"Deux questions différentes sur la même gamme."},
        {val:60, t:"C'est le taux des autres gammes", p:"60 %, c'est le taux de marque du textile et des accessoires. Justement : ils font bien mieux que les sneakers.", ex:"Sneakers 30 %, textile 60 %. C'est ça, la découverte."}
      ],
      fiche:{titre:"Le taux de marque", f:"Marge commerciale ÷ Prix de vente HT × 100", txt:"Sur 100 € encaissés, ce qui reste après avoir payé le fournisseur. Ne pas confondre avec le taux de marge, qui rapporte la même marge au prix d'achat.", ex:"Sneakers : marge de 43 470 € sur 144 900 € de ventes, soit 30 %. Textile : 60 %."},
      pouces:[
        {cout:1, txt:"Il faut d'abord la marge : ventes moins ce que la marchandise a coûté. Les deux chiffres sont dans « Le détail par gamme »."},
        {cout:2, txt:"144 900 − 101 430 = 43 470 € de marge. On la divise ensuite par les VENTES."},
        {cout:4, txt:"43 470 ÷ 144 900 × 100 = 30 %."}
      ]
    },

    /* ── ACTE 3 : reconstituer la facture ── */
    {
      id:"v4", ic:"☕", nom:"La facture tachée", action:"Reconstituer la facture",
      demande:"Du café a effacé trois montants. Seuls le net payé et la TVA restent lisibles. Le contrat prévoit 8 % de remise.",
      boussole:"Pour remonter d'un prix payé vers le prix catalogue, on ne multiplie pas : <b>on divise</b>. La remise a déjà été retirée, il faut faire le chemin inverse.",
      epreuve:{
        type:"document",
        titre:"Retrouver les montants effacés",
        consigne:"Commencez par le prix catalogue : c'est le seul que le net payé permet de retrouver directement.",
        entete:'<p style="font-size:13px;color:#6C7891">Northline — facture n° 2214 — 30 paires premium</p>',
        lignes:[
          {label:"Prix catalogue HT (avant remise)", champ:"cat"},
          {label:"Remise contractuelle 8 %", champ:"rem"},
          {label:"Net HT", valeur:"3 864,00", total:true},
          {label:"TVA 20 %", valeur:"772,80"},
          {label:"Total TTC", champ:"ttc", total:true}
        ],
        champs:[
          {id:"cat", label:"Prix catalogue HT", reponse:4200, tol:1,
           expl:{t:"On divise, on ne multiplie pas", p:"Le net payé représente 92 % du catalogue, puisqu'on a retiré 8 %. Pour retrouver le tout à partir de 92 %, on divise par 0,92.", ex:"3 864 ÷ (1 − 0,08) = 3 864 ÷ 0,92 = 4 200 €. Vérification : 4 200 × 0,92 = 3 864 ✓"}},
          {id:"rem", label:"Montant de la remise", reponse:336, tol:0.5,
           expl:{t:"Une remise se calcule sur le catalogue", p:"Le montant de la remise, c'est le prix catalogue multiplié par le pourcentage. Pas le net payé.", ex:"4 200 × (8 ÷ 100) = 4 200 × 0,08 = 336 €. Autre vérification : 4 200 − 3 864 = 336 ✓"}},
          {id:"ttc", label:"Total TTC", reponse:4636.8, tol:1,
           expl:{t:"Hors taxes plus taxe", p:"Le TTC, c'est le net hors taxes auquel on ajoute la TVA. On peut aussi le calculer d'un coup en multipliant par 1,20.", ex:"3 864 + 772,80 = 4 636,80 €. Ou : 3 864 × 1,20 = 4 636,80 €."}}
        ],
        note:"Contrat Northline, article 4 : remise de 8 % sur l'intégralité du catalogue.",
        conclusion:"Voilà à quoi ressemble une facture <b>correcte</b> : le prix catalogue, la remise retirée, puis la TVA ajoutée. Coût réel de la paire : 3 864 ÷ 30 = <b>128,80 € HT</b>. Retenez cette tête de facture — vous allez en voir d'autres.",
        debloque:[]
      },
      outil:"coef", candidats:["coef","tx-marque","tx-marge","avant-aug"],
      reponse:1.86, tol:0.02, unite:"",
      debloque:[],
      reaction:"1,86 ? Mais je croyais être à 2 ! Ça veut dire que je vends moins cher que ce que je pense depuis deux ans ?",
      faux:{
        "tx-marque":{t:"Ce n'est pas un pourcentage", p:"Yanis parle du nombre par lequel il multiplie ses achats. C'est un coefficient, pas un taux.", ex:"« J'achète 100, je vends 200 » : le nombre en question est 2."},
        "tx-marge":{t:"Ce n'est pas un pourcentage", p:"Le taux de marge donne un résultat en %. Ici on cherche un multiplicateur.", ex:"On veut comparer à la règle de Yanis, qui est 2,00."},
        "avant-aug":{t:"Ce n'est pas une conversion", p:"Retrouver un montant avant augmentation sert à passer du TTC au HT. Ici on compare un prix de vente à un prix d'achat.", ex:"Le coefficient met en rapport deux prix, il ne convertit pas une taxe."}
      },
      pieges:[
        {val:1.71, t:"Le prix catalogue a été utilisé", p:"1,71, c'est ce qu'on obtient avec le prix catalogue (140 €). Mais Yanis paie 128,80 € grâce à la remise : c'est ce coût réel qui compte.", ex:"240 ÷ 128,80 = 1,86, alors que 240 ÷ 140 = 1,71."},
        {val:1.55, t:"Le prix de vente a été converti en HT", p:"Le coefficient multiplicateur se calcule avec le prix de vente TTC, pas HT. C'est une exception à retenir : achat en HT, vente en TTC.", ex:"240 € TTC ÷ 128,80 € HT = 1,86."},
        {val:2, t:"C'est la règle, pas la réalité", p:"2,00, c'est ce que Yanis croit appliquer. La mission consiste justement à vérifier ce qu'il fait vraiment.", ex:"S'il était à 2,00, la paire serait affichée 257,60 € et non 240 €."}
      ],
      fiche:{titre:"Le coefficient multiplicateur", f:"Prix de vente TTC ÷ Coût d'achat HT", txt:"Le nombre qui transforme directement un prix d'achat en étiquette de magasin. Attention à l'exception : l'achat est en HT, la vente en TTC.", ex:"240 € TTC ÷ 128,80 € HT = 1,86, alors que la règle de Yanis est 2,00."},
      pouces:[
        {cout:1, txt:"Le prix affiché est sur « La paire premium ». Le coût réel d'une paire est en bas de la facture reconstituée."},
        {cout:2, txt:"240 € TTC au numérateur, 128,80 € HT au dénominateur. On ne convertit rien."},
        {cout:4, txt:"240 ÷ 128,80 = 1,86."}
      ]
    },

    /* ── ACTE 4 : confronter le commercial ── */
    {
      id:"v5", ic:"🔍", nom:"Le récapitulatif", action:"Confronter Northline",
      demande:"M. Berthier affirme que la remise est appliquée automatiquement sur toutes les factures. Une pièce du dossier dit le contraire.",
      boussole:"Vous savez maintenant reconnaître une facture correcte : le net payé doit être <b>inférieur</b> au catalogue. Cherchez celles où les deux colonnes sont identiques.",
      epreuve:{
        type:"temoin",
        titre:"Une affirmation qui ne tient pas",
        consigne:"M. Berthier vous a dit ceci au téléphone. Quelle pièce le contredit ?",
        declaration:{qui:"M. Berthier, commercial Northline", txt:"« Contrat cadre, 8 % sur l'ensemble du catalogue. C'est appliqué automatiquement, sur toutes ses factures, depuis la signature. »"},
        choix:[
          {t:"Le récapitulatif des cinq factures du semestre", bon:true,
           r:"Sur les factures d'avril (4 600 €) et de mai (3 150 €), le net payé est identique au prix catalogue. Aucune remise n'a été retirée. Les trois autres sont correctes. Le changement de logiciel de mars a fait sauter le paramétrage — et personne ne s'en est aperçu, puisque Yanis ne regarde jamais ses factures."},
          {t:"Le contrat Northline", bon:false,
           r:"Il confirme au contraire ce que dit M. Berthier : 8 % sur tout le catalogue. Le contrat n'est pas le problème — c'est son application qui l'est. Pour le prouver, il faut regarder les factures elles-mêmes."},
          {t:"La facture n° 2214 reconstituée", bon:false,
           r:"Celle-là est parfaitement correcte : 4 200 de catalogue, 336 de remise, 3 864 net. Elle vous a appris à quoi ressemble une bonne facture, mais elle ne contredit personne."},
          {t:"Les notes de Yanis", bon:false,
           r:"Elles vous ont servi à ouvrir la caisse. Elles ne disent rien des relations avec le fournisseur."}
        ],
        reussite:{titre:"Deux factures sur cinq", txt:"Avril et mai sont passées au prix fort. Ce n'est pas de la malhonnêteté : une migration de logiciel en mars, un paramétrage perdu, et un client qui ne vérifie jamais. Reste à chiffrer ce que Yanis peut réclamer."}
      },
      outil:"reduc", candidats:["reduc","avant-remise","apres-remise","part"],
      reponse:620, tol:0, unite:"€",
      debloque:[],
      reaction:"620 € ! Et sur un semestre seulement. Je rappelle Berthier tout de suite. Et je vais me mettre à ouvrir mes factures, promis.",
      faux:{
        "avant-remise":{t:"Le catalogue est déjà connu", p:"Retrouver un montant avant remise sert quand on ne connaît que le prix payé. Ici le récapitulatif donne les deux colonnes.", ex:"On cherche combien vaut la remise, pas d'où elle part."},
        "apres-remise":{t:"Ce serait le prix à payer", p:"Cette formule donnerait le montant que Yanis aurait dû régler. Ce qu'on veut, c'est la différence : ce qu'il a payé en trop.", ex:"On cherche le montant de la remise oubliée, pas le prix corrigé."},
        "part":{t:"Aucune part ici", p:"On ne cherche pas quel poids représente quelque chose dans un total, mais un montant en euros.", ex:"8 % appliqués à un montant, ça donne des euros."}
      },
      pieges:[
        {val:368, t:"Une seule facture a été comptée", p:"368 €, c'est la remise oubliée sur la seule facture d'avril. Celle de mai est également concernée.", ex:"4 600 × 0,08 = 368, et 3 150 × 0,08 = 252. Total : 620 €."},
        {val:252, t:"Une seule facture a été comptée", p:"252 €, c'est la remise oubliée sur mai. Il faut y ajouter celle d'avril.", ex:"368 + 252 = 620 €."},
        {val:1252, t:"Les factures correctes ont été incluses", p:"Trois factures sur cinq ont bien reçu leur remise : janvier, février et juin. On ne réclame que sur avril et mai.", ex:"Seules les lignes où net payé = catalogue posent problème."}
      ],
      fiche:{titre:"Le montant d'une remise", f:"Montant × (% ÷ 100)", txt:"Donne la remise en euros, pas le prix final. Sert aussi à vérifier qu'une remise a bien été appliquée : si le net payé égale le catalogue, elle a sauté.", ex:"(4 600 + 3 150) × 0,08 = 7 750 × 0,08 = 620 €."},
      pouces:[
        {cout:1, txt:"Repérez d'abord les factures où le net payé est identique au catalogue. Il y en a deux."},
        {cout:2, txt:"Additionnez leurs prix catalogue (4 600 + 3 150), puis appliquez les 8 %."},
        {cout:4, txt:"7 750 × 0,08 = 620 €."}
      ]
    }
  ],

  rapport:[
    {
      q:"Yanis vend 15 % de plus mais ne gagne pas plus. Que lui expliquez-vous ?",
      choix:[
        {t:"Ses charges ont augmenté au même rythme que ses ventes.", bon:false, r:"Rien ne le montre. Le loyer est stable, il n'a pas embauché. Le problème n'est pas dans les charges, il est sur chaque produit vendu."},
        {t:"Sa gamme principale est celle qui rapporte le moins : les sneakers font 70 % des ventes mais seulement 30 % de marque, contre 60 % sur le textile.", bon:true, r:"Exactement. Vendre plus d'un produit peu rentable fait monter le chiffre d'affaires sans faire monter le gain. C'est pour ça qu'on ne juge jamais un magasin sur son seul chiffre d'affaires."},
        {t:"Le fournisseur lui vend trop cher.", bon:false, r:"C'est vrai sur deux factures, et il faut les réclamer. Mais 620 € sur un semestre n'explique pas à eux seuls le décalage entre les ventes et le gain."},
        {t:"Il ne vend pas assez cher ses accessoires.", bon:false, r:"Au contraire : accessoires et textile sont à 60 % de marque, ce qui est très correct. Ce sont ses meilleurs produits, et c'est justement là qu'il ne pousse pas."}
      ]
    },
    {
      q:"Yanis croit appliquer un coefficient de 2. En réalité il est à 1,86 sur ses paires premium. Pourquoi est-ce important ?",
      choix:[
        {t:"Parce qu'un coefficient de 2 est une règle obligatoire dans le commerce.", bon:false, r:"Non, aucune règle n'impose un coefficient. Ce qui compte, c'est que Yanis pilote sans savoir où il en est : il croit une chose et en fait une autre."},
        {t:"Parce qu'il fixe ses prix au feeling en croyant suivre une règle, et que l'écart lui coûte de l'argent sur chaque paire vendue.", bon:true, r:"Oui. À 2,00, la paire serait affichée 257,60 € au lieu de 240 €. Sur trente paires, l'écart n'est pas anodin — et surtout, Yanis ne le sait pas. On ne corrige pas ce qu'on ne mesure pas."},
        {t:"Parce que ses concurrents appliquent tous 2.", bon:false, r:"On n'en sait rien, et ce n'est pas le sujet. Le problème est interne : un écart entre ce qu'il croit faire et ce qu'il fait."},
        {t:"Parce que le coefficient doit toujours se calculer en HT des deux côtés.", bon:false, r:"Non, c'est même l'inverse, et c'est le piège classique : le coefficient multiplicateur met en rapport un prix de vente TTC et un coût d'achat HT."}
      ]
    },
    {
      q:"Que recommandez-vous à Yanis, dans l'ordre ?",
      choix:[
        {t:"Arrêter les sneakers et se concentrer sur le textile, qui rapporte le double.", bon:false, r:"Non. Les sneakers font entrer les clients dans le magasin — Inès est claire là-dessus. On ne supprime pas ce qui attire, on l'utilise mieux."},
        {t:"Réclamer les 620 €, corriger ses prix de vente, et pousser le textile et les accessoires auprès des clients venus pour des sneakers.", bon:true, r:"Oui, et dans cet ordre : les 620 € sont récupérables tout de suite et sans risque. Les prix se réajustent ensuite, avec prudence. Et la vraie piste de croissance est là : faire ressortir chaque client sneakers avec une casquette ou un t-shirt à 60 % de marque."},
        {t:"Augmenter tous les prix de 15 % pour compenser.", bon:false, r:"Brutal et risqué. Rien ne dit que la clientèle suivra, et ça ne corrige aucune des deux causes réelles."},
        {t:"Changer de fournisseur.", bon:false, r:"L'erreur vient d'une migration de logiciel, pas d'une malhonnêteté. Northline applique bien 8 %, et trois factures sur cinq sont correctes. Un appel suffit."}
      ]
    }
  ],

  lexique:[
    {terme:"Hors taxes (HT)", def:"Le prix sans la TVA. C'est celui qui compte pour l'entreprise, parce que la TVA n'est pas pour elle : elle la collecte et la reverse à l'État.", ex:"600 € TTC avec 20 % de TVA : 600 ÷ 1,20 = 500 € HT."},
    {terme:"Toutes taxes comprises (TTC)", def:"Le prix payé par le client, TVA incluse. C'est celui affiché en magasin.", ex:"500 € HT × 1,20 = 600 € TTC."},
    {terme:"Pourcentage d'évolution", def:"De combien une valeur a monté ou baissé entre deux dates. On divise toujours par la valeur de DÉPART.", ex:"De 180 000 à 207 000 : (207 000 − 180 000) ÷ 180 000 × 100 = +15 %."},
    {terme:"Pourcentage de part", def:"Quelle place occupe un morceau dans un total. Sert à savoir qui pèse le plus.", ex:"144 900 sur 207 000 : 70 % des ventes."},
    {terme:"Remise", def:"Une réduction accordée sur un prix catalogue. Pour retrouver le prix de départ à partir du prix payé, on divise — on ne multiplie pas.", ex:"Payé 3 864 € avec 8 % de remise : 3 864 ÷ 0,92 = 4 200 € au catalogue."},
    {terme:"Marge commerciale", def:"Ce qu'on gagne en euros sur une vente : prix de vente moins prix d'achat. Les deux doivent être hors taxes.", ex:"Vendu 750 € HT, acheté 500 € HT : 250 € de marge."},
    {terme:"Taux de marque", def:"Sur 100 € encaissés, ce qui reste après avoir payé le fournisseur. On divise par le prix de VENTE.", ex:"Marge de 30 € sur 100 € de vente : 30 %."},
    {terme:"Taux de marge", def:"Ce qu'on gagne pour 100 € dépensés chez le fournisseur. On divise par le prix d'ACHAT. Ce n'est pas la même chose que le taux de marque.", ex:"Même produit : 30 € gagnés sur 70 € dépensés, soit 43 %."},
    {terme:"Coefficient multiplicateur", def:"Le nombre par lequel on multiplie le prix d'achat pour obtenir directement l'étiquette. Exception à retenir : achat en HT, vente en TTC.", ex:"128,80 € HT × 1,86 = 240 € TTC."}
  ]
};
