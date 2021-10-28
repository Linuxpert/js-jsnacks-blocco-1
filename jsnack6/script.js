// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

//creare un arrey vuoto
const randomNum = [];

//generare 50 numeri random
while(randomNum.length < 50){
    let num = Math.floor(Math.random() * 100) +1;
    
    if(num !== randomNum.length){
        randomNum.push(num);
    }
    
}
console.log(randomNum);

//inserire nell'arrey i numeri non replicati