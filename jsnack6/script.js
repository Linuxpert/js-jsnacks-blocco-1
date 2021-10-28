// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

//creare un arrey vuoto
const randomNum = [];

//generare 50 numeri random
for( let i = 0; i < 50; i++){
    let num = Math.floor(Math.random() * 50) -1;
    if(num !== num) {
        randomNum.push(num);
        
    }
    
}

console.log(randomNum);
//inserire nell'arrey i numeri non replicati