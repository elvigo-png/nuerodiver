/* este código funciona sólo una vez cada botón.
buscar el error y corregirlo*/
window.addEventListener("load", function(){
  this.document.getElementById("loader").classList.toggle("loader2");
  this.document.getElementById("carga").classList.toggle("cargado");
})


const buttons = document.querySelectorAll('.acerca-btn');
const textElements = document.querySelectorAll('.primero');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('zoom');

  });
});

const element1 = document.querySelector(".primero");
element1.addEventListener("click", () => element1.classList.toggle("zoom"));


const element2 = document.querySelector(".segundo");
element2.addEventListener("click", () => element2.classList.toggle("zoom2"));

const element3 = document.querySelector(".tercero");
element3.addEventListener("click", () => element3.classList.toggle("zoom3"));

const element4 = document.querySelector(".cuarto");
element4.addEventListener("click", () => element4.classList.toggle("zoom4"));

const element5 = document.querySelector(".quinto");
element5.addEventListener("click", () => element5.classList.toggle("zoom5"));

const element6 = document.querySelector(".sexto");
element6.addEventListener("click", () => element6.classList.toggle("zoom6"));

const element7 = document.querySelector(".septimo");
element7.addEventListener("click", () => element7.classList.toggle("zoom7"));

const element8 = document.querySelector(".octavo");
element8.addEventListener("click", () => element8.classList.toggle("zoom8"));