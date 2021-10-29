// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

//crea un arrey vuoto
const arrNum = [];

//chiedi per 6 volte un numero all'utente
for(let i = 0; i < 6; i++) {
    let num = parseInt(prompt("scrivi un numero"));

    if(num % 2 !== 0){
        arrNum.push(num);
    }
}
console.log(arrNum);