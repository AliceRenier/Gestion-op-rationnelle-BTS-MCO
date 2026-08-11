/* ════════════════════════════════════════════════════════════
   MISSION GO-02 — Le Fournil de Sophie
   Niveau moyen : les chiffres ne sont pas donnés, il faut les
   fabriquer. Quatre actes, une épreuve avant chaque calcul.
   ════════════════════════════════════════════════════════════ */
window.H5P_PATH = null;

window.MISSION = {
  ref:"M-02",
  enseigne:"Le Fournil de Sophie",
  sujet:"Marges · Bilan fonctionnel",
  chapitres:["Analyse financière","Marges"],
  budgetQuestions:6,

  role:"Vous êtes consultant junior au cabinet <b>ORIENS</b>. Sophie Vasseur vous reçoit chez elle : elle sort de huit mois d'arrêt et ne reconnaît plus ses chiffres.",
  situation:`<p><b>Le Fournil de Sophie</b>, boulangerie-pâtisserie avec salon de thé. Quatre salariés. En février, Sophie se casse la jambe. Son second, <b>Marc</b>, tient la boutique pendant huit mois.</p>
    <p>Elle revient en novembre. Bonne surprise : <b>les ventes ont augmenté de 5 %</b>. Mauvaise surprise : la banque vient de refuser le prêt pour le nouveau four.</p>
    <p><b>« On n'a jamais autant vendu et je n'ai jamais eu aussi peu d'argent. Expliquez-moi. »</b></p>
    <p style="color:#8FA3C4;font-size:14px">Marc est présent. Il vous salue à peine.</p>`,
  enjeux:[{n:"4",t:"salariés"},{n:"−5 %",t:"de marge en 8 mois"},{n:"6",t:"questions à poser"}],

  plan:[
    "Reconstituer le bilan à partir des documents en vrac",
    "Mesurer le matelas de sécurité (FRNG)",
    "Mesurer ce que le fonctionnement immobilise (BFR)",
    "Comparer la marge de cette année à celle d'avant",
    "Identifier ce qui a changé pendant l'absence de Sophie"
  ],

  /* ── Le déroulé, en quatre actes ── */
  actes:[
    {titre:"Le carton du comptable", serrures:["v1"],
     intro:"Sophie pose un carton sur la table. « Le comptable a tout mis là-dedans. Moi je n'y comprends rien. » Rien n'est classé, rien n'est totalisé."},
    {titre:"La lettre de la banque", serrures:["v2"],
     intro:"Une lettre recommandée, quatre lignes de refus, et un vocabulaire que personne dans la boutique ne comprend. Le dossier de la banque est verrouillé par un code."},
    {titre:"La facture abîmée", serrures:["v3"],
     intro:"Dans le carton, une facture tachée de graisse. Les montants sont illisibles. Le nom du fournisseur, lui, se lit très bien — et ce n'est pas celui que Sophie connaît."},
    {titre:"Ce que Marc n'a pas dit", serrures:["v4"],
     intro:"Vous avez maintenant les chiffres. Reste à comprendre pourquoi. Et Marc vous a affirmé quelque chose qui ne tient pas."}
  ],

  personnages:[
    {id:"marc", ic:"👨‍🍳", nom:"Marc", role:"Second de Sophie, a tenu la boutique",
     intro:"Il essuie le plan de travail sans s'arrêter. Il ne vous regarde pas.",
     questions:[
       {q:"Comment avez-vous tenu la boutique pendant ces huit mois ?",
        r:"« J'ai fait tourner. Quatre heures du matin tous les jours, sans un dimanche. Les clients sont restés, c'est ça qui compte, non ? »"},
       {q:"Avez-vous changé quelque chose à la carte ou aux prix ?", cle:true,
        r:"« Non. J'ai gardé exactement la carte de Sophie. Je n'ai touché à rien. » (Il pose son chiffon.)"},
       {q:"Une enseigne a ouvert à côté. Ça vous a inquiété ?",
        r:"« La chaîne, là ? Deux cents mètres. Ils cassent tout. Croissant à 1 €. Moi j'avais quatre salariés à garder. » Il s'arrête net."}
     ]},
    {id:"sophie", ic:"📞", nom:"Sophie Vasseur", role:"Gérante, de retour d'arrêt",
     questions:[
       {q:"À quoi ressemblaient vos chiffres avant votre accident ?", cle:true, debloque:["resultat-n1"],
        r:"« Je gardais 65 centimes sur chaque euro encaissé. C'est la norme dans le métier, on achète de la farine et on vend du pain. »",
        },
       {q:"Vous faisiez confiance à Marc ?",
        r:"« Complètement. Il est là depuis six ans. C'est lui qui m'a appris la brioche, en fait. » (Un silence.) « Il ne m'a pas appelée une seule fois pour un problème. Pas une. »"}
     ]},
    {id:"trezel", ic:"🚚", nom:"M. Trézel", role:"Fournisseur, au téléphone",
     questions:[
       {q:"Depuis quand livrez-vous Le Fournil ?", cle:true,
        r:"« Depuis mars. C'est le jeune qui m'a appelé. Il voulait du haut de gamme, du beurre AOP, de la farine de meule. Je lui ai dit que c'était plus cher. Il a dit qu'il assumait. »"},
       {q:"Combien coûtent vos produits par rapport au marché ?",
        r:"« 1,80 € l'unité contre 1,50 chez le fournisseur classique. C'est de la qualité, ça se paie. »"}
     ]},
    {id:"kessler", ic:"🏦", nom:"Mme Kessler", role:"Chargée d'affaires à la banque",
     questions:[
       {q:"Pourquoi avoir refusé le prêt ?",
        r:"« Le dossier ne passe pas. Le fonds de roulement est négatif et la rentabilité s'est effondrée en un exercice. Je ne peux pas financer un four dans ces conditions. »"},
       {q:"L'entreprise est-elle en danger immédiat ?",
        r:"« Non, et c'est ce qui m'étonne. Le compte est créditeur. Dans ce métier, les clients paient comptant et les fournisseurs à trente jours : le fonctionnement dégage de l'argent. C'est ce qui les tient debout. »"}
     ]},
    {id:"lea", ic:"🧁", nom:"Léa", role:"Apprentie, deuxième année",
     questions:[
       {q:"Vous avez remarqué des changements au printemps ?", cle:true, debloque:["ardoise"],
        r:"« Ben, l'ardoise. Marc l'a refaite en mars, quand les autres ont ouvert. Il a dit que sinon on perdait tout le monde. » Elle hésite. « Il m'a demandé de ne pas en parler à Sophie. »"},
       {q:"Comment ça se passait avec Marc ?",
        r:"« Il dormait ici, je crois. Il avait peur. Un jour il m'a dit : si je perds la boutique de Sophie, je ne me le pardonne pas. »"}
     ]},
  ],

  pieces:[
    {id:"carton", ic:"📦", titre:"Le carton", type:"En vrac", chap:"Contexte", debloc:null, html:`
      <p>Des liasses, des relevés, des factures. Rien n'est classé.</p>
      <p>Un mot du comptable, agrafé sur le dessus : <i>« Sophie, je pars en congé trois semaines. Les postes sont tous là mais je n'ai pas eu le temps de faire le bilan fonctionnel. Bon courage. »</i></p>
      <p style="color:#6C7891;font-size:13.5px">C'est à vous de le reconstituer.</p>`},

    {id:"bilan-fait", ic:"🧩", titre:"Bilan reconstitué", type:"Votre travail", chap:"Analyse financière", debloc:"v1", html:`
      <p style="font-size:13.5px;color:#6C7891">Au 31/12/N, tel que vous l'avez classé.</p>
      <table class="reg">
        <tr><th>Ce qui dure (emplois stables)</th><th></th></tr>
        <tr><td>Fonds de commerce</td><td>95 000</td></tr>
        <tr><td>Four, pétrin, vitrines</td><td>125 000</td></tr>
        <tr><td>Agencement du salon de thé</td><td>30 000</td></tr>
        <tr class="total"><td>Total</td><td>250 000</td></tr>
      </table>
      <table class="reg">
        <tr><th>L'argent qui reste longtemps (ressources stables)</th><th></th></tr>
        <tr><td>Apports de Sophie et bénéfices gardés</td><td>88 000</td></tr>
        <tr><td>Usure déjà comptée sur le matériel</td><td>92 000</td></tr>
        <tr><td>Emprunt bancaire (plus d'un an)</td><td>62 000</td></tr>
        <tr class="total"><td>Total</td><td>242 000</td></tr>
      </table>
      <table class="reg">
        <tr><th>Ce que le quotidien immobilise</th><th></th></tr>
        <tr><td>Farine, beurre, chocolat en réserve</td><td>14 000</td></tr>
        <tr><td>Comptes entreprises non réglés</td><td>9 000</td></tr>
        <tr class="total"><td>Total</td><td>23 000</td></tr>
      </table>
      <table class="reg">
        <tr><th>Ce que le quotidien permet de différer</th><th></th></tr>
        <tr><td>Fournisseurs à régler</td><td>31 000</td></tr>
        <tr><td>Impôts et charges sociales</td><td>12 000</td></tr>
        <tr class="total"><td>Total</td><td>43 000</td></tr>
      </table>
      <table class="reg">
        <tr><th>À la banque</th><th></th></tr>
        <tr><td>Argent disponible</td><td>12 000</td></tr>
        <tr><td>Découvert utilisé</td><td>0</td></tr>
      </table>`},

    {id:"resultat", ic:"🧾", titre:"L'année de Marc", type:"Compte de résultat N", chap:"Marges", debloc:null, html:`
      <table class="reg">
        <tr><td>Ventes hors taxes</td><td>420 000</td></tr>
        <tr><td>Farine, beurre, chocolat consommés</td><td>218 400</td></tr>
        <tr class="total"><td>Marge commerciale</td><td>201 600</td></tr>
        <tr class="sous"><td>Loyer, énergie, entretien</td><td>58 000</td></tr>
        <tr class="sous"><td>Salaires et charges</td><td>132 000</td></tr>
        <tr class="sous"><td>Usure du matériel</td><td>18 000</td></tr>
        <tr class="total"><td>Résultat de l'exercice</td><td>−6 400</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">TVA sur les produits alimentaires : 5,5 %.</p>`},

    {id:"resultat-n1", ic:"📊", titre:"L'année de Sophie", type:"Compte de résultat N−1", chap:"Marges", debloc:null, html:`
      <table class="reg">
        <tr><td>Ventes hors taxes</td><td>400 000</td></tr>
        <tr><td>Farine, beurre, chocolat consommés</td><td>140 000</td></tr>
        <tr class="total"><td>Marge commerciale</td><td>260 000</td></tr>
        <tr class="total"><td>Résultat de l'exercice</td><td>+31 200</td></tr>
      </table>
      <p><b>Moins de ventes qu'aujourd'hui, et pourtant un bénéfice.</b></p>`},

    {id:"courrier", ic:"✉️", titre:"Lettre de la banque", type:"Recommandé", chap:"Analyse financière", debloc:"v1", html:`
      <p style="font-size:13.5px;color:#6C7891">Crédit Régional — service engagements</p>
      <p class="manuscrit">« Madame, après examen, nous ne pouvons donner suite à votre demande de financement. Nous relevons un <b>fonds de roulement négatif</b>, compensé par un <b>besoin en fonds de roulement négatif</b>. La dégradation du <b>taux de marque</b> sur l'exercice et l'insuffisance de la <b>capacité d'autofinancement</b> ne permettent pas d'envisager un nouvel engagement. »</p>
      <p style="font-size:13.5px;color:#6C7891">Sophie, en marge, au crayon : « quelqu'un peut me traduire ça ? »</p>`},

    {id:"dossier-banque", ic:"🗂️", titre:"Dossier de la banque", type:"Analyse interne", chap:"Analyse financière", debloc:"v2", html:`
      <p class="manuscrit">Note interne : « Affaire saine sur le plan du cycle — encaissements comptant, fournisseurs à 30 jours. C'est ce qui maintient la trésorerie à flot malgré un haut de bilan déséquilibré. Le problème n'est pas la structure, il est dans la marge. Voir l'évolution du coût matières. »</p>`},

    {id:"facture", ic:"🧮", titre:"Facture tachée", type:"Pièce comptable", chap:"Marges", debloc:"v2", html:`
      <p style="font-size:13.5px;color:#6C7891">Maison Trézel — reconstituée par vos soins.</p>
      <table class="reg">
        <tr><td>Farines de meule et beurre AOP — 1 200 unités</td><td></td></tr>
        <tr><td>Prix unitaire HT</td><td>1,80</td></tr>
        <tr class="total"><td>Total HT</td><td>2 160,00</td></tr>
        <tr><td>TVA 5,5 %</td><td>118,80</td></tr>
        <tr class="total"><td>Total TTC</td><td>2 278,80</td></tr>
      </table>
      <p>L'ancien fournisseur facturait la même unité <b>1,50 € HT</b>. Soit <b>+20 %</b> sur chaque matière première.</p>`},

    {id:"tickets", ic:"🧾", titre:"Deux tickets de caisse", type:"Pièces", chap:"Marges", debloc:"v3", html:`
      <table class="reg">
        <tr><th>12 mars — avant</th><th></th></tr>
        <tr><td>Croissant</td><td>1,30</td></tr>
        <tr><td>Pain au chocolat</td><td>1,40</td></tr>
        <tr><td>Formule salon de thé</td><td>8,90</td></tr>
      </table>
      <table class="reg">
        <tr><th>3 novembre — après</th><th></th></tr>
        <tr><td>Croissant</td><td>1,15</td></tr>
        <tr><td>Pain au chocolat</td><td>1,25</td></tr>
        <tr><td>Formule salon de thé</td><td>7,90</td></tr>
      </table>`},

    {id:"ardoise", ic:"🖊️", titre:"L'ardoise de la vitrine", type:"Photo", chap:"Marges", debloc:null, html:`
      <p>Une ardoise noire, écriture à la craie, en vitrine :</p>
      <p class="manuscrit">« NOS PRIX BAISSENT — croissant 1,15 € — pain au chocolat 1,25 € — formule 7,90 € — <b>on reste moins cher que la chaîne</b> »</p>
      <p style="font-size:13.5px;color:#6C7891">Léa précise qu'elle a été refaite en mars.</p>`},

    {id:"planning", ic:"📅", titre:"Planning des équipes", type:"Document interne", chap:"—", debloc:null, html:`
      <p>Quatre salariés, 35 heures. Aucune embauche, aucun départ sur l'exercice.</p>
      <p>Marc apparaît sur 47 dimanches consécutifs.</p>`},

    {id:"devis-four", ic:"🔥", titre:"Devis du four", type:"Devis", chap:"—", debloc:null, html:`
      <p>Four à sole électrique, pose comprise : <b>34 000 € HT</b>. C'est ce prêt que la banque vient de refuser.</p>
      <p>Sophie : « Le vieux tient encore un an, peut-être deux. »</p>`}
  ],

  serrures:[
    /* ── ACTE 1 : classer pour faire exister les totaux ── */
    {
      id:"v1", ic:"🧩", nom:"Le carton à classer", action:"Ouvrir le carton",
      demande:"Rien n'est totalisé. Tant que les postes ne sont pas rangés dans les bonnes masses, aucun calcul n'est possible.",
      boussole:"Une seule question à se poser pour chaque poste : <b>est-ce que ça dure des années, ou est-ce que ça tourne toutes les semaines ?</b> Puis : est-ce de l'argent qui sort, ou de l'argent qu'on nous laisse ?",
      epreuve:{
        type:"classement",
        titre:"Reconstituer le bilan",
        consigne:"Un poste après l'autre. Rangez-le dans la masse à laquelle il appartient. Les totaux se feront tout seuls.",
        categories:[
          {id:"es", nom:"Ce qui dure", aide:"Le matériel et les investissements qui servent des années"},
          {id:"rs", nom:"L'argent qui reste longtemps", aide:"Apports, usure déjà comptée, emprunts à plus d'un an"},
          {id:"ace", nom:"Ce que le quotidien immobilise", aide:"Marchandises en réserve, clients qui n'ont pas payé"},
          {id:"pce", nom:"Ce que le quotidien laisse différer", aide:"Fournisseurs, impôts et charges à régler"}
        ],
        items:[
          {t:"Fonds de commerce", val:95000, cat:"es",
           expl:{t:"C'est un investissement durable", p:"Le fonds de commerce, c'est le droit d'exploiter à cet endroit : la clientèle, l'enseigne, le bail. On ne le rachète pas chaque semaine.", ex:"Comme les murs : ça sert des années, donc ça dure."}},
          {t:"Four, pétrin, vitrines", val:125000, cat:"es",
           expl:{t:"Du matériel qui sert des années", p:"Un four de boulangerie dure quinze ans. C'est l'exemple type de l'investissement durable.", ex:"Ce n'est pas de la farine qu'on rachète le lundi."}},
          {t:"Agencement du salon de thé", val:30000, cat:"es",
           expl:{t:"Des travaux, donc du durable", p:"Les banquettes, le comptoir, l'électricité du salon : c'est posé une fois pour toutes.", ex:"On ne refait pas la déco toutes les semaines."}},
          {t:"Apports de Sophie et bénéfices gardés", val:88000, cat:"rs",
           expl:{t:"C'est de l'argent qui reste", p:"Ce que la gérante a mis, plus ce qu'elle n'a pas sorti de l'entreprise. Personne ne va le réclamer demain.", ex:"C'est l'argent le plus stable qui existe dans une entreprise."}},
          {t:"Usure déjà comptée sur le matériel", val:92000, cat:"rs",
           expl:{t:"Piège classique", p:"Les amortissements ressemblent à une perte, mais l'argent correspondant n'est jamais sorti de l'entreprise. Il est donc resté disponible.", ex:"On a compté 92 000 € d'usure sans jamais faire de chèque de 92 000 €. Cet argent est là."}},
          {t:"Emprunt bancaire (plus d'un an)", val:62000, cat:"rs",
           expl:{t:"Une dette, mais durable", p:"On la remboursera sur plusieurs années : la banque nous laisse cet argent longtemps. C'est donc une ressource stable.", ex:"À la différence d'une facture fournisseur qu'il faut payer dans trente jours."}},
          {t:"Farine, beurre, chocolat en réserve", val:14000, cat:"ace",
           expl:{t:"Ça tourne, ça ne dure pas", p:"Le stock est consommé et racheté en permanence. C'est de l'argent immobilisé par le fonctionnement quotidien.", ex:"Le beurre du mois prochain n'est pas encore acheté : c'est un cycle."}},
          {t:"Comptes entreprises non réglés", val:9000, cat:"ace",
           expl:{t:"De l'argent parti mais pas encore rentré", p:"Les entreprises qui commandent des plateaux ont consommé mais pas payé. L'argent est dehors, il reviendra bientôt.", ex:"C'est du quotidien qui immobilise de la trésorerie."}},
          {t:"Fournisseurs à régler", val:31000, cat:"pce",
           expl:{t:"C'est eux qui nous financent", p:"Tant qu'on n'a pas payé le fournisseur, on garde son argent. Ça allège ce que le fonctionnement nous coûte.", ex:"Trente jours de crédit gratuit, c'est trente jours de trésorerie gagnée."}},
          {t:"Impôts et charges sociales", val:12000, cat:"pce",
           expl:{t:"Même logique que les fournisseurs", p:"L'URSSAF et le fisc attendent aussi. Cet argent est encore dans l'entreprise, il allège le besoin.", ex:"Ce n'est pas une ressource durable : ça se paie dans le trimestre."}}
        ],
        debloque:["bilan-fait"],
        reussite:{titre:"Le bilan existe enfin", txt:"Vous venez de faire ce que le comptable n'avait pas eu le temps de faire. Les quatre masses sont posées, les totaux calculés. Le bilan reconstitué est désormais dans vos documents — vous pouvez le consulter quand vous voulez."}
      },
      outil:"frng", candidats:["frng","bfre","tn","caf","marge"],
      reponse:-8000, tol:0, unite:"€",
      debloque:["courrier"],
      reaction:"Négatif ? Ça veut dire que mon four n'est pas payé, c'est ça ? Mais j'ai toujours de l'argent sur le compte, je ne comprends pas.",
      faux:{
        "bfre":{t:"Pas cette masse-ci", p:"Le BFR compare ce que le quotidien immobilise à ce qu'il laisse différer. Ici on regarde le haut du bilan : le durable contre le durable.", ex:"Le four contre l'emprunt, pas la farine contre le fournisseur."},
        "tn":{t:"C'est la conclusion, pas l'étape", p:"La trésorerie se déduit des deux autres grandeurs. Il en manque encore une.", ex:"On ne peut pas faire une différence quand un des deux termes est inconnu."},
        "caf":{t:"Ce n'est pas dans le bilan", p:"La CAF mesure l'argent fabriqué sur l'année, elle se lit dans le compte de résultat. Ici on regarde la photo du 31 décembre.", ex:"Le bilan, c'est une photo. Le compte de résultat, c'est un film."},
        "marge":{t:"Ça viendra plus tard", p:"La marge dira ce qui s'est passé sur l'année. D'abord il faut mesurer la structure.", ex:"On regarde d'abord si la maison tient debout, ensuite ce qui se passe dedans."}
      },
      pieges:[
        {val:8000, t:"Le signe est inversé", p:"242 000 de ressources durables pour 250 000 de matériel durable : il manque 8 000 €. Le résultat est donc négatif.", ex:"J'ai 242 € et j'achète pour 250 € : je suis à −8, pas à +8."},
        {val:-70000, t:"Les amortissements ont été oubliés", p:"L'usure comptée sur le matériel (92 000 €) fait partie des ressources : cet argent n'est jamais sorti.", ex:"88 000 + 92 000 + 62 000 = 242 000 de ressources durables."}
      ],
      fiche:{titre:"Un FRNG négatif", f:"Ressources stables − Emplois stables", txt:"Quand il est négatif, une partie du matériel durable est financée par du court terme. C'est fragile, mais pas mortel : certains commerces vivent très bien ainsi, à condition que le cycle rapporte de l'argent.", ex:"242 000 − 250 000 = −8 000 €."},
      pouces:[
        {cout:1, txt:"Les totaux sont dans la pièce « Bilan reconstitué », celle que vous venez de créer."},
        {cout:2, txt:"242 000 de ressources durables, 250 000 de matériel durable. C'est une soustraction, dans cet ordre."},
        {cout:4, txt:"242 000 − 250 000 = −8 000 €."}
      ]
    },

    /* ── ACTE 2 : comprendre les mots pour ouvrir la porte ── */
    {
      id:"v2", ic:"🔤", nom:"Le dossier de la banque", action:"Traduire la lettre",
      demande:"Le dossier est verrouillé par un code à quatre chiffres. Mme Kessler : <i>« Le code, ce sont les quatre notions de mon courrier. Si vous les comprenez, vous l'aurez. »</i>",
      boussole:"Chaque terme du courrier a une traduction en français courant. Associez-les, et les chiffres tomberont d'eux-mêmes.",
      epreuve:{
        type:"appariement",
        titre:"Traduire le jargon de la banque",
        consigne:"Touchez un terme du courrier, puis la phrase qui dit la même chose en clair. Chaque bonne association livre un chiffre du code.",
        paires:[
          {terme:"Fonds de roulement négatif", chiffre:"4",
           def:"Le matériel de la boulangerie n'est pas entièrement payé par de l'argent qui reste longtemps dans l'entreprise.",
           expl:{t:"Relisez ce que vous venez de calculer", p:"Vous avez trouvé −8 000 € : les ressources durables ne couvrent pas tout le matériel durable.", ex:"242 000 de ressources pour 250 000 de matériel : il manque 8 000."}},
          {terme:"Besoin en fonds de roulement négatif", chiffre:"1",
           def:"Les clients paient tout de suite à la caisse et les fournisseurs attendent trente jours : le fonctionnement rapporte de l'argent au lieu d'en coûter.",
           expl:{t:"Un besoin négatif, c'est une bonne nouvelle", p:"Dans un commerce de bouche, on encaisse avant de payer. Le cycle dégage donc de la trésorerie au lieu d'en absorber.", ex:"Vous vendez le croissant lundi, vous payez la farine le mois suivant."}},
          {terme:"Taux de marque", chiffre:"9",
           def:"Sur 100 € encaissés à la caisse, ce qui reste une fois la farine et le beurre payés.",
           expl:{t:"C'est un pourcentage sur la vente", p:"Le taux de marque rapporte la marge au prix de vente, pas au prix d'achat.", ex:"Croissant vendu 1 €, matières 0,35 € : il reste 65 centimes, soit 65 %."}},
          {terme:"Capacité d'autofinancement", chiffre:"2",
           def:"L'argent que l'activité fabrique en un an et qui pourrait servir à rembourser un nouvel emprunt.",
           expl:{t:"C'est ce qui rassure un banquier", p:"La CAF mesure la capacité à rembourser par ses propres moyens. Sans elle, aucun prêt.", ex:"Résultat + usure comptée : c'est l'argent réellement dégagé."}}
        ],
        debloque:["dossier-banque"],
        reussite:{titre:"Le dossier s'ouvre", txt:"Quatre mots traduits, quatre chiffres. La note interne de la banque est maintenant dans vos documents — et elle vous dit où chercher."}
      },
      outil:"bfre", candidats:["bfre","frng","tn","fou","stock-j"],
      reponse:-20000, tol:0, unite:"€",
      debloque:["facture"],
      reaction:"Négatif aussi ? Mais alors c'est bien ou c'est mal ? Je ne sais plus ce que je dois espérer.",
      faux:{
        "frng":{t:"Déjà mesuré", p:"Le matelas, c'est fait : −8 000 €. On cherche maintenant l'autre grandeur, celle du quotidien.", ex:"Le haut du bilan est derrière nous, on descend."},
        "tn":{t:"Encore un cran trop loin", p:"Il manque une des deux grandeurs pour pouvoir conclure sur la trésorerie.", ex:"−8 000 moins quoi ? C'est ce « quoi » qu'on cherche."},
        "fou":{t:"Un morceau, pas le tout", p:"Le délai fournisseurs explique pourquoi le besoin est négatif, mais il ne le mesure pas.", ex:"Il faut aussi les stocks et les clients dans le calcul."},
        "stock-j":{t:"Trop détaillé pour l'instant", p:"La durée de stockage est un indicateur de détail. On cherche d'abord la grandeur globale, en euros.", ex:"On mesure la masse avant d'en disséquer les postes."}
      },
      pieges:[
        {val:20000, t:"Le signe est inversé", p:"23 000 immobilisés contre 43 000 différés : le fonctionnement rend 20 000 € au lieu d'en réclamer. Le résultat est négatif.", ex:"C'est le cas normal en boulangerie : on encaisse avant de payer."},
        {val:-8000, t:"C'est le FRNG", p:"−8 000 €, c'est le haut du bilan. Ici on travaille sur le bas : stocks, clients, fournisseurs, charges à payer.", ex:"Deux masses différentes, deux calculs différents."},
        {val:-29000, t:"Un poste a été oublié", p:"Les impôts et charges sociales à régler (12 000 €) allègent aussi le besoin : cet argent est encore dans l'entreprise.", ex:"31 000 + 12 000 = 43 000 à retirer."}
      ],
      fiche:{titre:"Un BFR négatif", f:"Actif circulant d'exploitation − Passif circulant d'exploitation", txt:"Quand les clients paient comptant et les fournisseurs à trente jours, le cycle dégage de la trésorerie au lieu d'en consommer. C'est le cas de presque tout le commerce de bouche — et c'est ce qui compense ici un FRNG négatif.", ex:"23 000 − 43 000 = −20 000 €. Trésorerie = −8 000 − (−20 000) = +12 000 €."},
      pouces:[
        {cout:1, txt:"Les deux totaux sont dans le bilan reconstitué. On ne compte ni l'argent disponible ni le découvert."},
        {cout:2, txt:"23 000 d'un côté, 43 000 de l'autre. Le résultat sera négatif, c'est normal ici."},
        {cout:4, txt:"23 000 − 43 000 = −20 000 €."}
      ]
    },

    /* ── ACTE 3 : reconstituer un document abîmé ── */
    {
      id:"v3", ic:"🧾", nom:"La facture Trézel", action:"Reconstituer la facture",
      demande:"Une tache de graisse a effacé les montants. Seule la TVA reste lisible : <b>118,80 €</b>, au taux alimentaire de <b>5,5 %</b>.",
      boussole:"Une TVA, c'est un pourcentage <b>du montant hors taxes</b>. Si vous connaissez la taxe et le taux, vous pouvez remonter au montant de départ.",
      epreuve:{
        type:"document",
        titre:"Retrouver les montants effacés",
        consigne:"Remplissez les cases manquantes. Commencez par le total hors taxes : c'est la seule case que la TVA permet de retrouver directement.",
        entete:'<p style="font-size:13px;color:#6C7891">Maison Trézel — facture n° 4417 — livraison du 18 mars</p>',
        lignes:[
          {label:"Farines de meule et beurre AOP — 1 200 unités", valeur:""},
          {label:"Prix unitaire HT", champ:"pu"},
          {label:"Total HT", champ:"ht", total:true},
          {label:"TVA 5,5 %", valeur:"118,80"},
          {label:"Total TTC", champ:"ttc", total:true}
        ],
        champs:[
          {id:"ht", label:"Total HT", reponse:2160, tol:1,
           expl:{t:"Remontez par la TVA", p:"118,80 € représentent 5,5 % du montant hors taxes. Pour retrouver le tout à partir d'une part, on divise par le taux.", ex:"118,80 ÷ 0,055 = 2 160 €. Vérification : 2 160 × 5,5 % = 118,80 ✓"}},
          {id:"pu", label:"Prix unitaire HT", reponse:1.8, tol:0.02,
           expl:{t:"Un total, une quantité", p:"Le prix unitaire, c'est le total hors taxes réparti sur le nombre d'unités livrées.", ex:"2 160 ÷ 1 200 = 1,80 € l'unité."}},
          {id:"ttc", label:"Total TTC", reponse:2278.8, tol:1,
           expl:{t:"Hors taxes plus taxe", p:"Le TTC est simplement le HT auquel on ajoute la TVA.", ex:"2 160 + 118,80 = 2 278,80 €."}}
        ],
        note:"L'ancien fournisseur facturait la même unité 1,50 € HT.",
        conclusion:"1,80 € contre 1,50 € : <b>+20 % sur chaque matière première</b>. Marc a changé de fournisseur en mars, pour du haut de gamme. Reste à voir ce que ça a fait à la marge.",
        debloque:[]
      },
      outil:"tx-marque", candidats:["tx-marque","tx-marge","coef","marge","rota"],
      reponse:48, tol:0, unite:"%",
      debloque:["tickets"],
      reaction:"48 ? Mais je suis à 65 depuis dix ans ! Il s'est passé quoi dans ma boutique ?",
      faux:{
        "tx-marge":{t:"Attention, ce n'est pas pareil", p:"Le taux de MARGE se calcule sur le prix d'ACHAT. Le taux de MARQUE se calcule sur le prix de VENTE. Sophie parle de ce qu'elle garde sur chaque euro encaissé : c'est donc la vente au dénominateur.", ex:"Croissant vendu 1 €, matières 0,52 € : marge 0,48 ÷ 0,52 = 92 %. Marque 0,48 ÷ 1 = 48 %. Même croissant, deux chiffres."},
        "coef":{t:"Ce n'est pas un pourcentage", p:"Le coefficient multiplicateur donne un nombre comme 1,9, pas un pourcentage.", ex:"On multiplie le prix d'achat par 1,9 pour trouver l'étiquette."},
        "marge":{t:"En euros, pas en pourcentage", p:"La marge commerciale donne 201 600 €. Pour la comparer à l'année d'avant, il faut la ramener aux ventes.", ex:"On compare des pourcentages, pas des euros, quand le chiffre d'affaires change."},
        "rota":{t:"Autre chapitre", p:"La rotation compte le nombre de fois où le stock se renouvelle. Ce n'est pas ce qu'on cherche.", ex:"On cherche ce qui reste sur 100 € encaissés."}
      },
      pieges:[
        {val:92, t:"Marge et marque ont été confondues", p:"92 %, c'est le taux de marge : on a divisé par le coût des matières (218 400). Le taux de marque divise par les ventes (420 000).", ex:"Marque = sur la VENTE, comme le prix marqué sur l'étiquette. Marge = sur l'ACHAT."},
        {val:52, t:"C'est le coût, pas ce qui reste", p:"52 %, c'est la part du prix de vente qui part en matières premières. Ce qu'on garde est l'inverse.", ex:"100 − 52 = 48 % restent dans la caisse."},
        {val:65, t:"C'est le taux de Sophie, pas celui de l'année", p:"65 %, c'est ce que Sophie faisait avant son accident. On cherche ce qui s'est passé pendant son absence.", ex:"C'est justement l'écart entre les deux qui nous intéresse."}
      ],
      fiche:{titre:"Le taux de marque, et sa chute", f:"Marge commerciale ÷ Ventes HT × 100", txt:"Il est passé de 65 % à 48 % en un exercice. Deux causes se sont additionnées : des matières payées 20 % plus cher, et des prix de vente baissés. La marge a été prise en tenaille des deux côtés.", ex:"201 600 ÷ 420 000 × 100 = 48 %."},
      pouces:[
        {cout:1, txt:"Marge commerciale et ventes sont toutes les deux sur « L'année de Marc »."},
        {cout:2, txt:"On divise par les VENTES (420 000), pas par le coût des matières."},
        {cout:4, txt:"201 600 ÷ 420 000 × 100 = 48 %."}
      ]
    },

    /* ── ACTE 4 : confronter le témoignage aux pièces ── */
    {
      id:"v4", ic:"🔍", nom:"La déclaration de Marc", action:"Confronter Marc",
      demande:"Marc affirme n'avoir touché à rien. Les matières coûtent 20 % de plus, ce qui n'explique pas à lui seul une chute de 17 points. Il manque une moitié à l'histoire.",
      boussole:"Une marge se fait des deux côtés : ce qu'on paie, et ce qu'on fait payer. Vous avez la preuve du premier côté. Cherchez celle du second.",
      epreuve:{
        type:"temoin",
        titre:"Une phrase qui ne tient pas",
        consigne:"Marc vous a dit ceci. Une pièce du dossier le contredit formellement. Laquelle ?",
        declaration:{qui:"Marc, ce matin", txt:"« Non. J'ai gardé exactement la carte de Sophie. Je n'ai touché à rien. »"},
        choix:[
          {t:"Les deux tickets de caisse, mars et novembre", bon:true,
           r:"Croissant 1,30 € en mars, 1,15 € en novembre. La formule passe de 8,90 € à 7,90 €. Marc a bien baissé les prix, d'environ 12 %. Il ne l'a dit ni à Sophie, ni à vous."},
          {t:"La facture Trézel", bon:false,
           r:"Elle prouve le changement de fournisseur et la hausse du coût — mais Marc ne vous a jamais dit qu'il n'avait pas changé de fournisseur. Sa phrase portait sur les prix de vente."},
          {t:"Le planning des équipes", bon:false,
           r:"Il montre surtout que Marc a travaillé 47 dimanches d'affilée. Ça dit quelque chose de l'homme, rien de sa déclaration."},
          {t:"Le devis du four", bon:false,
           r:"Il concerne un investissement à venir, refusé par la banque. Il n'a aucun rapport avec la carte du magasin."}
        ],
        debloque:["ardoise"],
        reussite:{titre:"Les deux moitiés de l'histoire", txt:"Matières +20 %, prix de vente −12 %. La marge a été écrasée des deux côtés à la fois. Marc a paniqué quand la chaîne a ouvert : il a baissé les prix pour garder les clients, et monté en gamme pour se différencier. Les deux décisions, ensemble, étaient mortelles. Il n'a rien volé. Il n'a rien dit non plus."}
      },
      outil:"tx-marque", candidats:["tx-marque","marge","tx-marge","mcv"],
      reponse:273000, tol:0, unite:"€",
      debloque:[],
      reaction:"273 000… et j'en ai fait 201 600. Il y a 71 400 € qui ont disparu. Sur quatre salaires, c'est presque deux emplois.",
      faux:{
        "marge":{t:"C'est le résultat, pas la méthode", p:"On cherche une marge, oui — mais celle qu'on aurait obtenue avec l'ancien taux. Il faut donc partir du taux, pas des achats de cette année.", ex:"On applique 65 % aux ventes de cette année."},
        "tx-marge":{t:"Le mauvais des deux taux", p:"Sophie a parlé de ce qu'elle gardait sur chaque euro encaissé : c'est un taux de marque, calculé sur les ventes.", ex:"65 centimes gardés sur 1 € encaissé."},
        "mcv":{t:"Autre notion", p:"La marge sur coûts variables sert au seuil de rentabilité. Ici on compare deux marges commerciales.", ex:"On veut savoir combien Sophie aurait gagné à son taux habituel."}
      },
      pieges:[
        {val:71400, t:"C'est l'écart, pas la marge", p:"71 400 €, c'est bien ce qui manque — mais la question porte sur la marge qu'elle aurait faite. L'écart vient après.", ex:"273 000 − 201 600 = 71 400 € de manque à gagner."},
        {val:201600, t:"C'est la marge réelle", p:"201 600 €, c'est ce que Marc a effectivement dégagé. On cherche ce que Sophie aurait fait sur le même chiffre d'affaires.", ex:"Même volume de ventes, ancien taux : 420 000 × 65 %."},
        {val:260000, t:"C'est la marge de l'an dernier", p:"260 000 €, c'est la marge de Sophie sur 400 000 € de ventes. Cette année les ventes sont de 420 000 € : il faut recalculer.", ex:"On raisonne à taux constant, sur le chiffre d'affaires de cette année."}
      ],
      fiche:{titre:"Raisonner à taux constant", f:"Ventes de l'année × Taux de marque d'avant", txt:"Pour mesurer ce qu'une décision a coûté, on applique l'ancien taux au volume actuel. On isole ainsi l'effet du taux, sans se laisser tromper par la variation des ventes.", ex:"420 000 × 65 % = 273 000 €, contre 201 600 € réalisés : 71 400 € perdus."},
      pouces:[
        {cout:1, txt:"Sophie gardait 65 centimes par euro encaissé. Les ventes de cette année sont de 420 000 €."},
        {cout:2, txt:"On applique l'ancien taux au chiffre d'affaires actuel : 420 000 × 65 %."},
        {cout:4, txt:"420 000 × 0,65 = 273 000 €."}
      ]
    }
  ],

  rapport:[
    {
      q:"Les ventes ont augmenté de 5 % et l'entreprise perd de l'argent. Que dites-vous à Sophie ?",
      choix:[
        {t:"Les charges de personnel ont explosé pendant son absence.", bon:false, r:"Non. Le planning le montre : quatre salariés, aucune embauche, aucun départ. Les salaires n'ont pas bougé."},
        {t:"La marge a été écrasée des deux côtés : matières payées 20 % plus cher, et prix de vente baissés de 12 %. Le taux de marque est passé de 65 % à 48 %.", bon:true, r:"C'est exactement ça. Vendre plus ne sert à rien si on gagne moins sur chaque vente. 71 400 € de marge ont disparu — sur un résultat qui était de +31 200 €, cela suffit à basculer en perte."},
        {t:"Le fonds de roulement négatif a provoqué la perte.", bon:false, r:"Non, on confond deux choses. Le FRNG décrit la structure du bilan, il n'explique pas un résultat. D'ailleurs il était sans doute déjà négatif du temps de Sophie, et elle gagnait de l'argent."},
        {t:"L'ouverture de la chaîne concurrente a fait fuir la clientèle.", bon:false, r:"Non : les ventes ont augmenté de 5 %. Les clients sont restés. C'est ce que Marc a fait pour les retenir qui a coûté cher."}
      ]
    },
    {
      q:"La trésorerie est positive alors que le fonds de roulement est négatif. Comment l'expliquez-vous ?",
      choix:[
        {t:"C'est une erreur de calcul, les deux ne peuvent pas être de signes opposés.", bon:false, r:"Si, très bien. FRNG −8 000, BFR −20 000, donc trésorerie −8 000 − (−20 000) = +12 000 €. Et on le vérifie au bilan : 12 000 € disponibles, aucun découvert."},
        {t:"Le besoin en fonds de roulement est négatif : les clients paient comptant et les fournisseurs à trente jours, donc le fonctionnement dégage de la trésorerie.", bon:true, r:"Oui, et c'est ce qui maintient la boulangerie à flot. Dans le commerce de bouche, le cycle finance l'entreprise au lieu de la ponctionner. C'est un modèle courant — mais il ne pardonne pas une chute de marge, car il n'y a aucune réserve derrière."},
        {t:"Grâce à l'emprunt bancaire encore en cours.", bon:false, r:"Non. L'emprunt est déjà compté dans les ressources durables, et malgré lui le FRNG reste négatif. Ce n'est pas de là que vient la trésorerie."},
        {t:"Parce que le résultat de l'exercice est positif.", bon:false, r:"Non, le résultat est de −6 400 €. Et de toute façon, bénéfice et trésorerie sont deux choses distinctes."}
      ]
    },
    {
      q:"Que recommandez-vous à Sophie au sujet de Marc ?",
      choix:[
        {t:"Le licencier pour faute : il a caché des décisions graves.", bon:false, r:"C'est une réaction compréhensible, mais coûteuse et probablement injuste. Marc n'a rien détourné : il a pris seul, sans mandat et sans formation, des décisions commerciales qui le dépassaient. Il a travaillé 47 dimanches d'affilée pour tenir la boutique."},
        {t:"Remonter les prix immédiatement au niveau de mars et revenir à l'ancien fournisseur.", bon:false, r:"Le sens est bon, mais brutal. Remonter 12 % d'un coup sur une clientèle qu'une chaîne courtise, c'est risquer de perdre les volumes qu'on a gardés. Il faut échelonner, et travailler d'abord le coût des matières.", },
        {t:"Traiter les deux causes séparément : renégocier ou changer le fournisseur tout de suite, remonter les prix par paliers, et encadrer Marc au lieu de le sanctionner.", bon:true, r:"Oui. Le coût matières se corrige sans risque commercial : c'est le levier immédiat, +20 % évitables. Les prix se remontent progressivement, en s'appuyant sur la qualité que Marc a introduite. Et le vrai problème de gestion n'est pas Marc : c'est qu'une entreprise a tourné huit mois sans qu'aucun indicateur ne remonte à personne."},
        {t:"Ne rien changer : les ventes progressent, la trésorerie est positive.", bon:false, r:"Non. Le résultat est négatif, la banque refuse de financer, et le modèle ne tient que par un BFR négatif sans aucune réserve derrière. Une seule mauvaise saison et la boulangerie ferme."}
      ]
    }
  ],

  lexique:[
    {terme:"Emplois stables", def:"Tout ce que la boulangerie a acheté pour durer : le four, les vitrines, le fonds de commerce, les travaux du salon.", ex:"Chez Sophie : 250 000 €."},
    {terme:"Ressources stables", def:"L'argent qui reste longtemps : ce que Sophie a mis, l'emprunt sur plusieurs années, et l'usure déjà comptée sur le matériel.", ex:"Chez Sophie : 242 000 €."},
    {terme:"Amortissement", def:"L'usure du matériel, comptée chaque année dans les charges. Attention : c'est une charge sans sortie d'argent, donc la somme correspondante est restée dans l'entreprise.", ex:"18 000 € comptés cette année sans faire un seul chèque."},
    {terme:"FRNG négatif", def:"Le matériel durable n'est pas entièrement financé par de l'argent durable. C'est fragile, mais viable si le cycle rapporte de l'argent.", ex:"242 000 − 250 000 = −8 000 €."},
    {terme:"BFR négatif", def:"Le fonctionnement rapporte de l'argent au lieu d'en coûter, parce que les clients paient avant qu'on ne paie les fournisseurs. Fréquent dans l'alimentaire.", ex:"23 000 − 43 000 = −20 000 €."},
    {terme:"Taux de marque", def:"Sur 100 € encaissés à la caisse, ce qui reste une fois les matières payées.", ex:"Croissant à 1 €, matières 0,52 € : il reste 48 centimes, soit 48 %."},
    {terme:"Taux de marge", def:"Ce qu'on gagne pour 100 € dépensés en matières. Se calcule sur l'achat, pas sur la vente : ce n'est pas le taux de marque.", ex:"Même croissant : 0,48 ÷ 0,52 = 92 %."},
    {terme:"Raisonner à taux constant", def:"Pour mesurer ce qu'une décision a coûté, on applique l'ancien taux aux ventes d'aujourd'hui. On isole l'effet du taux sans se laisser tromper par la variation du volume.", ex:"420 000 × 65 % = 273 000 €, au lieu des 201 600 € réalisés."}
  ]
};
