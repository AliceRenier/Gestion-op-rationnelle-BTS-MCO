/* ════════════════════════════════════════════════════════════
   MISSION C0-MOYEN — Chapitre 0 : Rappels de calculs (niveau moyen)
   Pour créer une mission : copier ce fichier, renommer, réécrire.
   Puis l'ajouter à la liste "prets" du bon groupe dans index.html.
   ════════════════════════════════════════════════════════════ */
window.H5P_PATH = null;   // chemin d'un .h5p pour remplacer le lexique

window.MISSION = {
  ref:"C0-M",
  enseigne:"Clic Mobile",
  sujet:"Remises en cascade · Coût réel · Marge · Part d'activité",
  niveau:"Moyen",
  duree:"~40 min",
  accroche:"Un client professionnel lui passe la plus grosse commande de son histoire. Doit-il foncer, ou vérifier ses chiffres avant ?",
  client:{prenom:"Sami", nom:"Sami Youssef"},
  chapitres:["Chapitre 0","Calculs de base"],

  role:"Vous êtes consultant junior au cabinet <b>ORIENS</b>. Ce matin, votre responsable vous envoie seul sur un dossier.",
  situation:`<p><b>Sami Youssef</b> tient « Clic Mobile », une boutique d'accessoires pour téléphones et tablettes, depuis 3 ans. Surtout des particuliers, jusqu'ici.</p>
    <p>Il y a trois semaines, <b>Studio Yoga Flow</b>, une salle de sport du quartier, lui a commandé 40 supports de tablette d'un coup, pour équiper ses coachs. La plus grosse commande qu'il ait jamais eue. Il a dit oui tout de suite, sans trop recalculer.</p>
    <p>Depuis, un doute s'est installé : <b>a-t-il facturé le bon prix ? Et surtout, ce genre de commande, ça vaut vraiment le coup ?</b></p>`,
  enjeux:[{n:"3 ans", t:"d'activité"}, {n:"1ère", t:"grosse commande pro"}, {n:"646 €", t:"de réassort à valider"}],

  plan:[
    "Calculer ce que coûtera le réassort chez le fournisseur",
    "Reconstituer le coût réel des supports, frais de port compris",
    "Vérifier si la marge sur cette commande tient la route",
    "Mesurer si les clients professionnels pèsent assez pour s'y consacrer davantage",
    "Conseiller Sami sur la suite"
  ],

  actes:[
    {titre:"Le réassort chez le fournisseur",
     intro:"Pour honorer la commande de Studio Yoga Flow, Sami doit d'abord repasser commande chez son fournisseur habituel.",
     serrures:["v1"]},
    {titre:"Le prix à facturer",
     intro:"Le réassort est calculé. Reste à vérifier ce que Sami a réellement facturé à son client professionnel.",
     serrures:["v2"]},
    {titre:"La vraie rentabilité",
     intro:"Le prix est éclairci. Reste à savoir si la marge tient la route une fois tous les frais comptés.",
     serrures:["v3"]},
    {titre:"Développer le segment pro ?",
     intro:"Sami hésite à démarcher davantage de clients professionnels. Encore faut-il savoir ce qu'ils pèsent déjà.",
     serrures:["v4"]}
  ],

  pieces:[
    {id:"mot", ic:"✉️", titre:"Message de Sami", type:"Reçu à 8h03", chap:"Contexte", debloc:null, html:`
      <p class="manuscrit">« Entrez, entrez. Studio Yoga Flow, la salle de sport en bas de la rue, m'a commandé 40 supports de tablette d'un coup. J'ai dit oui sans trop réfléchir, c'est le genre de commande que je n'ai jamais eue. Maintenant j'ai des doutes : est-ce que j'ai bien calculé mon prix ? Et est-ce que je devrais chercher plus de clients comme ça ? »</p>`},

    {id:"devis-reassort", ic:"📱", titre:"Devis fournisseur — réassort", type:"Annexe 1", chap:"Calculs de base", debloc:null, html:`
      <p style="font-size:13.5px;color:#6C7891">Mobitek Distribution — devis pour le réassort général.</p>
      <table class="reg">
        <tr><td>Lot d'accessoires (prix catalogue HT)</td><td>800,00</td></tr>
        <tr><td>Remise fournisseur négociée</td><td>15 %</td></tr>
        <tr><td>Escompte pour règlement comptant</td><td>5 %</td></tr>
      </table>
      <p style="font-size:13.5px;color:#6C7891">Les deux remises s'appliquent l'une après l'autre, pas en même temps.</p>`},

    {id:"facture-supports", ic:"📦", titre:"Facture d'achat — supports de tablette", type:"Annexe 2", chap:"Calculs de base", debloc:"v1", html:`
      <p style="font-size:13.5px;color:#6C7891">Mobitek Distribution — facture n° 5528.</p>
      <table class="reg">
        <tr><td>40 supports × 15,00 € HT (prix catalogue)</td><td>600,00</td></tr>
        <tr><td>Remise volume −10 %</td><td>−60,00</td></tr>
        <tr class="sous"><td>Net marchandise</td><td>540,00</td></tr>
        <tr><td>Frais de port (forfait, non remisable)</td><td>60,00</td></tr>
        <tr class="total"><td>Net à payer (HT)</td><td>600,00</td></tr>
      </table>`},

    {id:"prix-annonce", ic:"🏷️", titre:"Prix annoncé à Yoga Flow", type:"Devis envoyé", chap:"Calculs de base", debloc:"v1", html:`
      <p>Sami a déjà annoncé son prix au client : <b>28,80 € TTC</b> le support, posé « au feeling » avant de recalculer.</p>
      <p>TVA applicable : 20 %.</p>`},

    {id:"politique", ic:"📋", titre:"Politique tarifaire", type:"Note interne", chap:"—", debloc:"v1", html:`
      <p>Note de Sami sur son cahier : <i>« Sur les accessoires, je vise toujours un coefficient multiplicateur de 2 et un taux de marge d'au moins 65 %. En dessous, ce n'est pas assez rentable pour justifier le temps passé. »</i></p>`},

    {id:"apprenti", ic:"🗣️", titre:"Lina, en stage", type:"Témoignage", chap:"Calculs de base", debloc:"v2", html:`
      <p class="manuscrit">« Moi j'ai calculé la marge de la commande Yoga Flow pour m'entraîner : je suis arrivée à un taux de marge énorme, un truc comme 90 quelque chose pour cent. Sami a eu l'air content sur le coup, mais après il m'a dit "attends, refais ça, y'a un truc qui cloche". »</p>`},

    {id:"cahier-clients", ic:"📒", titre:"Cahier de suivi — CA par type de client pro", type:"Annexe 3", chap:"Calculs de base", debloc:"v3", html:`
      <p style="font-size:13.5px;color:#6C7891">Chiffre d'affaires HT généré par les clients professionnels, deux derniers trimestres.</p>
      <table class="reg">
        <tr><th>Type de client</th><th>Trimestre −1</th><th>Trimestre en cours</th></tr>
        <tr><td>Salles de sport</td><td>9 000</td><td>10 200</td></tr>
        <tr><td>Cabinets & bureaux</td><td>4 500</td><td>4 800</td></tr>
        <tr><td>Écoles & formation</td><td>3 000</td><td>3 300</td></tr>
        <tr><td>Commerces partenaires</td><td>1 500</td><td>1 500</td></tr>
      </table>`},

    {id:"confirmation", ic:"🏦", titre:"Relevé bancaire", type:"Extrait", chap:"—", debloc:"v4", html:`
      <p>Prélèvement Mobitek Distribution : <b>646,00 €</b>.</p>
      <p>Note de Sami au dos : « Voilà, c'est ce chiffre-là que je voulais comprendre. »</p>`}
  ],

  serrures:[
    {
      id:"v1", ic:"🔐", nom:"Le devis du réassort",
      demande:"Post-it collé sur le devis, de la main de Sami : <i>« le code = ce que je paie vraiment, une fois les deux remises passées, l'une après l'autre »</i>.",
      boussole:"Deux remises qui se suivent ne s'additionnent jamais. On applique la première, puis on applique la seconde sur ce qu'il reste — pas sur le prix de départ.",
      outil:"apres-remise", candidats:["apres-remise","reduc","avant-remise","tx-var"],
      reponse:646, tol:0, unite:"€",
      debloque:["facture-supports","prix-annonce","politique"],
      reaction:"646 €, exactement ce qui est sorti de mon compte pour le réassort. Bon, ça au moins c'est clair. Reste à voir si j'ai bien facturé Yoga Flow…",
      faux:{
        "reduc":{t:"Ça donne un montant de remise, pas un prix", p:"Cet outil calcule combien vaut UNE remise en euros. Ici Sami veut le prix final, après les DEUX remises.", ex:"Reduc dirait « la remise de 15 % vaut 120 € ». Ce n'est pas la question posée."},
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
      id:"v2", ic:"📱", nom:"Le carton de supports",
      demande:"Étiquette scotchée sur le carton : <i>« mdp = le coefficient que j'obtiens VRAIMENT sur cette commande, pas celui que je crois obtenir »</i>.",
      boussole:"Le prix catalogue ne suffit pas ici : il a été remisé, puis des frais de port se sont ajoutés. Il faut d'abord reconstituer ce que le carton a coûté au total, pour un seul support — avant de comparer ce coût au prix déjà annoncé à Yoga Flow.",
      outil:"coef", candidats:["coef","apres-aug","marge","avant-aug"],
      reponse:1.92, tol:0.01, unite:"",
      debloque:["apprenti"],
      reaction:"1,92 ? Je pensais appliquer 2 sur toute commande... Les frais de port ont mangé une partie de ma remise, et je l'ai annoncé trop vite.",
      faux:{
        "apres-aug":{t:"Ça sert à passer du HT au TTC", p:"Cet outil ajoute une hausse (comme la TVA) à un prix. Ici on ne cherche pas un prix, mais le nombre par lequel le coût a été multiplié pour arriver au prix annoncé.", ex:"apres-aug donnerait un prix en euros, pas un coefficient comme 1,92."},
        "marge":{t:"Ça donne un montant, pas un coefficient", p:"La marge se compte en euros. Le code demandé est un coefficient, un nombre sans unité, comme 1,92 ou 2,50.", ex:"La marge est un ingrédient utile plus tard, pas la réponse ici."},
        "avant-aug":{t:"Le sens est inversé", p:"Cet outil retire une hausse pour retrouver un prix de départ. Ici on ne retire rien : on compare un prix déjà annoncé à un coût déjà reconstitué.", ex:"On a les deux chiffres (coût et prix) : il ne reste qu'à diviser, pas à remonter une hausse."}
      },
      pieges:[
        {val:2.13, t:"Les frais de port ont été oubliés", p:"En ne comptant que la remise (540 € pour 40 supports, soit 13,50 € pièce), le coût réel est sous-estimé. Les frais de port de 60 € font partie du prix payé au fournisseur.", ex:"540 € de marchandise + 60 € de port = 600 € au total, pas seulement 540 €."}
      ],
      fiche:{titre:"Coefficient multiplicateur (coût réel)", f:"Prix de vente TTC ÷ Coût d'achat HT réel", txt:"Avant de calculer un coefficient, il faut s'assurer que le coût d'achat est complet : marchandise remisée ET frais annexes (port, transport). Sinon le coefficient affiché est faux.", ex:"(600 € marchandise+port) ÷ 40 supports = 15 € le coût réel. 28,80 ÷ 15 = 1,92."},
      pouces:[
        {cout:1, txt:"La facture (Annexe 2) donne le prix catalogue, la remise ET les frais de port. Les trois comptent dans le coût réel."},
        {cout:2, txt:"(600 × 0,90 + 60) ÷ 40 = coût réel d'un support. Puis on divise le prix déjà annoncé (28,80 €) par ce coût."},
        {cout:4, txt:"Coût réel = 15 € le support. 28,80 ÷ 15 = 1,92."}
      ]
    },
    {
      id:"v3", ic:"💰", nom:"Le calcul de Lina",
      demande:"Sami, en désignant le brouillon de Lina : <i>« mdp = ce que je gagne vraiment sur 100 € que ce support m'a coûté, en pourcentage »</i>.",
      boussole:"Le prix annoncé est en TTC, mais le coût que vous avez reconstitué est en HT. Il faut comparer des prix habillés pareil avant de calculer quoi que ce soit.",
      outil:"tx-marge", candidats:["tx-marge","tx-marque","marge","coef"],
      reponse:60, tol:0, unite:"%",
      debloque:["cahier-clients"],
      reaction:"60 %... c'est bien en dessous des 65 % que je vise d'habitude. Lina avait raison de trouver son calcul suspect.",
      faux:{
        "tx-marque":{t:"Attention, ce n'est pas pareil", p:"Le taux de marque se calcule sur le prix de VENTE. Sami demande ce qu'il gagne pour 100 € que le support lui a COÛTÉ : c'est le prix d'achat au dénominateur, donc le taux de marge.", ex:"Marque : 9 ÷ 24 × 100 = 37,5 %. Marge : 9 ÷ 15 × 100 = 60 %. Même support, deux chiffres différents."},
        "marge":{t:"En euros, pas en pourcentage", p:"La marge commerciale donne un montant en euros. Le code demandé est un pourcentage.", ex:"La marge (9 €) est l'ingrédient, le taux de marge (60 %) est le résultat."},
        "coef":{t:"Déjà fait", p:"Le coefficient a été trouvé à l'étape précédente (1,92). Ici Sami demande autre chose : un pourcentage de rentabilité, pas un multiplicateur.", ex:"1,92 n'est pas un pourcentage, ce n'est pas ce que demande cette étape."}
      },
      pieges:[
        {val:92, t:"Le TTC n'a pas été converti en HT", p:"28,80 € est un prix TTC. Pour calculer une marge, il faut comparer des prix hors taxes : 28,80 ÷ 1,20 = 24 € HT, pas 28,80 € directement.", ex:"(28,80 − 15) ÷ 15 × 100 = 92 %, un chiffre gonflé parce que la TVA n'a pas été retirée."},
        {val:77.78, t:"Les frais de port ont encore été oubliés", p:"En reprenant le coût sans les frais de port (13,50 € au lieu de 15 €), la marge paraît meilleure qu'elle ne l'est. C'est exactement l'erreur que Lina a faite.", ex:"(24 − 13,50) ÷ 13,50 × 100 ≈ 77,8 %, contre 60 % avec le vrai coût."}
      ],
      fiche:{titre:"Taux de marge (coût complet)", f:"Marge commerciale ÷ Coût d'achat HT réel × 100", txt:"Ce qu'on gagne pour 100 € réellement dépensés chez le fournisseur, port compris. Toujours comparer des prix hors taxes entre eux, et un coût complet — jamais un coût partiel.", ex:"(24 − 15) ÷ 15 × 100 = 60 %."},
      pouces:[
        {cout:1, txt:"Convertissez d'abord le prix annoncé (28,80 € TTC) en HT avant de calculer quoi que ce soit."},
        {cout:2, txt:"Prix de vente HT : 28,80 ÷ 1,20 = 24 €. Coût réel déjà trouvé : 15 €."},
        {cout:4, txt:"(24 − 15) ÷ 15 × 100 = 60 %."}
      ]
    },
    {
      id:"v4", ic:"📈", nom:"Le cahier des clients pro",
      demande:"Sami, en tapotant le tableau : <i>« mdp = est-ce que mes clients professionnels progressent vraiment, sur l'ensemble ? Un pourcentage, sur le TOTAL. »</i>",
      boussole:"Quatre types de clients pro, deux trimestres : additionnez d'abord chaque colonne pour obtenir un total par trimestre, puis comparez les deux totaux. Ne comparez jamais des pourcentages par type de client entre eux avant d'avoir fait cette somme.",
      outil:"tx-var", candidats:["tx-var","part","tx-marque","reduc"],
      reponse:10, tol:0, unite:"%",
      debloque:["confirmation"],
      reaction:"+10 % sur l'ensemble des pros, en un seul trimestre. Ça, ça commence à ressembler à un vrai segment, pas à un coup de chance isolé.",
      faux:{
        "part":{t:"Ça mesure un poids, pas une évolution", p:"Le pourcentage de part dit quelle place un type de client occupe dans un total à un instant donné. Sami veut savoir si le total a progressé entre deux trimestres.", ex:"Part répondrait à « les salles de sport pèsent combien du CA pro total ? », pas à « ça progresse ? »."},
        "tx-marque":{t:"Autre famille de calcul", p:"Le taux de marque compare une marge à un prix de vente. Ici il n'est question que de chiffre d'affaires d'un trimestre à l'autre.", ex:"Il n'y a ni marge ni coût d'achat dans ce tableau, seulement des ventes."},
        "reduc":{t:"Ça calcule une remise, pas une évolution", p:"Cet outil sert à chiffrer une remise ou une hausse déjà connue en pourcentage. Ici, c'est l'inverse : il faut TROUVER le pourcentage d'évolution à partir de deux montants.", ex:"On ne vous donne pas un taux à appliquer, on vous demande de le calculer."}
      },
      pieges:[
        {val:7.5, t:"Les taux par type de client ont été moyennés", p:"Faire la moyenne des quatre pourcentages ne fait pas de sens : chaque type de client ne pèse pas le même poids dans le total. Il faut additionner les euros d'abord, calculer le pourcentage ensuite.", ex:"Moyenne des 4 taux : (13,33 + 6,67 + 10 + 0) ÷ 4 = 7,5 %. Ce n'est pas l'évolution réelle de l'activité pro, seulement une moyenne qui ignore le poids de chaque type de client."},
        {val:10.91, t:"Un type de client a été oublié dans la somme", p:"En oubliant les « Commerces partenaires » dans les deux totaux, le calcul se fait sur une base incomplète.", ex:"Sans cette ligne : 16 500 → 18 300, soit +10,91 % — proche du bon chiffre, mais faux, car une catégorie entière manque à l'appel."}
      ],
      fiche:{titre:"Pourcentage d'évolution (plusieurs catégories)", f:"(Total arrivée − Total départ) ÷ Total départ × 100", txt:"Quand les données sont réparties par catégorie, on additionne d'abord chaque colonne pour obtenir un total par période. On ne compare et on ne moyenne jamais des pourcentages de catégories entre eux.", ex:"Total trimestre −1 = 18 000 €. Total trimestre en cours = 19 800 €. (19 800 − 18 000) ÷ 18 000 × 100 = 10 %."},
      pouces:[
        {cout:1, txt:"Additionnez d'abord les 4 types de clients de l'Annexe 3, colonne par colonne, pour obtenir un total par trimestre."},
        {cout:2, txt:"Total trimestre −1 = 18 000 €. Total trimestre en cours = 19 800 €."},
        {cout:4, txt:"(19 800 − 18 000) ÷ 18 000 × 100 = 10 %."}
      ]
    }
  ],

  rapport:[
    {
      q:"Sami se demande s'il a bien facturé Studio Yoga Flow. Que lui répondez-vous ?",
      choix:[
        {t:"Le prix est le bon, il n'y a rien à changer.", bon:false, r:"Non. Le prix annoncé (28,80 € TTC) correspond à un coefficient réel de 1,92 et un taux de marge de 60 %, tous les deux sous la politique habituelle de Sami (coefficient 2, marge 65 %). Il a sous-facturé sans le savoir."},
        {t:"Il a sous-facturé : les frais de port n'ont pas été intégrés au coût avant de fixer le prix.", bon:true, r:"C'est exactement ça. Le coût réel du support est de 15 €, port compris, mais Sami a annoncé son prix en pensant au prix catalogue remisé (13,50 €). L'écart explique pourquoi sa marge est sous son objectif habituel."},
        {t:"Son fournisseur l'a trompé sur les pourcentages de remise annoncés.", bon:false, r:"Rien ne le montre. Le devis applique exactement les pourcentages annoncés (646 € correspondent bien aux deux remises). Le problème n'est pas le fournisseur, c'est un coût oublié : le transport."},
        {t:"C'est Lina qui a mal calculé, il faut refaire son calcul de zéro.", bon:false, r:"Lina a bien identifié qu'il y avait un problème (« ça sentait le too good to be true »), même si son propre calcul avait aussi oublié les frais de port. Le vrai souci est en amont : le prix annoncé au client, pas le calcul de marge en lui-même."}
      ]
    },
    {
      q:"Sami hésite à démarcher plus de clients professionnels comme Studio Yoga Flow. Que lui recommandez-vous ?",
      choix:[
        {t:"Foncer sans rien changer : les pros progressent déjà de 10 %, c'est prometteur.", bon:false, r:"La progression est réelle, mais reproduire le même prix mal calculé sur d'autres commandes pro reproduirait aussi la même marge trop basse. Il faut d'abord corriger la méthode de calcul du prix."},
        {t:"Abandonner le segment pro, ce n'est pas rentable.", bon:false, r:"Rien ne le prouve : le vrai taux de marge (60 %) reste positif, seulement sous l'objectif visé. Le problème est une erreur de méthode, pas une activité intrinsèquement non rentable."},
        {t:"Développer le segment, mais en intégrant systématiquement les frais de port au coût avant d'annoncer un prix.", bon:true, r:"Oui. Les clients pro pèsent déjà 19 800 € sur un trimestre et progressent de 10 % : le segment a du potentiel. Mais chaque futur devis doit repartir du coût réel (achat + port), pas du prix catalogue, pour retrouver les 65 % de marge visés."},
        {t:"Baisser encore le prix pour attirer plus de clients pro.", bon:false, r:"Ce serait aggraver le problème : la marge est déjà sous l'objectif. Baisser le prix éloignerait encore plus Sami de sa politique tarifaire, sur un segment qu'il souhaite justement développer."}
      ]
    }
  ],

  lexique:[
    {terme:"Remises successives", def:"Quand deux remises s'appliquent l'une après l'autre, on ne les additionne jamais. On applique la première, puis la seconde sur ce qu'il reste.", ex:"800 × 0,85 × 0,95 = 646 €, et non 800 × 0,80 = 640 €."},
    {terme:"Coût d'achat réel", def:"Le prix catalogue remisé, plus tous les frais annexes qui ne sont pas remisables (port, transport, emballage).", ex:"540 € de marchandise + 60 € de port = 600 € au total pour 40 supports, soit 15 € pièce."},
    {terme:"Coefficient multiplicateur", def:"Le nombre par lequel on multiplie le coût d'achat HT pour obtenir le prix de vente TTC. Il faut un coût complet pour qu'il soit juste.", ex:"28,80 ÷ 15 = 1,92, alors que la politique de la boutique en vise 2."},
    {terme:"Taux de marque", def:"Sur 100 € encaissés à la caisse, ce qui reste une fois le fournisseur payé.", ex:"9 ÷ 24 × 100 = 37,5 % pour les supports de tablette."},
    {terme:"Taux de marge", def:"Ce qu'on gagne pour 100 € réellement dépensés chez le fournisseur, port compris.", ex:"9 ÷ 15 × 100 = 60 % pour les supports, contre 65 % visé."},
    {terme:"Pourcentage d'évolution (plusieurs catégories)", def:"Quand les données sont réparties par catégorie, on additionne d'abord les totaux de chaque période avant de calculer l'évolution. On ne moyenne jamais des pourcentages entre eux.", ex:"18 000 € → 19 800 € sur l'ensemble des clients pro : +10 %."}
  ]
};
