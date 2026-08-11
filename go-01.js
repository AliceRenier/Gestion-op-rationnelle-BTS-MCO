/* ════════════════════════════════════════════════════════════
   MISSION GO-01 — Analyse financière
   Pour créer une mission : copier ce fichier, renommer, réécrire.
   Puis l'ajouter au catalogue dans index.html.
   ════════════════════════════════════════════════════════════ */
window.H5P_PATH = null;   // chemin d'un .h5p pour remplacer le lexique

window.MISSION = {
  ref:"M-01",
  enseigne:"Ambiance & Co",
  sujet:"Trésorerie · Bilan fonctionnel",
  client:{prenom:"Karim", nom:"Karim Belhadj"},
  chapitres:["Analyse financière","Marges"],

  role:"Vous êtes consultant junior au cabinet <b>ORIENS</b>. Ce matin, votre responsable vous envoie seul sur un dossier.",
  situation:`<p><b>Karim Belhadj</b> tient un magasin de décoration depuis 6 ans. Trois salariés. Le magasin marche : les clients reviennent, le comptable annonce un bénéfice de 12 600 €.</p>
    <p>Ce matin, la banque a refusé un virement de 6 200 € à son principal fournisseur. Le fournisseur menace de suspendre les livraisons.</p>
    <p>Karim ne comprend pas : <b>comment une entreprise qui gagne de l'argent peut-elle ne plus pouvoir en dépenser ?</b></p>`,
  enjeux:[{n:"3", t:"emplois en jeu"},{n:"6 ans", t:"de travail"},{n:"48 h", t:"avant la coupure"}],

  plan:[
    "Mesurer le matelas de sécurité (FRNG)",
    "Mesurer l'argent bloqué dans le fonctionnement (BFR)",
    "En déduire ce qu'il reste vraiment en banque",
    "Trouver quel poste bloque l'argent",
    "Proposer une solution chiffrée à Karim"
  ],

  pieces:[
    {id:"mot", ic:"✉️", titre:"Message de Karim", type:"Reçu à 8h12", chap:"Contexte", debloc:null, html:`
      <p class="manuscrit">« J'ai ouvert il y a 6 ans. On vend bien, les clients reviennent, j'ai même embauché en mars. Mon comptable me dit que je suis bénéficiaire. Mais tous les mois c'est la même angoisse : je regarde le solde avant de payer quoi que ce soit. Là, la banque ne suit plus et mon fournisseur me lâche. Trouvez-moi où passe l'argent, je ne vois pas. »</p>`},

    {id:"bilan-haut", ic:"🏢", titre:"Ce qui dure", type:"Bilan — partie haute", chap:"Analyse financière", debloc:null, html:`
      <p style="font-size:13.5px;color:#6C7891">Le matériel qui dure, et l'argent qui l'a financé. Au 31/12, en euros.</p>
      <table class="reg">
        <tr><th>Le matériel durable (emplois stables)</th><th></th></tr>
        <tr><td>Droit au bail, logiciel de caisse</td><td>40 000</td></tr>
        <tr><td>Vitrines, étagères, camionnette</td><td>140 000</td></tr>
        <tr class="total"><td>Total</td><td>180 000</td></tr>
      </table>
      <table class="reg">
        <tr><th>L'argent qui reste longtemps (ressources stables)</th><th></th></tr>
        <tr><td>Apport de Karim et bénéfices gardés</td><td>95 000</td></tr>
        <tr><td>Usure déjà comptée sur le matériel (amortissements)</td><td>60 000</td></tr>
        <tr><td>Emprunt bancaire (plus d'un an)</td><td>55 000</td></tr>
        <tr class="total"><td>Total</td><td>210 000</td></tr>
      </table>`},

    {id:"bilan-bas", ic:"📦", titre:"Ce qui tourne", type:"Bilan — partie basse", chap:"Analyse financière", debloc:null, html:`
      <p style="font-size:13.5px;color:#6C7891">Ce qui bouge tous les jours : marchandises, clients, fournisseurs. Au 31/12, en euros.</p>
      <table class="reg">
        <tr><th>Ce que le magasin a immobilisé</th><th></th></tr>
        <tr><td>Marchandises en réserve (stocks)</td><td>85 000</td></tr>
        <tr><td>Clients qui n'ont pas encore payé</td><td>22 000</td></tr>
        <tr class="total"><td>Total</td><td>107 000</td></tr>
      </table>
      <table class="reg">
        <tr><th>Ce que le magasin n'a pas encore payé</th><th></th></tr>
        <tr><td>Fournisseurs à régler</td><td>48 000</td></tr>
        <tr><td>Impôts et charges sociales à régler</td><td>9 000</td></tr>
        <tr class="total"><td>Total</td><td>57 000</td></tr>
      </table>
      <table class="reg">
        <tr><th>À la banque</th><th></th></tr>
        <tr><td>Argent disponible</td><td>4 000</td></tr>
        <tr><td>Découvert utilisé</td><td>24 000</td></tr>
      </table>`},

    {id:"resultat", ic:"🧾", titre:"L'année en chiffres", type:"Compte de résultat", chap:"Marges", debloc:null, html:`
      <table class="reg">
        <tr><td>Ventes du magasin (hors taxes)</td><td>480 000</td></tr>
        <tr><td>Ce que les marchandises vendues ont coûté</td><td>312 000</td></tr>
        <tr class="total"><td>Marge commerciale</td><td>168 000</td></tr>
        <tr class="sous"><td>Loyer, énergie, assurances</td><td>62 000</td></tr>
        <tr class="sous"><td>Salaires et charges</td><td>78 000</td></tr>
        <tr class="sous"><td>Usure du matériel (amortissements)</td><td>12 000</td></tr>
        <tr class="sous"><td>Agios payés à la banque</td><td>3 400</td></tr>
        <tr class="total"><td>Bénéfice de l'année</td><td>12 600</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">TVA : 20 %.</p>`},

    {id:"reserve", ic:"🚪", titre:"La réserve", type:"Visite sur place", chap:"Analyse financière", debloc:null, html:`
      <p>60 m² à l'arrière du magasin. Pleine du sol au plafond.</p>
      <p>Sur les cartons du fond : <b>« Collection Automne N−2 »</b>, <b>« Collection Printemps N−1 »</b>. Une partie est encore sous film plastique.</p>
      <p>Sonia, la vendeuse : « Ça, ça ne sortira jamais. On n'ose pas solder, le patron dit qu'on perdrait de la marge. »</p>`},

    {id:"mail-compta", ic:"💬", titre:"Le comptable", type:"Message", chap:"Analyse financière", debloc:null, html:`
      <p class="manuscrit">« Karim, le bilan est bouclé. Bonne nouvelle sur le bénéfice : 12 600 €. Par contre tes agios ont doublé (3 400 € contre 1 700 l'an dernier). Ton problème n'est pas de gagner de l'argent — ça, tu y arrives. Il est dans le bas de ton bilan. »</p>`},

    {id:"vendeuse", ic:"🗣️", titre:"Sonia, vendeuse", type:"Témoignage", chap:"Analyse financière", debloc:null, html:`
      <p class="manuscrit">« Depuis deux ans on commande par palettes entières, parce que le fournisseur fait −12 % à partir de 300 pièces. Karim dit que c'est une économie. Sauf qu'on reçoit 300 vases quand on en vend 40 dans la saison. Le reste part à la réserve, et on ne le ressort jamais. »</p>`},

    {id:"assurance", ic:"📄", titre:"Assurance du local", type:"Courrier", chap:"—", debloc:null, html:`
      <p>Renouvellement du contrat. Prime annuelle : 1 180 € → 1 240 €, soit +5,1 %.</p>
      <p>Remise de 40 € pour absence de sinistre depuis trois ans.</p>`},

    {id:"enseigne", ic:"💡", titre:"Devis enseigne", type:"Devis", chap:"—", debloc:null, html:`
      <p>Remplacement de l'enseigne lumineuse, pose comprise : <b>3 900 € HT</b>. Validité 30 jours.</p>
      <p>En marge, de la main de Karim : « à voir plus tard ».</p>`},

    {id:"facture", ic:"🧮", titre:"Facture fournisseur", type:"Pièce comptable", chap:"Analyse financière", debloc:"v1", html:`
      <p style="font-size:13.5px;color:#6C7891">Maison Terracotta — facture n° 8871, payable à 45 jours.</p>
      <table class="reg">
        <tr><td>Vases en grès — 300 pièces</td><td>9 600,00</td></tr>
        <tr><td>Remise volume −12 %</td><td>−1 152,00</td></tr>
        <tr class="total"><td>Net à payer (HT)</td><td>8 448,00</td></tr>
      </table>
      <p>Trois factures de ce type sur le dernier trimestre. Ventes sur la même période : <b>52 pièces</b>.</p>`},

    {id:"previsionnel", ic:"📉", titre:"Prévision de trésorerie", type:"Document bancaire", chap:"Analyse financière", debloc:"v2", html:`
      <table class="reg">
        <tr><th>Mois</th><th>Solde prévu</th></tr>
        <tr><td>Janvier</td><td>−20 000</td></tr>
        <tr><td>Février</td><td>−26 400</td></tr>
        <tr><td>Mars</td><td>−31 900</td></tr>
      </table>
      <p>Découvert autorisé par la banque : <b>25 000 €</b>. Le plafond est dépassé dès février.</p>`},

    {id:"historique", ic:"📈", titre:"Historique des stocks", type:"Extrait logiciel", chap:"Analyse financière", debloc:"v3", html:`
      <table class="reg">
        <tr><th>Année</th><th>Marchandises en réserve au 31/12</th></tr>
        <tr><td>N−2</td><td>38 000</td></tr>
        <tr><td>N−1</td><td>61 000</td></tr>
        <tr><td>N</td><td>85 000</td></tr>
      </table>
      <p>Sur la même période, les ventes sont passées de 455 000 à 480 000 €, soit <b>+5,5 %</b>.</p>
      <p><b>Le stock a plus que doublé pendant que les ventes bougeaient de 5 %.</b></p>`}
  ],

  serrures:[
    {
      id:"v1", ic:"🔐", nom:"Le coffre du bureau",
      demande:"Post-it collé sur le coffre, de la main de Karim : <i>« le code = ce qui me reste une fois tout mon matériel payé »</i>.",
      boussole:"Ça se lit dans le bilan, pas dans le compte de résultat. Et Karim parle de son <b>matériel</b> — les vitrines, la camionnette — donc de ce qui dure, pas des marchandises du quotidien.",
      outil:"frng", candidats:["frng","bfre","tn","caf","marge"],
      reponse:30000, tol:0, unite:"€",
      debloque:["facture"],
      reaction:"Ah oui, 30 000 ! Le coffre s'ouvre. Donc j'ai bien un matelas ? Alors pourquoi je suis à sec…",
      faux:{
        "bfre":{t:"Pas encore celui-là", p:"Le BFR sert à mesurer l'argent bloqué dans le fonctionnement (marchandises, clients, fournisseurs). Ici on cherche autre chose : ce qui reste après avoir payé le matériel durable.", ex:"Le matelas d'abord, le besoin ensuite. On compare les deux à la fin."},
        "tn":{t:"C'est la suite, pas l'étape", p:"La trésorerie nette est le résultat final. Mais pour la calculer par cette voie, il faut d'abord le matelas et le besoin. On ne peut pas conclure avant d'avoir les deux.", ex:"C'est comme vouloir la différence entre deux nombres sans connaître les nombres."},
        "caf":{t:"Bon outil, mauvais moment", p:"La CAF mesure l'argent que l'activité fabrique en un an. Ici on ne regarde pas ce qui a été fabriqué, mais la photo du bilan au 31 décembre.", ex:"La CAF se lit dans le compte de résultat. Le matelas se lit dans le bilan."},
        "marge":{t:"Ça, c'est la rentabilité", p:"La marge dit combien on gagne en revendant. Or le problème de Karim n'est pas de gagner : il gagne 12 600 €. Le problème est ailleurs.", ex:"On peut très bien gagner de l'argent et ne rien avoir sur son compte. C'est justement le sujet."}
      },
      pieges:[
        {val:-30000, t:"Le sens est inversé", p:"Ce sont les ressources qui financent le matériel, jamais l'inverse. Donc ressources MOINS emplois.", ex:"J'ai 210 € en poche, j'achète pour 180 € : il me reste 30 €, pas −30 €."},
        {val:-25000, t:"Il manque les amortissements", p:"L'usure déjà comptée sur le matériel (60 000 €) fait partie des ressources durables : cet argent est resté dans l'entreprise.", ex:"95 000 + 60 000 + 55 000 = 210 000 de ressources."}
      ],
      fiche:{titre:"Le matelas (FRNG)", f:"Ressources stables − Emplois stables", txt:"Ce qui reste d'argent durable une fois le matériel durable payé. Positif, c'est bon signe : l'entreprise a de quoi faire tourner son activité.", ex:"210 000 − 180 000 = 30 000 € de matelas."},
      pouces:[
        {cout:1, txt:"Les deux totaux sont déjà calculés sur la pièce « Ce qui dure ». Vous n'avez rien à additionner, juste à soustraire."},
        {cout:2, txt:"210 000 d'un côté, 180 000 de l'autre. Attention au sens : ressources moins emplois."},
        {cout:4, txt:"210 000 − 180 000 = 30 000 €."}
      ]
    },
    {
      id:"v2", ic:"📁", nom:"Le classeur du comptable",
      demande:"Étiquette sur le classeur : <i>« l'argent que le magasin me réclame en permanence pour tourner »</i>.",
      boussole:"Cette fois on ne parle plus du matériel durable mais du <b>quotidien</b> : les marchandises, les clients, les fournisseurs. Cherchez l'outil qui mesure ce que ce quotidien immobilise.",
      outil:"bfre", candidats:["bfre","frng","tn","stock-j","fou"],
      reponse:50000, tol:0, unite:"€",
      debloque:["previsionnel"],
      reaction:"50 000 ?! Mais je n'ai jamais eu 50 000 € qui traînent, moi. C'est passé où, cet argent ?",
      faux:{
        "frng":{t:"Déjà fait", p:"Le matelas, on l'a mesuré au coffre : 30 000 €. Ici on cherche l'autre grandeur, celle qui va se comparer au matelas.", ex:"Le matelas, c'est ce qu'on a. Le besoin, c'est ce que réclame le fonctionnement."},
        "tn":{t:"C'est la conclusion", p:"On y arrive juste après. Il manque encore une des deux grandeurs pour pouvoir faire la comparaison.", ex:"Matelas 30 000, besoin ? On ne peut pas conclure tant que le point d'interrogation est là."},
        "stock-j":{t:"Trop précis pour l'instant", p:"La durée de stockage vous dira plus tard POURQUOI le besoin est si lourd. Mais d'abord il faut mesurer ce besoin en euros.", ex:"On mesure d'abord la fièvre, on cherche la cause ensuite."},
        "fou":{t:"Un morceau seulement", p:"Le délai fournisseurs est un des éléments qui font varier le besoin, mais il n'est pas le besoin. Il faut la somme complète.", ex:"Les fournisseurs sont dans le calcul, mais les stocks et les clients aussi."}
      },
      pieges:[
        {val:59000, t:"Un poste a été oublié", p:"Les impôts et charges sociales à régler (9 000 €) font partie de ce que le magasin n'a pas encore payé. Ils allègent donc le besoin.", ex:"48 000 + 9 000 = 57 000 à retirer, pas seulement 48 000."},
        {val:111000, t:"La banque n'entre pas dans le calcul", p:"Les 4 000 € disponibles et le découvert ne sont pas de l'exploitation : ils sont le résultat, pas la cause.", ex:"On ne compte que les marchandises, les clients, les fournisseurs et les charges à payer."},
        {val:37000, t:"Les clients ont été oubliés", p:"Les 22 000 € que les clients n'ont pas encore payés sont bien de l'argent bloqué, au même titre que les marchandises.", ex:"85 000 + 22 000 = 107 000 d'argent immobilisé."}
      ],
      fiche:{titre:"Le besoin (BFR)", f:"Actif circulant d'exploitation − Passif circulant d'exploitation", txt:"L'argent bloqué en permanence par le fonctionnement : marchandises en réserve et clients qui doivent, moins l'ardoise chez les fournisseurs.", ex:"107 000 − 57 000 = 50 000 € bloqués en permanence."},
      pouces:[
        {cout:1, txt:"Les deux totaux sont sur la pièce « Ce qui tourne ». On ne compte ni l'argent disponible ni le découvert : ce sont des conséquences."},
        {cout:2, txt:"107 000 d'un côté, 57 000 de l'autre."},
        {cout:4, txt:"107 000 − 57 000 = 50 000 €."}
      ]
    },
    {
      id:"v3", ic:"💳", nom:"Le terminal de caisse",
      demande:"Post-it sous le clavier : <i>« mdp = ce que je garde sur 100 € encaissés »</i>. Un pourcentage entier.",
      boussole:"Le mot <b>encaissés</b> est la clé : on part de ce qui rentre en caisse, donc du prix de vente. Deux outils se ressemblent beaucoup ici — l'un divise par la vente, l'autre par l'achat. Lisez bien les deux.",
      outil:"tx-marque", candidats:["tx-marque","tx-marge","coef","marge","sr"],
      reponse:35, tol:0, unite:"%",
      debloque:["historique"],
      reaction:"35 %, c'est ce que je fais depuis le début. C'est normal pour de la déco, non ? Donc ce n'est pas ça le problème…",
      faux:{
        "tx-marge":{t:"Attention, ce n'est pas pareil", p:"Le taux de MARGE se calcule sur le prix d'ACHAT. Le taux de MARQUE se calcule sur le prix de VENTE. Ici, Karim parle de ce qu'il garde sur 100 € encaissés : c'est donc le prix de vente au dénominateur.", ex:"Vase acheté 65 €, vendu 100 €. Marge : 35 ÷ 65 = 54 %. Marque : 35 ÷ 100 = 35 %. Même vase, deux chiffres."},
        "coef":{t:"Ce n'est pas un pourcentage", p:"Le coefficient multiplicateur donne un nombre comme 1,85, pas un pourcentage. Le code attendu est un pourcentage.", ex:"On multiplie le prix d'achat par 1,85 pour trouver l'étiquette. Ce n'est pas « 35 % »."},
        "marge":{t:"En euros, pas en pourcentage", p:"La marge commerciale donne 168 000 €. Le code demandé est un pourcentage : il reste une division à faire.", ex:"La marge est l'ingrédient, le taux de marque est le résultat."},
        "sr":{t:"Autre chapitre", p:"Le seuil de rentabilité dit combien il faut vendre pour ne rien perdre. Ce n'est pas ce que le post-it demande.", ex:"Le post-it parle de ce qui reste sur 100 € encaissés, donc d'un rapport entre marge et ventes."}
      },
      pieges:[
        {val:54, t:"Marge et marque ont été confondues", p:"54 %, c'est le taux de marge : on a divisé par le prix d'achat (312 000). Le taux de marque divise par les ventes (480 000).", ex:"Marque = sur la VENTE. Marge = sur l'ACHAT. Le mot « marque » comme le mot « vente » : ce qui est marqué sur l'étiquette."},
        {val:65, t:"C'est le coût, pas la marge", p:"65 %, c'est la part du prix de vente qui part chez le fournisseur. Ce qui reste est justement l'inverse.", ex:"100 − 65 = 35 % restent dans la caisse."}
      ],
      fiche:{titre:"Le taux de marque", f:"Marge commerciale ÷ CA HT × 100", txt:"Sur 100 € encaissés, ce qui reste après avoir payé le fournisseur. Ici 35 % : c'est correct pour la décoration. La marge n'est donc pas le problème de Karim.", ex:"168 000 ÷ 480 000 × 100 = 35 %."},
      pouces:[
        {cout:1, txt:"Marge commerciale et ventes sont toutes les deux sur la pièce « L'année en chiffres »."},
        {cout:2, txt:"Marque = on divise par les VENTES (480 000), pas par le coût d'achat."},
        {cout:4, txt:"168 000 ÷ 480 000 × 100 = 35 %."}
      ]
    },
    {
      id:"v4", ic:"📦", nom:"Le cadenas de la réserve",
      demande:"Écrit au marqueur sur le cadenas : <i>« combien de jours mes vases dorment ici »</i>. Arrondi à l'entier.",
      boussole:"Le mot <b>jours</b> élimine la moitié des outils d'un coup : cherchez celui dont le résultat est une durée, pas un nombre de fois ni un pourcentage.",
      outil:"stock-j", candidats:["stock-j","rota","cli","fou","tx-marge"],
      reponse:98, tol:2, unite:"jours",
      debloque:[],
      reaction:"98 jours… Plus de trois mois. Je croyais qu'on tournait vite. Je crois que je viens de comprendre.",
      faux:{
        "rota":{t:"Presque : mauvaise unité", p:"La rotation donne un nombre de FOIS par an (3,7). Le cadenas demande un nombre de JOURS. Les deux mesurent la même chose, mais pas dans la même unité.", ex:"Rotation 3,7 fois par an → 360 ÷ 3,7 = 98 jours. Les deux chemins mènent au même endroit."},
        "cli":{t:"Ce sont les clients, pas les marchandises", p:"Le délai clients mesure le temps que les clients mettent à payer. Ici on veut le temps que les marchandises passent en réserve.", ex:"Les clients paient en 14 jours : ce n'est pas eux qui bloquent l'argent."},
        "fou":{t:"Ce sont les fournisseurs", p:"Le délai fournisseurs mesure le temps qu'on met à les payer. Le cadenas parle des vases qui dorment, pas des factures.", ex:"On paie les fournisseurs en 46 jours, mais on garde les vases 98 jours. C'est là que ça coince."},
        "tx-marge":{t:"Mauvaise unité", p:"Un taux de marge donne un pourcentage. Le cadenas attend des jours.", ex:"On cherche une durée : il y aura donc un ×360 dans le calcul."}
      },
      pieges:[
        {val:64, t:"Mauvais dénominateur", p:"On a divisé par les ventes (480 000). Or le stock est valorisé à son prix d'ACHAT : il faut le comparer au coût d'achat des marchandises vendues (312 000).", ex:"Comparer un stock au prix d'achat avec un chiffre d'affaires au prix de vente, c'est comparer des euros qui n'ont pas le même sens."},
        {val:4, t:"C'est la rotation, en nombre de fois", p:"3,7 est le nombre de fois où la réserve se renouvelle dans l'année. Pour obtenir des jours, il reste une étape.", ex:"360 ÷ 3,7 = 98 jours."},
        {val:3.7, t:"C'est la rotation, en nombre de fois", p:"3,7 est le nombre de fois où la réserve se renouvelle dans l'année. Pour obtenir des jours : 360 ÷ 3,7.", ex:"360 ÷ 3,7 = 98 jours."}
      ],
      fiche:{titre:"La durée de stockage", f:"(Stock ÷ Coût d'achat des marchandises vendues) × 360", txt:"Le nombre de jours qu'une marchandise passe en réserve avant d'être vendue. Chaque jour de stock est un jour d'argent immobilisé. En décoration, 45 à 60 jours est le repère habituel.", ex:"85 000 ÷ 312 000 × 360 ≈ 98 jours, soit le double du repère."},
      pouces:[
        {cout:1, txt:"On compare le stock au coût d'achat des marchandises vendues, pas aux ventes : les deux doivent être exprimés au même prix."},
        {cout:2, txt:"85 000 ÷ 312 000, puis on multiplie par 360 pour obtenir des jours."},
        {cout:4, txt:"85 000 ÷ 312 000 × 360 ≈ 98 jours."}
      ]
    }
  ],

  rapport:[
    {
      q:"Karim gagne 12 600 € et se retrouve à découvert. Qu'allez-vous lui dire ?",
      choix:[
        {t:"Il ne gagne pas assez sur ce qu'il vend.", bon:false, r:"Non. Il garde 35 € sur 100 € encaissés, ce qui est normal en décoration. S'il gagnait moins, on le verrait dans le bénéfice — or il est positif."},
        {t:"Ses clients mettent trop longtemps à payer.", bon:false, r:"Non. Ses clients règlent en 14 jours en moyenne, et la plupart paient à la caisse. Ce n'est pas là que l'argent se bloque."},
        {t:"Son argent est bloqué en réserve : il lui faut 50 000 € pour faire tourner le magasin, il n'en a que 30 000, donc il est à −20 000 en banque.", bon:true, r:"C'est exactement ça. Le bénéfice existe, mais il ne s'est pas transformé en argent : il est parti en marchandises qui dorment 98 jours dans la réserve. Gagner de l'argent et en avoir sur son compte sont deux choses différentes."},
        {t:"Il a trop emprunté à la banque.", bon:false, r:"Non. 55 000 € d'emprunt pour 95 000 € d'apport, c'est raisonnable. Le déséquilibre ne vient pas du matériel ni de l'emprunt, il vient du fonctionnement quotidien."}
      ]
    },
    {
      q:"Karim veut agir vite. Que lui recommandez-vous ?",
      choix:[
        {t:"Augmenter les prix de 5 %.", bon:false, r:"Ça améliorerait la marge, mais la marge n'est pas le problème — et il risque de perdre des clients. Surtout, ça ne débloque pas les 85 000 € déjà dormants en réserve."},
        {t:"Solder les anciennes collections et arrêter les commandes par palette.", bon:true, r:"Oui. C'est la seule mesure qui libère de l'argent tout de suite. Passer de 98 à 60 jours de stock rendrait environ 33 000 € : de quoi repasser en positif. Et la remise de 12 % lui coûte plus cher en argent immobilisé qu'elle ne lui rapporte en marge."},
        {t:"Demander 20 000 € d'emprunt supplémentaire.", bon:false, r:"Ça boucherait le trou, un temps. Mais le stock continuerait de gonfler, le besoin reviendrait, et il aurait une dette en plus. On soigne le symptôme, pas la cause."},
        {t:"Licencier un salarié.", bon:false, r:"Trois salariés pour 480 000 € de ventes, ce n'est pas trop. Et ça dégraderait le magasin sans toucher au poste qui bloque réellement l'argent."}
      ]
    }
  ],

  lexique:[
    {terme:"Emplois stables", def:"Tout ce que le magasin a acheté pour durer des années : les vitrines, les étagères, la camionnette, le logiciel de caisse.", ex:"Chez Karim : 180 000 € de matériel."},
    {terme:"Ressources stables", def:"L'argent qui reste dans l'entreprise longtemps : ce que le patron a mis, ce que la banque a prêté sur plusieurs années, et l'usure déjà comptée sur le matériel.", ex:"Chez Karim : 210 000 €."},
    {terme:"Le matelas (FRNG)", def:"Ce qui reste d'argent durable une fois le matériel payé. C'est la réserve de sécurité pour faire tourner le magasin au quotidien.", ex:"210 000 − 180 000 = 30 000 € de matelas."},
    {terme:"Le besoin (BFR)", def:"L'argent qu'il faut sortir en permanence pour faire tourner le magasin : remplir la réserve, attendre que les clients paient. Les fournisseurs en allègent une partie en acceptant d'attendre.", ex:"Chez Karim : 50 000 € bloqués en permanence."},
    {terme:"Trésorerie nette", def:"Ce qu'il y a vraiment sur le compte. Le matelas moins le besoin. Négative, cela veut dire qu'on vit sur le découvert.", ex:"30 000 − 50 000 = −20 000 €. Karim est à découvert de 20 000 €."},
    {terme:"Taux de marque", def:"Sur 100 € encaissés à la caisse, ce qui reste une fois le fournisseur payé.", ex:"Vase vendu 100 €, acheté 65 € : 35 € restent, soit 35 %."},
    {terme:"Taux de marge", def:"Ce qu'on gagne pour 100 € dépensés chez le fournisseur. Ce n'est pas la même chose que le taux de marque.", ex:"Même vase : 35 € gagnés sur 65 € dépensés, soit 54 %."},
    {terme:"Durée de stockage", def:"Combien de jours un article reste en réserve avant d'être vendu. Plus c'est long, plus l'argent dort au lieu de circuler.", ex:"98 jours chez Karim, contre 45 à 60 jours habituellement en décoration."}
  ]
};
