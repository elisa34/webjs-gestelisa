const myElement = document.getElementById('container')


const newTest = document.createElement("div");
let test = document.getElementById("container");

test.appendChild(newTest); 




const newTet = document.createElement("div");
let tet = document.getElementById("container");
tet.appendChild(newTet);
newTet.innerHTML = ("<p>Elément 1</p>");


const newTete = document.createElement("div");

tet.appendChild(newTet);
newTete.innerHTML = ("<p>Elément 2</p>");
console.log (myElement);



function clickHandler(event) {
    console.log('Bouton clické');
}
 
const btn = document.getElementById('.btn');
btn.addEventListener('click', clickHandler);