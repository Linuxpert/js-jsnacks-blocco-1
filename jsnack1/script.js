//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

const result = document.getElementById("result");

//inserisco il primo numero con il promt
let firstNum = prompt("inserisci un numero")

//inserisco il secondo numero con il promt
let secondNum = prompt("inserisci un numero")

//confronto i due numeri
    //stampo il più grande
if(firstNum > secondNum) {

    result.innerHTML = firstNum

}else {

    result.innerHTML = secondNum
}

