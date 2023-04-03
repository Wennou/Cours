/*  Quel est le nom du dragon le plus agé ? Faite un script pour répondre à cette question.
    Quel est le nom du dragon le plus jeune ? Faite un script pour répondre à cette question.
    Récupérez les dragons et ordonnez les par age décroissant.*/


/*const fs = require('fs');
const url = "./data/dragons.json";

const getFile = (url) => new Promise((resolve, reject) => {
    fs.readFile(url, {encoding: 'utf8'}, (err, data) => {
        if(err){
            reject(new Error('File Read failed :'+err));
            return;
        }
        resolve(data);
    });
    }
);
getFile(url
    .then(dataRecup => { 
        const { dragons } = JSON.parse(dataRecup); 
        console.log(dragons)})
    .catch(error => console.log(err)))

    //Exo 

const donnees = new Map();
//const fs = require('fs');
const wf = (arg) => fs.writeFile('./data/gps.txt', arg, (err) => { if(err)console.log('erreur', err); return;})
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( res => res.json())
    .then( res => res.forEach((el) => donnees.set( el.name, el.address.geo)))
    .then(() => {const objectData = Object.fromEntries(donnees); return objectData})
    .then((objectData) => wf(JSON.stringify(objectData)))
    .then(() => console.log('ok'))

    //Exo 

const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';
class Parser {
    constructor(motif){
        this._motif = motif;
        this._str = '';
    }

    get str(){
        return this._str;
    }

    parse(phrase){
        this._str = phrase
        .split(this._motif)                     //Split
        .map(word => word.trim())               //Enleve espaces
        .filter(word => parseInt(word) == word) //Filtre les chiffres
        .join(' ');                             //Join
    }
}
const p = new Parser(':');                      //Crée un Parser avec pour motif :
p.parse(phrase);
console.log(p.str);
    //8790 8987 7777 9007

*/