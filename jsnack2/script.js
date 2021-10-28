// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.
const word = document.getElementById("word");
const word1 = document.getElementById("word1");
//chiedere all'utente di scrivere una parola
let firstWord = prompt("scrivi una parola")

//chiedere all'utente di scrivere un'altra parola
let secondWord = prompt("scrivi una parola")

//confrontare la lunghezza delle parole
if(firstWord.length > secondWord.length) {
    word.innerHTML = secondWord
    word1.innerHTML = firstWord
} else {
    word.innerHTML = firstWord
    word1.innerHTML = secondWord
}
    //stampare quella più corta
    //stampare quella più lunga

