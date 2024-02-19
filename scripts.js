console.log(document.title);

// Ejercicio 1
document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

// Ejercicio 2
const primeraGen = document.querySelectorAll("body > main > div:nth-child(6)")[0].children;

for (let i = 0; i < primeraGen.length; i++) {
    primeraGen[i].style.backgroundColor = "aliceblue";
}


// Ejercicio 3
let URLactual = window.location.href;
console.log(URLactual);


//Ejercicio 4
let URLdomain = window.location.host;
console.log(URLdomain);

//Ejercicio 5




document.querySelectorAll("body > main > div:nth-child(6) > div:nth-child(1) > span.infocard-lg-img > a > img");
// devuelve todo el elemento <img>


document.querySelector("body > main > div:nth-child(6) > div:nth-child(1) > span.infocard-lg-img > a > img").getAttributeNode("src");
// devuelve src="assets/bulbasaur.png"

document.querySelector("body > main").childNodes[11]
//devuelve <div class="infocard-list infocard-list-pkmn-lg">

document.querySelectorAll("main > div > div")
//lista de 890 infocards

document.querySelectorAll("main > div > div")[i]
// la i define todos los infocards

document.querySelectorAll("main > div > div")[i]
// la i define todos los infocards




let infoCards = document.querySelectorAll("main > div > div");

for (let i = 0; i < infoCards.length; i++) {
    console.log(infoCards[i]);
}

//let infoCards;

for (let i = 0; i < infoCards.length; i++) {
    infoCards = document.querySelectorAll("main > div > div")[i];
    console.log(infoCards += i);
}



document.querySelector("body > main > div:nth-child(6) > div:nth-child(1) > span.infocard-lg-img > a > img"); // devuelve todo el elemento <img>

document.querySelector("body > main > div:nth-child(6) > div:nth-child(1) > span.infocard-lg-img > a > img").getAttributeNode("src"); // devuelve src="assets/bulbasaur.png"


//6
document.querySelector("body > main > div:nth-child(6) > div:nth-child(1) > span.infocard-lg-img > a > img").getAttributeNode("src") = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";


"https://media.giphy.com/media/2v170e71aanfi/giphy.gif"


