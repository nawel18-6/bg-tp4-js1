// cours tableau slides 39 

function f1() {
  etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
  for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]);
  }
}
// cour objet slide 40
function f2() {
  const etudiant = { nom: "John", prenom: "Doe", age: 30 };
  console.log(etudiant);           //console.log slide 34
}


// tableau d'objets et boucle foreach et fonctions slides 41 et 45 et 46
function f3() {
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 },
  ];
  etudiants.forEach(function (etudiant) {
    console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
  });
}
