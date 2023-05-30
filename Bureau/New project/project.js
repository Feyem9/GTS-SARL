// travail sur la pub
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

// ----------------------------------------------------------------------------------------------------------------------------------------
// citation





// ---------------------------------------------------------------
// animation
let compteur = 0;
let timer,elements,slides, slidewidth,speed;

window.onload = ()=>{
    const anime = document.querySelector('.animation');
    speed = anime.dataset.speed;

    elements = document.querySelector(".elements");
    let firstImage = elements.firstElementChild.cloneNode(true);
    elements.appendChild(firstImage);

    slides = Array.from(elements.children);
    

    slidewidth = anime.getBoundingClientRect().width;

    let next = document.querySelector("#nav-droite");
    let prev = document.querySelector("#nav-gauche");

      next.addEventListener("click", slidenext);
      prev.addEventListener("click", slideprev);

      timer = setInterval(slidenext, 5000)

}
function slidenext(){
    compteur++;
      elements.style.transition = "1s linear";
     let decal = -slidewidth*compteur; 
    elements.style.transfom = `translateX($ {decal}px)`; 

    setTimeout(function()  {
      if (compteur >= slides.lenght-1){
         compteur = 0;
          elements.style.transition = "unset";
          elements.style.transfom = "translateX(0)";
      }
    }, 1000);
    
}

function slideprev(){
   compteur--;
     elements.style.transition = "1s linear";


     if (compteur < 0){
        compteur = slides.lenght-1 ;
        let decal = -slidewidth*compteur; 
         elements.style.transition = "unset";
         elements.style.transfom = `translateX($ {decal}px)`;
         setTimeout(slideprev, 1);
     }
     let decal = -slidewidth*compteur; 
     elements.style.transfom = `translateX($ {decal}px)`;


   
}






// setTimeout(() => {
//     if (compteur >= slides.lenght-1){
//         // compteur = 0;
//         // elements.style.transition = "unset";
//         // elements.style.tranform = "translateX(0)";
//         slides[i]++;
//     }
// }, 200);
