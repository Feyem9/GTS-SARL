// ----------------------------------------------------------------------
// Ici je travaille sur la  partie publicite 
// ----------------------------------------------------------------------
const pub = document.querySelector('.div-container');
let color = ["black","blue","violet","orange","pink","red","yellow","green","white","indigo","#ff19ff04",
                "white", "green", "yellow", "red", "pink", "orange", "violet", "blue", "black",
                "black","blue","violet","orange","pink","red","yellow","green","white","indigo",
                "white", "green", "yellow", "red", "pink", "orange", "violet", "blue", "black" ];
let color2 = ["white","white","white","white","white","white","black","black","black","white"];
var counter = 0;
console.log(color);
console.log(color2);
// setTimeout(() => {
//     for(let i = 0 ; i < Array.length-1 ; i++){}
// }, 20000);
 setInterval(() => {
    
   pub.style.background = color[counter];
   if(counter <= 40){
    counter++
   }
   console.log(pub.style.background); 

   
   setInterval(() => {
      
      pub.style.color = color2[counter];
      if(counter <= 10){
       counter++
      }
      console.log(pub.style.background); 
   
      
   }, 2000);
}, 5000);

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// var i = 0;
// var image = [];
// var time = 5000;

// image[0] = 'piano.jpg';
// image[1] = 'm.jpg';
// image[2] = 'musuc.jpg';

// function changeImg() {
//   document.slide.src = /image/image[i];
//   if (i < image.length - 1) {
//     i++;
//   }else{
//     i = 0;
//   }

//   setTimeout("changeImg()", time);

// }

// window.onload = changeImg;



// ---------------------------------------------------------


// var time = 100;
// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(function(button) {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active

//     // setTimeout("slides.children[newIndex].dataset.active() " , time);
//   })
//   // window.onload = slides.children[newIndex].dataset.active ;
// })

// var counter = 1;

// setInterval(() => {
//   document.querySelector('#alt' + counter).checked = true;
//   counter++;
//   if (counter > 3){
//     counter = 1 ;
//   }
// }, 1000);


// -------------------------------------------------------------------------------
// ici  je travaille sur le diaporama de mes images
// -------------------------------------------------------------------------------

// Variables globales
let compteur = 0; // Compteur qui permet de connaître l'image sur laquelle on se trouve
let timer, elements, slides, slideWidth, speed, transition;

window.onload = () => {
    // On récupère le diaporama
    const diapo = document.querySelector(".diapo");
    // On récupère le data-speed
    speed = diapo.dataset.speed;
    transition = diapo.dataset.transition;

    elements = document.querySelector(".elements");

    // On clone la 1ère image
    let firstImage = elements.firstElementChild.cloneNode(true);

    // On injecte le clone à la fin du diapo
    elements.appendChild(firstImage);

    slides = Array.from(elements.children);

    // On récupère la largeur d'une slide
    slideWidth = diapo.getBoundingClientRect().width;

    // On récupère les flèches
    let next = document.querySelector("#nav-droite");
    let prev = document.querySelector("#nav-gauche");

    // On gère le clic
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);

    // On automatise le défilement
    timer = setInterval(slideNext, speed);

    // On gère l'arrêt et la reprise
    diapo.addEventListener("mouseover", stopTimer);
    diapo.addEventListener("mouseout", startTimer);
}

/**
 * Cette fonction fait défiler le diaporama vers la droite
 */
function slideNext(){
    // On incrémente le compteur
    compteur++;
    elements.style.transition = transition+"ms linear";

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;

    // On attend la fin de la transition et on "rembobine" de façon cachée
    setTimeout(function(){
        if(compteur >= slides.length - 1){
            compteur = 0;
            elements.style.transition = "unset";
            elements.style.transform = "translateX(0)";
        }
    }, transition);
}

/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
function slidePrev(){
    // On décrémente le compteur
    compteur--;
    elements.style.transition = transition+"ms linear";

    if(compteur < 0){
        compteur = slides.length - 1;
        let decal = -slideWidth * compteur;
        elements.style.transition = "unset";
        elements.style.transform = `translateX(${decal}px)`;
        setTimeout(slidePrev, 1);
    }

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;
    
}

function stopTimer(){
    clearInterval(timer);
}

function startTimer(){
    timer = setInterval(slideNext, speed);
}

// --------------------------------------------------------------------
// ici j'ajoute un texte en alert en utilisant un set time out
// --------------------------------------------------------------------

setTimeout(() => {
    alert('formons nous quand il est encore temps et formons nos enfants.');
    confirm('avez vous choisi votre instrument ?');
    alert('dites nous en comentaire ce qui vous fascine le mieux dans la musique');
    let nom = prompt('quel est votre nom?');
    alert(" merci " + nom);
    
}, 10000);

// function ajouterText(text){
//     const nouveauText = document.createElement("span");
//     nouveauText.innerHTML = `<p>${text}</P>`;
//     document.querySelector("div").appendChild(nouveauText)
// }
// ajouterText = ('formons nous quand il est encore temps et formons nos enfants.');

// ----------------------------------------------------------------------
// ici je travaille sur la partite citation
// ----------------------------------------------------------------------




// -------------------------------------------------------------
// ici je travaille sur les bouttons GET STARTED ET WATCH DEMO
// -------------------------------------------------------------

const btn = document.querySelectorAll('button');

btn.forEach(button => {
    button.addEventListener('click' , function(e){

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientX - e.target.offsetTop;
        let riples =  document.createElement('span');

        riples.style.left = x + 'px';
        riples.style.top = y + 'px';
        this.appendChild(riples);

        setTimeout(() => {
                riples.remove()
        }, 10000);
    })
});

// ---------------------------------------------------------------------
// ICI JE TRAVAILLE SUR L'ORIENTATION DES ELEVES PROFFESSEUR ET VISITEUR
// ---------------------------------------------------------------------

 let popup = document.getElementById("popup-prof");
 let popup2 = document.getElementById("popup-eleve");
 let popup3 = document.getElementById("popup-visit");

 function openPopup1() {
    popup.classList.add("open-popup");
 }
 function closePopup1() {
    popup.classList.remove("open-popup");
 }
 function openPopup2() {
    popup2.classList.add("open-popup");
 }
 function closePopup2() {
    popup2.classList.remove("open-popup");
 }
 function openPopup3() {
    popup3.classList.add("open-popup");
 }
 function closePopup3() {
    popup3.classList.remove("open-popup");
 }