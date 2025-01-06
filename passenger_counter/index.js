
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById('save-el');

// on fait un compteur pour ajouter le nombre de ppersones qui est entrée
let count = 0;

function increment()
{
    count++;
    countEl.textContent = count;
}
// on fait un initialiseur du nombre de personnes qui rentre
function innitialize(){
    count = 0;
    countEl.textContent = count;
}

// on fait enregistrer le nombre de personne qui est entrer

let espace = " - ";

function save()
{
    saveEl.innerHTML += count + espace;
    increment();


    console.log(count);
}


