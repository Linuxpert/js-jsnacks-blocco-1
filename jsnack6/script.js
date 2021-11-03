// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

//creare un arrey vuoto
const randomNum = [];
//generare 50 numeri random
while (randomNum.length < 50){

    const num = Math.floor(Math.random() * 50) + 1;

    // let found = false;
    let found = randomNum.includes(num);

        // for(i = 0; i < randomNum.length; i ++){
        //     if(num === randomNum[i]){
        //         found = true;
        //     }
        // }
    

    if(found === false){
        randomNum.push(num);
    }
    
}



//inserire nell'arrey i numeri non replicati
console.log(randomNum);
