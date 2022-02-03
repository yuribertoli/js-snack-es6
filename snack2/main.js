let squadreCalcio = [
    {
        nome: "Chicago",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Boston",
        puntiFatti: 0,
        falliSubiti: 0

    },
    {
        nome: "Los Angeles",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Orlando",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Miami",
        puntiFatti: 0,
        falliSubiti: 0
    },
];

//Funzione per mostrare un numero random compreso tra 2 numeri definiti in precedenza
function randomNumber(min, max) {
    let numero;
    numero = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
    if (min >= max) {
        numero = alert("Il primo numero deve essere minore del secondo");
    } else if (isNaN(min) || isNaN(max)) {
        numero = alert("Il numero inserito non è corretto / I numeri inseriti non sono corretti");
    }
    return numero;
}


//Nell'array squadreCalcio sostituisco i valori di puntiFatti con un numero random
for (let key of squadreCalcio) {

    key.puntiFatti = randomNumber(50, 80);

}

//-----------------VARIANTE CON L'IF PER I FALLI SUBITI---------------

//Controllo se nell'array squadreCalcio c'è un oggetto con valore falliSubiti = 0, se si' lo sostituisco con un numero random
for (let key of squadreCalcio) {

    if (key.falliSubiti === 0) {

      key.falliSubiti = randomNumber(400, 650);

    }
    
}

console.log(squadreCalcio);




//Clono array nuovo con quello precedente

/* NON FUNZIONA
let nuovoArray = [...squadreCalcio]; 
*/

let nuovoArray = squadreCalcio.map(a => {return {...a}})

/* Soluzione alternativa al deep cloning 
let nuovoArray = JSON.parse(JSON.stringify(squadreCalcio))
*/

//Cancello tutti i valori puntiFatti dal nuovo array
for (i=0; i<nuovoArray.length; i++) {

    delete nuovoArray[i]["puntiFatti"];

}

console.log(nuovoArray);








/* NON FUNZIONA
//ciclo ogni oggetto presente nell'array per cambiarne i valori punti e falli subiti
for (i=0; i<squadreCalcio.length; i++) {

    let {puntiFatti, falliSubiti} = squadreCalcio[i];

    puntiFatti = randomNumber(50, 80);
    falliSubiti = randomNumber(400, 650);

    console.log("I punti fatti sono " + puntiFatti);
    console.log("I falli subiti sono " + falliSubiti);

} 
*/

