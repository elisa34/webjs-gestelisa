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



let buttonHome = document.querySelector(".button-home");
let CountButtonHomeClicks = 0;

buttonHome.addEventListener("click", function() {
  CountButtonHomeClicks += 1;
  console.log(CountButtonHomeClicks);
}); 

localStorage.setItem("prenom","elisa");
localStorage.getItem("prenom");

let voit1 = {
    voiture1 : "peugeot"
}
let car = JSON.stringify(voit1);
localStorage.setItem("voiture",voit1);


let voit2 = {
    voiture2 : "citroen"
}
let car = JSON.stringify(voit2);
localStorage.setItem("citroen",voit2);


let voit3 = {
    voiture3 : "audi"
}
let car = JSON.stringify(voit3);
localStorage.setItem("audi",voit3);


let voit4 = {
    voiture4 : "bmw"
}
let car = JSON.stringify(voit4);
localStorage.setItem("bmw",voit4);


let voit5 = {
    voiture5 : "peug"
}
let car = JSON.stringify(voit5);
localStorage.setItem("peug",voit5);
