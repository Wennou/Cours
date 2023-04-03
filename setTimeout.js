//Exercice 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pair = numbers.filter(number => number % 2 === 0); //Filtre les nombres pairs
console.log(pair);

const cube = pair.map(x => x**3); //Transforme les nombres pairs au cube
console.log(cube);

const total = cube.reduce((acc, curr) => curr + acc); //Ajoute tous les cubes ensemble
console.log(total);


//Exercice 2

const populations = [
    { "id": 0, "name": "Alan" },
    { "id": 1, "name": "Albert" },
    { "id": 2, "name": "Jhon" },
    { "id": 3, "name": "Brice" },
    { "id": 4, "name": "Alexendra" },
    { "id": 5, "name": "Brad" },
    { "id": 6, "name": "Carl" },
    { "id": 7, "name": "Dallas" },
    { "id": 8, "name": "Dennis" },
    { "id": 9, "name": "Edgar" },
    { "id": 10, "name": "Erika" },
    { "id": 11, "name": "Isaac" },
    { "id": 12, "name": "Ian" }
];

/*for( const pop of populations) {
    const {name} = pop;
    const letters = {...name};
    const count = letters.reduce((acc, curr) => {
        if(["a", "l"].includes(curr.toLowerCase())) 
        return acc += 1;
        else return acc; }, 0);
    pop.count = count;
}
console.log(...populations);

populations.sirt((p1,p2) => p1.count - p2.count);
console.log(populations);*/

//Exercice 3

const numbersMax = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];

const max = numbersMax.reduce((a, b) => a > b ? a : b); 

console.log(max);

//Exercice 4 

const sentence = "Bonjour tout le monde, vous aimez JS ?";
const splitSentence = sentence.split("");
const reverseSentence = splitSentence.reverse();
const joinSentence = reverseSentence.join("")
console.log(joinSentence)

var strArr = joinSentence.split(" ").map(x => {
  return x.length;
});
console.log(strArr);

//Exercice 5

const sent = "Mississipi".toLowerCase();
let stat = {};

const letters = new Set(sent);
for(const letter of letters){
    let count = 0;
    for( const p of sent){
        if(letter == p) count ++;
    }
    stat[letter] = count;
}

console.log(stat);

//Exercice 6

const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007'.replace(/[^0-9, :]/g, ""); //Trier caractères
const spl = phrase.split(':')
console.log(spl);
console.log();
return
const stats = new Map();



for(el of phrase){
    console.log(el)
    if(stats.get(el)){
        stats.set(el, stats.get(el) + 1)
    }
    else{
        stats.set(el, 1)
    }
}

console.log(stats);

