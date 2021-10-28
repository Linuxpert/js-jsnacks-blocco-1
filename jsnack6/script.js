// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

//creare un arrey vuoto
const randomNum = [];
let found = false;
//generare 50 numeri random
while(randomNum.length < 50){
    let num = Math.floor(Math.random() * 100) +1;
    // randomNum.push(num)
    if(num !== randomNum){
        found = true;
    }
    
}

if(found === true){
    randomNum.push(num)
}

console.log(randomNum);

//inserire nell'arrey i numeri non replicati