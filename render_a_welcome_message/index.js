
let divWelcome = document.getElementById('welcome-el');

let name = " Per Harald Borgen";
let greeting = "Welcome back ";

divWelcome.innerHTML = greeting + name; // j'affiche le mesage de bienvenue et le prenom 

divWelcome.innerHTML += "👋"; // j'ajoute comme texte l'emoji