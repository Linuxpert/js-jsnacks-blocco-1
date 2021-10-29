// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
const result =document.getElementById("result");
let nameFind = false;
//crea una lista con dei nomi
const listName = ["Mario", "Simone", "Elena", "Giuseppe"];

//chiedi all'utente il proprio nome
let nameUser = prompt("Scrivi il tuo nome");

//controllare nella lista se il nome è presente
for(let i = 0; i < listName.length; i++) {
    if(nameUser === listName[i]) {
        nameFind = true;
    }
}
    //se si può partecipare
if(nameFind === true){
    result.innerHTML = "Sei invitato alla festa"
}else {
    result.innerHTML = "Non sei autorizzato a stare qui"
}
    //se no non può partecipare