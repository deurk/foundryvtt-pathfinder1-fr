Id: dquiaDUn3NVmhn42
Name: Test : Connaissances (Plans)
Icon: systems/pf1/icons/skills/red_25.jpg
------------
///// INFORMATIONS
//
// Cette macro propose les différentes options pour un test de connaissances (plans)
//
// Base : Foundry VTT (0.6.6)
// Système : Pathfinder 1 (0.73.7)
// Module(s) nécessaire(s) : -
// Auteur(s) : Sven Werlen (Dorgendubal#3348)

const CHECKS = [
  { name: "Effectuer un test de connaissances (plans)", dd: "-" },
  { name: "" },
  { name: "Répondre à une question ayant trait à sa spécialité", dd: "10 (basique), 15 (facile), 20 (difficile) ou 30 (très difficile)" },
  { name: "Reconnaître un monstre et identifier ses particularités ou points faibles", dd: "5 (commun), 10 (normal) ou 15+ (rare) + FP du monstre" },
  { name: "" },
  { name: "Connaître le nom des plans", dd: "10" },
  { name: "Reconnaître le plan sur lequel le personnage se trouve", dd: "15" },
  { name: "Identifier l'origine d'une créature provenant d'un autre plan", dd: "20" },
]

// retrieve choice from storage
let rollMode = null
if (typeof(Storage) !== "undefined") {
  rollMode = localStorage.rollMode
} else {
  rollMode = MacrosPF1SkillChecksDialog.rollMode
}

const actors = MacrosPF1.getActors()
if( actors.length > 0 ) {
  new MacrosPF1SkillCheckDialog(null, {
    actorId: actors[0]._id,
    title: `Connaissances (Plans) : ${actors[0].name}`, 
    skillId: "kpl",
    checks: CHECKS,
    rollMode: rollMode
  }).render(true)
}
