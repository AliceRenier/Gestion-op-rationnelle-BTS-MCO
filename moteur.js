/* ════════════════════════════════════════════════════════════
   LE MOTEUR — identique pour toutes les missions.
   Ne pas le modifier pour adapter un chapitre : tout le contenu
   se règle dans le fichier de mission.
   ════════════════════════════════════════════════════════════ */
"use strict";
const el = id => document.getElementById(id);

/* Le dirigeant de la mission. Déclaré par MISSION.client ; à défaut,
   déduit du premier personnage. Aucun prénom n'est écrit en dur. */
const CLIENT = (() => {
  if(typeof MISSION === "undefined") return {prenom:"le dirigeant", nom:"le dirigeant"};
  if(MISSION.client) return MISSION.client;
  const p = (MISSION.personnages || [])[0];
  if(p) return {prenom:(p.nom || "").split(" ")[0], nom:p.nom};
  return {prenom:"le dirigeant", nom:"le dirigeant"};
})();
const O = id => OUTILS[id];
const P = id => MISSION.pieces.find(p => p.id === id);

const S = {
  niveau:1, prenom:"", t0:0, timer:null, sec:0, conf:55,
  lues:new Set(), ouvertes:new Set(), dispo:new Set(),
  planFait:false, lexFait:false, ordre:{},
  epreuves:new Set(), vus:new Set(), questions:0, indices:[],
  gains:[], ratages:[], pouces:0, fiches:[], rapIdx:0, rapJustes:0, fini:false
};

/* ---------- accueil ---------- */
el("a-ref").textContent = MISSION.ref;
el("a-prenom").placeholder = "Comment " + CLIENT.prenom +
  (CLIENT.genre === "f" ? " doit-elle" : " doit-il") + " vous appeler ?";
el("a-ens").textContent = MISSION.enseigne;
el("a-role").innerHTML = MISSION.role;
el("a-situation").innerHTML = MISSION.situation;
el("a-enjeux").innerHTML = MISSION.enjeux.map(e =>
  '<div class="enjeu"><div class="n">' + e.n + '</div><div class="t">' + e.t + '</div></div>').join("");
document.querySelectorAll(".niv").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".niv").forEach(x => x.setAttribute("aria-pressed","false"));
  b.setAttribute("aria-pressed","true"); S.niveau = +b.dataset.niv;
}));
el("a-go").addEventListener("click", () => {
  S.prenom = (el("a-prenom").value || "").trim();
  el("accueil").style.display = "none";
  el("jeu").hidden = false;
  S.t0 = Date.now(); S.timer = setInterval(tic, 1000);
  MISSION.pieces.forEach(p => { if(!p.debloc) S.dispo.add(p.id); });
  majConf(0); rendre();
  signaler("debut", {mission: MISSION.ref, niveau: S.niveau});
  /* Les libellés qui nomment le dirigeant sont posés ici, pas dans le HTML. */
  el("lbl-conf").textContent = "Confiance de " + CLIENT.prenom;
  el("lbl-attente").textContent = "Tout est ouvert. " + CLIENT.prenom + " attend votre réponse.";
  el("btn-rapport").textContent = "Répondre à " + CLIENT.prenom;
  if(S.niveau >= 2) ouvrirPlan(true);
});
function tic(){
  S.sec = Math.floor((Date.now() - S.t0)/1000);
  el("chrono").textContent = String(Math.floor(S.sec/60)).padStart(2,"0") + ":" + String(S.sec%60).padStart(2,"0");
}
function appel(){ return S.prenom || "chef"; }

/* ---------- confiance : elle monte beaucoup, elle descend peu ---------- */
function majConf(delta, motif){
  const av = S.conf;
  S.conf = Math.max(5, Math.min(100, S.conf + delta));
  el("conf-v").textContent = S.conf;
  el("jauge-i").style.width = S.conf + "%";
  if(delta > 0) S.gains.push(motif || "");
  if(delta < 0 && motif) S.ratages.push(motif);
  if(delta !== 0 && av !== S.conf){
    const g = el("gain");
    g.textContent = (delta > 0 ? "+" : "") + (S.conf - av);
    g.className = delta > 0 ? "on" : "on perte";
    setTimeout(() => g.className = "", 1500);
  }
}

/* ════════════════════════════════════════════════════════════
   DIALOGUE AVEC LA PAGE HÔTE
   Quand le jeu tourne dans une iframe (LearnDash, Moodle...),
   il annonce sa hauteur pour éviter les barres de défilement,
   et signale la fin de mission avec le score.
   Sans iframe, ces appels ne font rien.
   ════════════════════════════════════════════════════════════ */
const DANS_IFRAME = (() => { try { return window.self !== window.top; } catch(e){ return true; } })();

function signaler(type, donnees){
  if(!DANS_IFRAME) return;
  try { parent.postMessage(Object.assign({source:"oriens", type:type}, donnees || {}), "*"); }
  catch(e){ /* la page hôte ne nous écoute pas, ce n'est pas grave */ }
}
function signalerHauteur(){
  signaler("hauteur", {hauteur: Math.ceil(document.documentElement.scrollHeight)});
}
if(DANS_IFRAME){
  window.addEventListener("load", signalerHauteur);
  if(window.ResizeObserver) new ResizeObserver(signalerHauteur).observe(document.documentElement);
  setInterval(signalerHauteur, 1200);
}

/* ---------- modale ---------- */
function modale(html, papier){
  el("boite").className = "boite" + (papier ? " papier" : "");
  el("boite").innerHTML = '<button class="fermer" aria-label="Fermer">&times;</button>' + html;
  el("modale").classList.add("on");
  el("boite").querySelector(".fermer").addEventListener("click", fermer);
  el("modale").scrollTop = 0;
  signalerHauteur();
}
function fermer(){ el("modale").classList.remove("on"); signalerHauteur(); }
el("modale").addEventListener("click", e => { if(e.target.id === "modale") fermer(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") fermer(); });
function neon(txt){
  el("neon-txt").textContent = txt;
  el("neon").classList.add("on");
  setTimeout(() => el("neon").classList.remove("on"), 1250);
}

/* ---------- rendu ---------- */
function carteServrure(k){
  const ouv = S.ouvertes.has(k.id);
  const bloq = S.niveau >= 2 && !S.planFait;
  const d = document.createElement("div");
  d.className = "serrure" + (ouv ? " ouverte" : "");
  const val = (k.reponse === undefined) ? "Résolu" : fmt(k.reponse) + " " + (k.unite || "");
  d.innerHTML = '<span class="obj">' + k.ic + '</span><h3>' + k.nom + '</h3>' +
    '<div class="dem">' + k.demande + '</div>' +
    (ouv ? '<div class="resultat"><span class="ok">✓</span>' + val + '</div>'
         : '<button class="act" data-k="' + k.id + '"' + (bloq ? " disabled" : "") + '>' +
           (bloq ? "Établissez le plan d'abord" : (k.action || "Chercher le code")) + '</button>');
  return d;
}

function rendre(){
  const z = el("serrures"); z.innerHTML = "";
  const actes = MISSION.actes || [{serrures:MISSION.serrures.map(s => s.id)}];
  z.className = MISSION.actes ? "actes" : "serrures";
  let accessible = true;
  actes.forEach((a, i) => {
    const ouvert = accessible;
    const bloc = document.createElement("div");
    bloc.className = "acte" + (ouvert ? "" : " scelle");
    if(a.titre){
      bloc.innerHTML = '<div class="acte-tete"><span class="acte-num">Acte ' + (i+1) + '</span>' +
        '<h3>' + (ouvert ? a.titre : "Verrouillé") + '</h3></div>' +
        '<p class="acte-intro">' + (ouvert ? (a.intro || "") : "Terminez l'acte précédent pour découvrir la suite.") + '</p>';
    }
    const g = document.createElement("div"); g.className = "serrures";
    if(ouvert) a.serrures.forEach(sid => {
      const k = MISSION.serrures.find(s => s.id === sid);
      if(k) g.appendChild(carteServrure(k));
    });
    bloc.appendChild(g);
    z.appendChild(bloc);
    accessible = accessible && a.serrures.every(sid => S.ouvertes.has(sid));
  });
  z.querySelectorAll("[data-k]").forEach(b => b.addEventListener("click", () => serrure(b.dataset.k)));
  el("cpt-s").textContent = S.ouvertes.size + "/" + MISSION.serrures.length;

  const p = el("pieces"); p.innerHTML = "";
  MISSION.pieces.forEach((k, i) => {
    const ok = S.dispo.has(k.id);
    const b = document.createElement("button");
    b.className = "piece" + (ok ? (S.lues.has(k.id) ? " lu" : "") : " scellee");
    b.innerHTML = '<span class="num">' + String(i+1).padStart(2,"0") + '</span>' +
      (ok ? '<span class="titre">' + k.titre + '</span><span class="type">' + k.type + '</span>'
          : '<span class="verrou-ic">🔒</span><span class="titre">Pas encore accessible</span><span class="type">Un code la libère</span>');
    if(ok) b.addEventListener("click", () => lire(k.id));
    else b.disabled = true;
    p.appendChild(b);
  });
  el("cpt-p").textContent = S.dispo.size + "/" + MISSION.pieces.length;
  el("p-carnet").textContent = S.fiches.length;
  if(MISSION.personnages && !el("o-gens")){
    const b = document.createElement("button");
    b.className = "onglet"; b.id = "o-gens";
    b.innerHTML = 'Interroger<span class="pastille" id="p-gens"></span>';
    el("o-plan").parentNode.insertBefore(b, el("o-plan"));
    b.addEventListener("click", () => interroger());
  }
  if(MISSION.personnages && el("p-gens"))
    el("p-gens").textContent = (MISSION.budgetQuestions - S.questions);
  if(S.ouvertes.size === MISSION.serrures.length && !S.fini) el("zone-fin").hidden = false;
}
const fmt = n => n.toLocaleString("fr-FR");
/* Accepte « −8 000 € », « -8000 », « 1,80 » : le moins typographique
   comme le tiret, l'espace insécable, la virgule décimale. */
function lireNombre(t){
  return parseFloat(String(t).replace(/[\u2212\u2013\u2014]/g,"-")
    .replace(/[\s\u00A0€%]|jours?/gi,"").replace(",","."));
}

/* ---------- lire un document (retour possible) ---------- */
function lire(id, retour){
  const k = P(id);
  S.lues.add(id);
  modale(
    (retour ? '<div class="barre-retour"><button class="mini" id="rt">◀ Revenir au calcul</button>' +
              '<button class="mini" id="rl">Autres documents</button></div>' : "") +
    '<div class="kicker">' + k.type + '</div><h2>' + k.titre + '</h2>' +
    '<div class="doc">' + k.html + '</div><div class="tag">' + k.chap + '</div>', true);
  if(retour){
    el("rt").addEventListener("click", retour);
    el("rl").addEventListener("click", () => dossier(retour));
  }
  rendre();
}

/* ---------- consulter le dossier sans quitter un calcul ---------- */
function dossier(retour){
  modale('<div class="barre-retour"><button class="mini" id="rt">◀ Revenir au calcul</button></div>' +
    '<div class="kicker">Consultation libre — sans pénalité</div><h2>Les documents</h2>' +
    '<div class="mini-pieces">' + MISSION.pieces.filter(p => S.dispo.has(p.id)).map(p =>
      '<button class="mini-piece" data-p="' + p.id + '"><span class="ic">' + p.ic + '</span>' +
      '<span><b>' + p.titre + '</b><span>' + p.type + '</span></span></button>').join("") + '</div>');
  el("rt").addEventListener("click", retour);
  document.querySelectorAll("[data-p]").forEach(b =>
    b.addEventListener("click", () => lire(b.dataset.p, retour)));
}

/* ---------- plan de mission ---------- */
function ouvrirPlan(force){
  if(S.niveau === 1 || (S.planFait && !force)){
    S.planFait = true;
    modale('<div class="kicker">Méthode</div><h2>Votre plan de mission</h2>' +
      '<div class="liste-v">' + MISSION.plan.map((p,i) =>
        '<div class="etape pose"><span class="rang">' + (i+1) + '</span><span>' + p + '</span></div>').join("") + '</div>');
    rendre(); return;
  }
  let mis = [], reste = MISSION.plan.map((t,i) => ({t,i})).sort(() => Math.random()-.5);
  function dessine(msg){
    modale('<div class="kicker">Avant de commencer</div><h2>Dans quel ordre allez-vous procéder ?</h2>' +
      '<p style="font-size:14.5px;color:var(--gris);margin-top:8px">Touchez les étapes dans l\'ordre. Se tromper ne coûte que 2 points — vous pouvez essayer.</p>' +
      (msg || "") +
      '<div class="label" style="margin-top:16px">Votre plan</div>' +
      '<div class="liste-v">' + (mis.length ? mis.map((e,n) =>
        '<div class="etape pose"><span class="rang">' + (n+1) + '</span><span>' + e.t + '</span></div>').join("")
        : '<p class="vide">Rien pour l\'instant.</p>') + '</div>' +
      (reste.length ? '<div class="label" style="margin-top:16px">À placer</div><div class="liste-v">' +
        reste.map((e,n) => '<button class="etape" data-n="' + n + '"><span class="rang">+</span><span>' + e.t + '</span></button>').join("") + '</div>'
        : '<div class="saisie"><button id="valider" style="width:100%">Valider le plan</button></div>') +
      (mis.length ? '<button class="pouce-btn" style="margin-top:12px" id="reset">Tout recommencer</button>' : ""));
    document.querySelectorAll("[data-n]").forEach(b => b.addEventListener("click", () => {
      mis.push(reste.splice(+b.dataset.n,1)[0]); dessine();
    }));
    if(el("reset")) el("reset").addEventListener("click", () => { reste = reste.concat(mis); mis = []; dessine(); });
    if(el("valider")) el("valider").addEventListener("click", () => {
      if(mis.every((e,n) => e.i === n)){
        S.planFait = true; fermer(); neon("Plan validé"); majConf(+5,""); rendre();
      } else {
        majConf(-2, "Plan de mission : ordre à revoir au premier essai.");
        const prem = mis.findIndex((e,n) => e.i !== n);
        reste = reste.concat(mis); mis = [];
        dessine('<div class="explique"><div class="t">Pas tout à fait dans cet ordre</div>' +
          '<p>L\'étape « ' + MISSION.plan[Math.min(prem,MISSION.plan.length-1)] + ' » n\'arrive pas là.</p>' +
          '<div class="ex">Retenez la logique : <b>on mesure d\'abord les deux grandeurs, on les compare ensuite, et on ne cherche la cause qu\'après.</b> On ne peut pas conclure sur le compte en banque avant d\'avoir le matelas ET le besoin.</div></div>');
      }
    });
  }
  dessine();
}

/* ---------- une serrure : choisir l'outil, puis calculer ---------- */
function melange(t){
  const a = t.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function serrure(id){
  const k = MISSION.serrures.find(s => s.id === id);
  k._pouces = k._pouces || 0;
  let rates = [], saisi = "";
  /* Accompagné : 4 propositions. Autonome : 6, dont une venue d'un autre
     chapitre. Dans les deux cas l'ordre est tiré au sort, une fois pour
     toute la durée de la serrure — la bonne réponse n'a pas de place fixe. */
  let liste;
  if(S.niveau === 1){
    liste = k.candidats.slice(0, 4);
  } else {
    const ailleurs = melange(Object.keys(OUTILS).filter(o => !k.candidats.includes(o)));
    liste = k.candidats.concat(ailleurs.slice(0, 1));
  }
  liste = melange(liste);

  function etape1(expl){
    modale(
      '<div class="barre-retour"><button class="mini" id="doc">📁 Consulter les documents</button></div>' +
      '<div class="kicker">' + k.ic + ' ' + k.nom + '</div><h2>Quel outil utiliser ?</h2>' +
      '<p style="font-size:15px;color:#D3DEEF;margin-top:8px">' + k.demande + '</p>' +
      (S.niveau === 1 && k.boussole
        ? '<div class="boussole"><div class="t">Pour vous orienter</div><p>' + k.boussole + '</p></div>' : "") +
      (expl || "") +
      '<div class="outils">' + liste.map(o =>
        '<button class="outil' + (rates.includes(o) ? " rate" : "") + '" data-o="' + o + '">' +
        '<b>' + O(o).nom + '</b><span>' + O(o).simple + '</span></button>').join("") + '</div>' +
      pouces(k));
    el("doc").addEventListener("click", () => dossier(() => etape1(expl)));
    brancherPouce(k, () => etape1(expl));
    document.querySelectorAll("[data-o]").forEach(b => b.addEventListener("click", () => {
      const o = b.dataset.o;
      if(o === k.outil){ etape2(); return; }
      rates.push(o);
      majConf(-2, k.nom + " : « " + O(o).nom + " » choisi à la place de « " + O(k.outil).nom + " ».");
      const f = (k.faux && k.faux[o]) || {t:"Ce n'est pas le bon outil ici", p:O(o).simple, ex:O(o).exemple};
      etape1('<div class="explique"><div class="t">' + f.t + '</div><p>' + f.p + '</p>' +
             '<div class="ex">Exemple : ' + f.ex + '</div></div>');
    }));
  }

  function etape2(expl){
    const o = O(k.outil);
    modale(
      '<div class="barre-retour"><button class="mini" id="doc">📁 Consulter les documents</button>' +
      '<button class="mini" id="back">◀ Changer d\'outil</button></div>' +
      '<div class="kicker">' + k.ic + ' ' + k.nom + '</div><h2>' + o.nom + '</h2>' +
      '<p style="font-size:14.5px;color:var(--gris);margin-top:6px">' + o.simple + '</p>' +
      '<p style="font-size:13.5px;color:var(--gris);margin-top:8px;font-style:italic">' + k.demande + '</p>' +
      '<div class="formules">' + o.formules.map((f,i) =>
        '<div class="f">' + (o.formules.length > 1 ? '<span class="ou">' + (i === 0 ? "Une façon de le calculer" : "Ou, ce qui revient au même") + '</span>' : "") + f + '</div>').join("") + '</div>' +
      (expl || "") +
      '<div class="saisie"><input id="code" class="mono" inputmode="decimal" autocomplete="off" placeholder="' + k.unite + '" value="' + saisi + '">' +
      '<button id="go">Tester</button></div>' + pouces(k));
    el("doc").addEventListener("click", () => { saisi = el("code").value; dossier(() => etape2(expl)); });
    el("back").addEventListener("click", () => etape1());
    brancherPouce(k, () => { saisi = el("code").value; etape2(expl); });
    const inp = el("code");
    setTimeout(() => inp.focus(), 60);
    const tester = () => {
      const n = lireNombre(inp.value);
      if(isNaN(n)){ inp.classList.add("secousse"); setTimeout(()=>inp.classList.remove("secousse"),330); return; }
      if(Math.abs(n - k.reponse) <= k.tol){ reussir(k); return; }
      saisi = inp.value;
      majConf(-2, k.nom + " : code « " + inp.value + " » refusé.");
      const pg = (k.pieges||[]).find(p => Math.abs(n - p.val) <= Math.max(0.5, Math.abs(p.val)*0.02));
      const bloc = pg
        ? '<div class="explique"><div class="t">' + pg.t + '</div><p>' + pg.p + '</p><div class="ex">Exemple : ' + pg.ex + '</div></div>'
        : '<div class="explique"><div class="t">Ce n\'est pas le bon nombre</div><p>' +
          (Math.abs(n - k.reponse) <= Math.abs(k.reponse)*0.2
            ? "Vous êtes tout près. Revérifiez un des deux chiffres que vous avez pris dans le dossier."
            : "Reprenez les chiffres dans les documents : ils y sont tous, il n'y a rien à inventer.") +
          '</p><div class="ex">La formule est juste au-dessus. Les documents restent consultables avec le bouton en haut.</div></div>';
      etape2(bloc);
    };
    el("go").addEventListener("click", tester);
    inp.addEventListener("keydown", e => { if(e.key === "Enter") tester(); });
  }

  /* L'épreuve d'abord — comprendre — puis seulement le calcul.
     Une serrure sans outil est ouverte par l'épreuve seule. */
  const apresEpreuve = () => { if(k.outil) etape1(); else reussir(k); };
  if(k.epreuve && !S.epreuves.has(k.id)) lancerEpreuve(k, apresEpreuve);
  else apresEpreuve();
}

/* Ouverture d'une serrure, quelle que soit la voie : calcul ou épreuve. */
function reussir(k){
  if(S.ouvertes.has(k.id)) return;
  S.ouvertes.add(k.id);
  (k.debloque || []).forEach(c => S.dispo.add(c));
  if(k.fiche) S.fiches.push(k.fiche);
  fermer(); neon(k.neon || "Ouvert"); majConf(+14, "");
  rendre();
  if(k.reaction) setTimeout(() => reaction(k), 1100);
}

function reaction(k){
  modale('<div class="kicker">Message reçu</div><h2>' + CLIENT.prenom + ' répond</h2>' +
    '<div class="bulle"><span class="qui">' + CLIENT.prenom + ' · maintenant</span>' +
    (S.prenom ? S.prenom + ", " : "") + k.reaction + '</div>' +
    '<div class="saisie"><button id="ok" style="width:100%">Continuer</button></div>');
  el("ok").addEventListener("click", fermer);
}

/* ---------- coups de pouce ---------- */
/* En accompagné, le premier est offert : demander de l'aide ne doit
   jamais être le geste qui fait perdre des points. */
function coutPouce(k, i){ return (S.niveau === 1 && i === 0) ? 0 : k.pouces[i].cout; }
function pouces(k){
  let h = '<div class="pouce">';
  for(let i = 0; i < k._pouces; i++) h += '<div class="pouce-txt">' + k.pouces[i].txt + '</div>';
  if(k._pouces < k.pouces.length){
    const noms = ["Un coup de pouce", "Un indice plus précis", "Montrer le calcul"];
    const c = coutPouce(k, k._pouces);
    h += '<button class="pouce-btn" id="pouce">' + noms[k._pouces] +
         (c === 0 ? ' · offert' : ' · −' + c) + '</button>';
  }
  return h + '</div>';
}
function brancherPouce(k, redraw){
  const b = el("pouce");
  if(!b) return;
  b.addEventListener("click", () => {
    majConf(-coutPouce(k, k._pouces), "");
    k._pouces++; S.pouces++; redraw();
  });
}

/* ---------- onglets ---------- */
el("o-plan").addEventListener("click", () => ouvrirPlan(false));
el("o-outils").addEventListener("click", () => {
  modale('<div class="kicker">Consultation libre — sans pénalité</div><h2>Vos outils</h2>' +
    '<p style="font-size:14.5px;color:var(--gris);margin-top:6px">Toutes les formules de l\'année, expliquées simplement.</p>' +
    '<div class="outils" style="max-height:58vh;overflow-y:auto">' + Object.keys(OUTILS).map(id => {
      const o = O(id);
      return '<div class="outil" style="cursor:default"><b>' + o.nom + '</b><span>' + o.simple + '</span>' +
        '<span class="mono" style="font-size:11.5px;color:var(--ambre);margin-top:6px">' + o.formules.join("  ·  ") + '</span>' +
        '<span style="margin-top:5px">Exemple : ' + o.exemple + '</span></div>';
    }).join("") + '</div>');
});
el("o-carnet").addEventListener("click", () => {
  let h = '<h2>Votre carnet</h2>';
  h += S.fiches.length
    ? S.fiches.map(f => '<div class="fiche"><h3>' + f.titre + '</h3><div class="f">' + f.f + '</div><p>' + f.txt + '</p>' +
        '<div class="ex">' + f.ex + '</div></div>').join("")
    : '<p class="vide">Vide pour l\'instant. Chaque code trouvé y ajoute une fiche.</p>';
  h += '<div class="zone-h5p"><div class="label">Le vocabulaire</div>' +
    (S.lexFait ? '<p style="margin-top:8px;font-size:14.5px">Vocabulaire parcouru. <b style="color:var(--menthe)">+8 de confiance.</b></p>'
      : '<p style="margin-top:8px;font-size:14.5px;color:var(--gris)">Huit mots expliqués simplement, avec un exemple à chaque fois. Facultatif, mais ça rassure ' + CLIENT.prenom + ' : +8 de confiance.</p>' +
        '<button class="pouce-btn" id="lex" style="margin-top:10px">Réviser le vocabulaire</button>') + '</div>';
  modale(h);
  if(el("lex")) el("lex").addEventListener("click", lexique);
});

function lexique(){
  if(H5P_PATH){ modale('<h2>Vocabulaire</h2><div id="h5p-cible" style="margin-top:14px"></div>'); return; }
  let i = 0, face = 0;
  function dessine(){
    const t = MISSION.lexique[i];
    modale('<div class="kicker">Vocabulaire · ' + (i+1) + " / " + MISSION.lexique.length + '</div>' +
      '<h2>En mots simples</h2>' +
      '<div class="carte-lex" id="cl"><span class="terme">' + t.terme + '</span>' +
      (face ? '<span class="def">' + t.def + '</span><span class="ex">' + t.ex + '</span>'
            : '<span class="def" style="opacity:.45">touchez pour voir l\'explication</span>') + '</div>' +
      '<div class="saisie"><button id="nx" style="width:100%">' + (face ? "Suivant" : "Voir l'explication") + '</button></div>');
    const suite = () => {
      if(!face){ face = 1; dessine(); return; }
      face = 0; i++;
      if(i >= MISSION.lexique.length){
        if(!S.lexFait){ S.lexFait = true; majConf(+8,""); }
        fermer(); neon("Acquis"); rendre();
      } else dessine();
    };
    el("nx").addEventListener("click", suite);
    el("cl").addEventListener("click", () => { if(!face) suite(); });
  }
  dessine();
}

/* ---------- rapport final ---------- */
el("btn-rapport").addEventListener("click", () => { S.rapIdx = 0; poser(); });
function poser(){
  const q = MISSION.rapport[S.rapIdx];
  if(!S.ordre[S.rapIdx]) S.ordre[S.rapIdx] = melange(q.choix.map((c,i) => i));
  const ordre = S.ordre[S.rapIdx];
  modale('<div class="barre-retour"><button class="mini" id="doc">📁 Consulter les documents</button></div>' +
    '<div class="kicker">Recommandation · ' + (S.rapIdx+1) + " / " + MISSION.rapport.length + '</div>' +
    '<h2>' + q.q + '</h2><div class="choix">' +
    ordre.map(n => '<button data-c="' + n + '">' + q.choix[n].t + '</button>').join("") + '</div><div id="ap"></div>');
  el("doc").addEventListener("click", () => dossier(poser));
  document.querySelectorAll("[data-c]").forEach(b => b.addEventListener("click", () => {
    const c = q.choix[+b.dataset.c];
    document.querySelectorAll("[data-c]").forEach(x => {
      x.disabled = true;
      x.classList.add(q.choix[+x.dataset.c].bon ? "bon" : "mauvais");
    });
    if(c.bon){ S.rapJustes++; majConf(+8,""); }
    else majConf(-3, "Recommandation " + (S.rapIdx+1) + " : réponse à revoir.");
    el("ap").innerHTML = '<div class="explique"><div class="t">' + (c.bon ? "Exactement" : "Pas tout à fait") + '</div><p>' + c.r + '</p></div>' +
      '<div class="saisie"><button id="sv" style="width:100%">' +
      (S.rapIdx+1 < MISSION.rapport.length ? "Question suivante" : "Rendre le rapport") + '</button></div>';
    el("sv").addEventListener("click", () => {
      S.rapIdx++;
      if(S.rapIdx < MISSION.rapport.length) poser(); else { fermer(); finir(); }
    });
  }));
}

function finir(){
  S.fini = true; clearInterval(S.timer);
  signaler("fin", {
    mission: MISSION.ref,
    enseigne: MISSION.enseigne,
    niveau: S.niveau,
    score: S.conf,
    duree: S.sec,
    pouces: S.pouces,
    rapport: S.rapJustes + "/" + MISSION.rapport.length,
    reussie: S.rapJustes === MISSION.rapport.length
  });
  const m = Math.floor(S.sec/60), s = S.sec%60;
  const sauve = S.rapJustes === MISSION.rapport.length;
  const titre = S.conf >= 90 ? "Mission réussie, sans une fausse note"
    : S.conf >= 70 ? "Mission réussie" : "Mission bouclée";
  modale('<div class="kicker">Mission ' + MISSION.ref + '</div>' +
    '<h2 style="font-size:26px">' + titre + '</h2>' +
    '<div class="bulle" style="margin-top:14px"><span class="qui">' + CLIENT.prenom + ' · ce soir</span>' +
      (sauve ? (S.prenom ? S.prenom + ", " : "") + "j'ai appelé le fournisseur. On solde les anciennes collections dès samedi. Vous m'avez évité de fermer — et surtout, j'ai enfin compris pourquoi. Merci."
             : (S.prenom ? S.prenom + ", " : "") + "j'ai compris l'essentiel. Il faut que je regarde ce stock de plus près. On se rappelle.") +
    '</div>' +
    '<div class="bilan">' +
      '<div class="stat"><span class="label">Confiance</span><div class="v">' + S.conf + '</div></div>' +
      '<div class="stat"><span class="label">Durée</span><div class="v">' + m + "'" + String(s).padStart(2,"0") + '</div></div>' +
      '<div class="stat"><span class="label">Coups de pouce</span><div class="v">' + S.pouces + '</div></div>' +
      '<div class="stat"><span class="label">Recommandation</span><div class="v">' + S.rapJustes + '/' + MISSION.rapport.length + '</div></div>' +
    '</div>' +
    '<div class="label">Ce que vous savez faire maintenant</div>' +
    '<ul class="recap">' + S.fiches.map(f => '<li>' + f.titre + ' — ' + f.f + '</li>').join("") + '</ul>' +
    (S.ratages.length ? '<div class="label" style="margin-top:18px">À retravailler</div><ul class="recap">' +
      S.ratages.slice(0,8).map(e => '<li>' + e + '</li>').join("") + '</ul>'
      : '<p style="margin-top:16px;font-size:14.5px;color:var(--menthe)">Aucune erreur sur ce dossier. Refaites-le en autonomie pour corser l\'affaire.</p>') +
    '<div class="saisie"><button id="rj" style="width:100%">Refaire la mission</button></div>');
  el("rj").addEventListener("click", () => location.reload());
}

/* ════════════════════════════════════════════════════════════
   LES ÉPREUVES
   Quatre mécaniques, une par manière de comprendre :
   classer, associer, reconstituer, confronter.
   ════════════════════════════════════════════════════════════ */

function lancerEpreuve(k, suite){
  const e = k.epreuve;
  const fini = () => {
    S.epreuves.add(k.id);
    (e.debloque || []).forEach(p => S.dispo.add(p));
    rendre();
    if(e.reussite){
      modale('<div class="kicker">' + k.nom + '</div><h2>' + (e.reussite.titre || "Vous y voyez plus clair") + '</h2>' +
        '<div class="explique" style="margin-top:14px"><p>' + e.reussite.txt + '</p></div>' +
        '<div class="saisie"><button id="ok" style="width:100%">Continuer</button></div>');
      el("ok").addEventListener("click", suite);
    } else suite();
  };
  if(e.type === "classement")  return epClassement(k, fini);
  if(e.type === "appariement") return epAppariement(k, fini);
  if(e.type === "document")    return epDocument(k, fini);
  if(e.type === "temoin")      return epTemoin(k, fini);
  fini();
}

function enteteEpreuve(k, retour){
  return '<div class="barre-retour"><button class="mini" id="doc">📁 Consulter les documents</button></div>' +
    '<div class="kicker">' + k.ic + ' ' + k.nom + '</div><h2>' + k.epreuve.titre + '</h2>' +
    '<p class="consigne">' + k.epreuve.consigne + '</p>';
}
function brancherDoc(retour){
  if(el("doc")) el("doc").addEventListener("click", () => dossier(retour));
}
function blocErreur(x){
  return '<div class="explique"><div class="t">' + x.t + '</div><p>' + x.p + '</p>' +
         (x.ex ? '<div class="ex">Exemple : ' + x.ex + '</div>' : "") + '</div>';
}

/* ── 1. CLASSER : ranger les postes dans les bonnes masses.
   Tant que le classement est faux, les totaux n'existent pas. ── */
function epClassement(k, fini){
  const e = k.epreuve;
  const reste = e.items.map((it,i) => ({...it, i}));
  const place = {};
  e.categories.forEach(c => place[c.id] = []);
  let i = 0, expl = "";

  function dessine(){
    if(i >= reste.length){
      const tot = e.categories.map(c =>
        '<tr><td>' + c.nom + '</td><td>' + fmt(place[c.id].reduce((a,b) => a + b, 0)) + ' €</td></tr>').join("");
      modale('<div class="kicker">' + k.nom + '</div><h2>Classement terminé</h2>' +
        '<p class="consigne">Les masses se totalisent d\'elles-mêmes. Voilà ce que vous venez de reconstituer.</p>' +
        '<table class="reg" style="color:#EAF0FA">' + tot + '</table>' +
        '<div class="saisie"><button id="ok" style="width:100%">Continuer</button></div>');
      el("ok").addEventListener("click", fini);
      return;
    }
    const it = reste[i];
    modale(enteteEpreuve(k) +
      '<div class="avance">' + (i) + ' / ' + reste.length + ' postes classés</div>' +
      '<div class="poste"><span class="poste-nom">' + it.t + '</span>' +
      '<span class="poste-val mono">' + fmt(it.val) + ' €</span></div>' + expl +
      '<div class="cats">' + e.categories.map(c =>
        '<button class="cat" data-c="' + c.id + '"><b>' + c.nom + '</b><span>' + c.aide + '</span></button>').join("") + '</div>');
    brancherDoc(dessine);
    document.querySelectorAll("[data-c]").forEach(b => b.addEventListener("click", () => {
      if(b.dataset.c === it.cat){
        place[it.cat].push(it.val); i++; expl = ""; dessine();
      } else {
        majConf(-1, k.nom + " : « " + it.t + " » mal classé.");
        expl = blocErreur(it.expl);
        dessine();
      }
    }));
  }
  dessine();
}

/* ── 2. ASSOCIER : chaque terme compris révèle un chiffre du code. ── */
function epAppariement(k, fini){
  const e = k.epreuve;
  let trouves = {}, choisi = null, expl = "";
  const defs = melange(e.paires.map((p,i) => i));

  function dessine(){
    const restants = e.paires.map((p,i) => i).filter(i => !(i in trouves));
    if(!restants.length){
      const code = e.paires.map(p => p.chiffre).join("");
      modale('<div class="kicker">' + k.nom + '</div><h2>Le code s\'assemble</h2>' +
        '<p class="consigne">Chaque terme compris a livré son chiffre.</p>' +
        '<div class="code-final mono">' + code + '</div>' +
        '<div class="saisie"><button id="ok" style="width:100%">Ouvrir</button></div>');
      el("ok").addEventListener("click", fini);
      return;
    }
    modale(enteteEpreuve(k) +
      '<div class="code-piste mono">' + e.paires.map((p,i) =>
        '<span class="' + (i in trouves ? "trouve" : "") + '">' + (i in trouves ? p.chiffre : "?") + '</span>').join("") + '</div>' +
      expl +
      '<div class="label" style="margin-top:16px">Les termes du courrier</div>' +
      '<div class="termes">' + e.paires.map((p,i) =>
        '<button class="terme' + (i in trouves ? " ok" : (choisi === i ? " actif" : "")) + '" data-t="' + i + '">' +
        p.terme + '</button>').join("") + '</div>' +
      '<div class="label" style="margin-top:16px">Ce que ça veut dire</div>' +
      '<div class="defs">' + defs.filter(i => !(i in trouves)).map(i =>
        '<button class="def" data-d="' + i + '">' + e.paires[i].def + '</button>').join("") + '</div>');
    brancherDoc(dessine);
    document.querySelectorAll("[data-t]").forEach(b => b.addEventListener("click", () => {
      if(+b.dataset.t in trouves) return;
      choisi = +b.dataset.t; expl = ""; dessine();
    }));
    document.querySelectorAll("[data-d]").forEach(b => b.addEventListener("click", () => {
      if(choisi === null){ expl = blocErreur({t:"Choisissez d'abord un terme", p:"Touchez un terme du courrier, puis la définition qui lui correspond."}); dessine(); return; }
      const d = +b.dataset.d;
      if(d === choisi){ trouves[d] = true; choisi = null; expl = ""; }
      else {
        majConf(-1, k.nom + " : « " + e.paires[choisi].terme + " » mal défini.");
        expl = blocErreur(e.paires[choisi].expl);
        choisi = null;
      }
      dessine();
    }));
  }
  dessine();
}

/* ── 3. RECONSTITUER : un document abîmé, des montants à retrouver. ── */
function epDocument(k, fini){
  const e = k.epreuve;
  const vals = {};
  let expl = "";

  function dessine(){
    modale(enteteEpreuve(k) +
      '<div class="doc-abime">' + (e.entete || "") +
      '<table class="reg">' + e.lignes.map(l =>
        '<tr' + (l.total ? ' class="total"' : "") + '><td>' + l.label + '</td><td>' +
        (l.champ
          ? '<input class="champ-doc mono" data-f="' + l.champ + '" inputmode="decimal" placeholder="?" value="' + (vals[l.champ] || "") + '">'
          : l.valeur) + '</td></tr>').join("") + '</table>' +
      (e.note ? '<p class="note-doc">' + e.note + '</p>' : "") + '</div>' + expl +
      '<div class="saisie"><button id="go" style="width:100%">Vérifier</button></div>' + pouces(k));
    brancherDoc(dessine);
    brancherPouce(k, dessine);
    document.querySelectorAll("[data-f]").forEach(inp =>
      inp.addEventListener("input", () => vals[inp.dataset.f] = inp.value));
    el("go").addEventListener("click", () => {
      document.querySelectorAll("[data-f]").forEach(inp => vals[inp.dataset.f] = inp.value);
      for(const c of e.champs){
        const n = lireNombre(vals[c.id] || "");
        if(isNaN(n) || Math.abs(n - c.reponse) > c.tol){
          majConf(-1, k.nom + " : « " + c.label + " » incorrect.");
          expl = blocErreur(isNaN(n) ? {t:"Il manque une valeur", p:"Remplissez toutes les cases avant de vérifier."} : c.expl);
          dessine(); return;
        }
      }
      expl = "";
      modale('<div class="kicker">' + k.nom + '</div><h2>Document reconstitué</h2>' +
        '<div class="explique" style="margin-top:14px"><p>' + e.conclusion + '</p></div>' +
        '<div class="saisie"><button id="ok" style="width:100%">Continuer</button></div>');
      el("ok").addEventListener("click", fini);
    });
  }
  dessine();
}

/* ── 4. CONFRONTER : un témoignage, des documents. L'un des deux ment. ── */
function epTemoin(k, fini){
  const e = k.epreuve;
  function dessine(){
    modale(enteteEpreuve(k) +
      '<div class="bulle"><span class="qui">' + e.declaration.qui + '</span>' + e.declaration.txt + '</div>' +
      '<div class="label" style="margin-top:16px">Quelle pièce le contredit ?</div>' +
      '<div class="choix">' + e.choix.map((c,i) =>
        '<button data-c="' + i + '">' + c.t + '</button>').join("") + '</div><div id="ap"></div>');
    brancherDoc(dessine);
    document.querySelectorAll("[data-c]").forEach(b => b.addEventListener("click", () => {
      const c = e.choix[+b.dataset.c];
      if(c.bon){
        document.querySelectorAll("[data-c]").forEach(x => { x.disabled = true;
          x.classList.add(e.choix[+x.dataset.c].bon ? "bon" : "mauvais"); });
        el("ap").innerHTML = '<div class="explique"><div class="t">Vous le tenez</div><p>' + c.r + '</p></div>' +
          '<div class="saisie"><button id="ok" style="width:100%">Continuer</button></div>';
        el("ok").addEventListener("click", fini);
      } else {
        majConf(-2, k.nom + " : mauvaise pièce désignée.");
        el("ap").innerHTML = blocErreur({t:"Ce n'est pas cette pièce", p:c.r});
        b.disabled = true; b.classList.add("mauvais");
      }
    }));
  }
  dessine();
}

/* ════════════════════════════════════════════════════════════
   LES INTERROGATOIRES
   Le temps est compté : chaque question en consomme.
   Choisir qui l'on va voir fait partie de l'enquête.
   ════════════════════════════════════════════════════════════ */
function interroger(perso){
  const budget = MISSION.budgetQuestions;
  const reste = budget - S.questions;
  if(!perso){
    modale('<div class="kicker">Il vous reste ' + reste + ' question' + (reste > 1 ? "s" : "") + '</div>' +
      '<h2>Qui allez-vous voir ?</h2>' +
      '<p class="consigne">Chaque question prend du temps. Vous ne pourrez pas tout demander : choisissez.</p>' +
      '<div class="gens">' + MISSION.personnages.map(p =>
        '<button class="gens-c" data-g="' + p.id + '"><span class="ic">' + p.ic + '</span>' +
        '<span><b>' + p.nom + '</b><span>' + p.role + '</span></span></button>').join("") + '</div>');
    document.querySelectorAll("[data-g]").forEach(b =>
      b.addEventListener("click", () => interroger(MISSION.personnages.find(p => p.id === b.dataset.g))));
    return;
  }
  const dejaVues = perso.questions.filter(q => S.vus.has(perso.id + q.q));
  modale('<div class="barre-retour"><button class="mini" id="rt">◀ Les autres personnes</button></div>' +
    '<div class="kicker">' + perso.role + '</div><h2>' + perso.ic + ' ' + perso.nom + '</h2>' +
    (perso.intro ? '<p class="consigne">' + perso.intro + '</p>' : "") +
    dejaVues.map(q => '<div class="echange"><div class="q">' + q.q + '</div><div class="bulle">' + q.r + '</div></div>').join("") +
    '<div class="label" style="margin-top:16px">' + (reste > 0 ? "Vous pouvez demander (" + reste + " restantes)" : "Vous n'avez plus le temps") + '</div>' +
    '<div class="questions">' + perso.questions.filter(q => !S.vus.has(perso.id + q.q)).map((q,i) =>
      '<button class="q-btn" data-q="' + i + '"' + (reste > 0 ? "" : " disabled") + '>' + q.q + '</button>').join("") + '</div>');
  el("rt").addEventListener("click", () => interroger());
  const dispo = perso.questions.filter(q => !S.vus.has(perso.id + q.q));
  document.querySelectorAll("[data-q]").forEach(b => b.addEventListener("click", () => {
    const q = dispo[+b.dataset.q];
    S.vus.add(perso.id + q.q); S.questions++;
    (q.debloque || []).forEach(p => S.dispo.add(p));
    if(q.cle) majConf(+3, "");
    rendre();
    interroger(perso);
  }));
}
