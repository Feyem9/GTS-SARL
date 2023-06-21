
let names = ['banana', 'mango', 'aple', 'pawpaw', 'anana'];
console.log(names);

// function upper() {
//     for ( i = 0; i < names.length; i++) {
//         let name = names[i];
//         let  first = name.charAt(1);
//         let second = name.toUpperCase();
//         console.log(first);
//         console.log(second);
//     }
//     return first+second
// }
// // --------------------------------------------------------------------
// -----------------------------------------------------------------
let result = names.map(name => {
   let firstLater = name[0].toUpperCase();
   let restName = name.slice(1)
   name = firstLater + restName;
   // console.log(firstLater.toUpperCase());

   console.log('first letter after upp =>', name);

   return name;
});
console.log(result);

// -------------------------------------------------------------------
// -------------------------------------------------------------------
//
// ----------EXERCICE 1--------------

function multiply(nombre, fin) {
   for (let i = 0; i < fin; i++) {
      console.log(`${nombre} * ${i} = ${nombre * i}`);
      nombre
   }
}

for (let y = 0; y < 13; y++) {
   multiply(y, 13);
   console.log("----------------");
   console.log("----------------");
}


// ------------------------------------------------------------------------
// -----------EXERCICES 2--------------------------------------------------
// ------------------------------------------------------------------------


// regles:: il doit etre dovisé par un
// regle  2 il ne dois pas etre divisinle par un autre nombre que lui
// s'il est divise par un autre nombre que lui meme et retourne un entier il n'est pas premier
//  si le modulo de la division est  egal a zero c'est que le nombre n'est pas un nombre premier


function primeNumbers(number) {
   for (var i = 2; i < number; i++) {
      if (number % i === 0) {
         return false;
      }
   }
   return number > 1;
}
for (var i = 1; i < 1000; i++) {

   if (primeNumbers(i)) {
      console.log(i);
   }
}


//   --------------------------------------------------------------
// ----------------EXPLICATION-----------------------------------
// ----------------------------------------------------------------

/**
 * In the above program, the user is prompted to enter a number. The number entered by the user is checked if it is greater than 1 using if...else if... else statement.

    1 is considered neither prime nor composite.
    All negative numbers are excluded because prime numbers are positive.
    Numbers greater than 1 are tested using a for loop.

The for loop is used to iterate through the positive numbers to check if the number entered by the user is divisible by positive numbers (2 to user-entered number minus 1).

The condition number % i == 0 checks if the number is divisible by numbers other than 1 and itself.

    If the remainder value is evaluated to 0, that number is not a prime number.
    The isPrime variable is used to store a boolean value: either true or false.
    The isPrime variable is set to false if the number is not a prime number.
    The isPrime variable remains true if the number is a prime number.

 */
// ------------------------------------------------------------------------
// ------------------------------utilisation de la racine caré-------------
// ------------------------------------------------------------------------
//     function isPrime(n) {
//     if (n<2) return false;
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n%i === 0){return false;}
//     }
//     return n>1;
// }

// for(let i=0; i<1000; i++){
//     if(isPrime(i)){console.log(i);}
// }

// -------------------------------------------------------------------------
// ----------------------EXERCICES 3 ---------------------------------------
// -------------------------------------------------------------------------
//                                    ------ uising a for loop -------------

// function listSum(list,sum) {

//          list = [2,3,9,23,43,11,89];
//          sum = 0;
//          for (let numbers of list) {
//             sum += numbers;
//         }
//         console.log("la somme est",sum);
//       }

//       listSum();

let list = [2, 3, 9, 23, 43, 11, 89];
function total(list) {
   let sum = 0;
   for (let i = 0; i < list.length; i++) {
      sum += list[i];
      // console.log("la somme est maintenant",sum);
   }
   return sum;
}
total = total(list)
console.log("with the for-loop the new sum is", total);


//                       ---------------using a while loop -------------------




function whileSum(array) {
   let index = 0;
   let lenght = array.length;
   let sum = 0;
   while (index < lenght) {
      sum += array[index]

      index++;

   }
   return sum;
}
let array = [2, 3, 9, 23, 43, 11, 89];
let totale = whileSum(array);
console.log("Avec la methode tant-que la nouvelle somme est", totale);

//               ----------------- USING THE FOREACH METHOD --------------------------

// let result = 0;
// let arr = [2,3,9,23,43,11,89];
// function resultarray(element){
//    result += element;
// }
// arr.forEach(resultarray);
// console.log(result);

//                ----------------- USING THE DO-WHILE LOOP -----------------------

let arr = [2, 3, 9, 23, 43, 11, 89];
let resulta = 0;
let indexe = 0;
let longeur = arr.lenght;
function todosum(element) {

   do {
      resulta += element;

   } while (indexe < longeur);
   return resulta;
}
arr.forEach(todosum);
console.log("avec la do while loop la somme est ", resulta);

//---------------------------------------------------------------------------
//             ----------------- EXERCICES 4 ----------------------- 
// --------------------------------------------------------------------------

// Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]

const a = [1, 2, 3];
const b = ['a', 'b', 'c'];
const c = a.concat(b);
function concatenates(a, b) {

   return (a, b)
}
console.log("la concatenation de a et b est ", c);

//  ------------------------------------------------------------------------------------------------------
//            -----------------------------EXERCICES 5 -------------------------
//  ------------------------------------------------------------------------------------------------------


// Write a function that takes a number and returns a list of its digits. So for 2342, it should return [2,3,4,2].



let ind = 0;
let array1 = [2342];
let stringarray1 = array1[ind].toString();
let stringarray2 = stringarray1.split('');

let array2 = parseInt(stringarray1)
console.log(array2);
 console.log(typeof array2);
for(let i = 0 ; i < stringarray2.length ; i++){
   // console.log(stringarray2[i]);
   let array2 = parseInt(stringarray2[i]);
   console.log(array2);
   console.log(typeof array2);
   let stringarray3 = array2.join(',');
   console.log(stringarray3);
   console.log(typeof stringarray3);
}

// console.log(stringarray1); 
// console.log(typeof stringarray1);
// console.log( stringarray2);
// console.log(typeof array1);





























//  ------------------------------------------------------------------------------------------------------
//            -----------------------------EXERCICES 6 -------------------------
//  ------------------------------------------------------------------------------------------------------

// Write a function that returns the sum of numbers. So for a number like 237, it should return 12 which
//  is the result of  2+3+7.
