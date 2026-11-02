let produit = {
  nom: "switch",
  prix: "400",
  quantite: "10",
};

let valeurStock = produit.quantite * produit.prix;

console.log("nom:" + produit.nom);
console.log("Prix:" + produit.prix);
console.log("Quantité:" + produit.quantite);
console.log("Valeur totale du stock:" + valeurStock);

let catalogue = [
  { nom: "PC", prix: 80000, quantite: 5 },
  { nom: "Souris", prix: 1500, quantite: 10 },
  { nom: "Clavier", prix: 3000, quantite: 8 },
  { nom: "Ecran", prix: 25000, quantite: 4 },
  { nom: "Casque", prix: 5000, quantite: 6 },
];

let somme = 0;

catalogue.forEach((p) => {
  somme += p.prix;
});

let moyenne = somme / catalogue.length;

console.log("Prix moyen :", moyenne);
for (let i = 0; i < catalogue.length; i++) {
  if (catalogue[i].prix > moyenne) {
    console.log(catalogue[i].nom + " : " + catalogue[i].prix);
  }
}

let totalStock = catalogue.reduce((acc, p) => acc + p.quantite, 0);
console.log("Total du stock :", totalStock);

function calculerStock(produit) {
  return produit.prix * produit.quantite;
}

for (let i = 0; i < catalogue.length; i++) {
  console.log(calculerStock(catalogue[i]));
}

function traiterCatalogue(catalogue, callback) {
    catalogue.forEach(callback);
}

// Afficher les noms
traiterCatalogue(catalogue, function(p) {
    console.log("Nom :", p.nom);
});

// Afficher les prix
traiterCatalogue(catalogue, function(p) {
    console.log("Prix :", p.prix);
});  