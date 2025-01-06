

// afficher jeorge Smith
let firstName = "jeorge ";
let lastName = "Smith";

let fullName = firstName + lastName;
console.log(fullName);

// afficher Hi there, jeorge!
function hi ()
{
    let hi = "Hi there, "
    
    console.log(hi + firstName + "!");
}

console.log(hi());

// aller de 3 a 10 seulement avec add3points() et remove1point()
let myPoints = 3;
function add3points()
{
    myPoints+=3;
}
function remove1point()
{
    myPoints--;
}

add3points(myPoints);
add3points(myPoints);
add3points(myPoints);
remove1point(myPoints);
remove1point(myPoints);

console.log(myPoints);


// quand on clique sur le bouton une erreur s'affiche et si on clique suur le texte il disparait
let erreur = document.getElementById("error");

function error()
{
    erreur.textContent = "Something went wrong, please try again";
}
function ok()
{
    erreur.textContent = "";
}

// faire une calculatrice

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
let signe = document.getElementById("signe");
document.getElementById("num2-el").textContent = num2;
let sum = document.getElementById("sum-el");

function add()
{
    sum.textContent ="Sum: ";
    sum.textContent += num1 + num2;
    signe.textContent = "+";
}
function subtract()
{
    sum.textContent ="Sum: ";
    sum.textContent += num1 - num2;
    signe.textContent = "-";
}
function divide()
{
    sum.textContent ="Sum: ";
    sum.textContent += num1 / num2;
    signe.textContent = "/";
}
function multiply()
{
    sum.textContent ="Sum: ";
    sum.textContent += num1 + num2;
    signe.textContent = "*";
}