const log = {
    count : 100,
    save: function () {
        'use strict';
        console.log(this.count);
    }
}
setTimeout(log.save, 500); //Renvoie undefined
setTimeout(function(){log.save()}, 500); //Correction
setTimeout(() => log.save(), 500); //Correction opti


let a = 1, b = 2, c = 4;
let temp = a;

//Manière nulle

//a = b;
//b = temp;

//Manière mieux

[a, b, c] = [b, c, a]

console.log("A : " + a);
console.log("B : " + b);
console.log("C : " + c);

//Exo


const student = {
    name: "Alan",
    notes: [10, 16, 17],
    average: null,
  };
  
  // TODO ...

student.average = student.notes.reduce((a, b) => a + b / student.notes.length, 0);

console.log(student.name, student.notes, student.average);

//Exo

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// retourne la première valeur du tableau en la supprimant du tableau
let acc = 0;
function accumulator(numbers, acc = 0) {
    return numbers.length === 0 ? acc : accumulator(numbers, acc += numbers.shift());

  // Une condition d'arrêt et retourner la somme des valeurs du tableau
  // dans la fonction on ré-appelle la fonction elle-même
  // accumulator(numbers, 10);
}

console.log(accumulator(numbers)); // doit retourner 55

//Exo