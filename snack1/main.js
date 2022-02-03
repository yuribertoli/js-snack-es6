const bici = [
    {
        nome: "savana",
        peso: 14
    },
    {
        nome: "thunder",
        peso: 17
    },
    {
        nome: "flash",
        peso: 10
    },
    {
        nome: "iron",
        peso: 22
    },
    {
        nome: "e-cycle",
        peso: 20
    },
];

//creo una funzione per sommare tutti i pesi delle bici, da utilizzare successivamente
function sommaTotale(nomeArray, parametroDaSommare) {                    
    let somma = 0;
    for (let i = 0; i< nomeArray.length; i++) {
        somma += nomeArray[i][parametroDaSommare];
    }
    return somma;
}

//creo una funzione per stampare il nome della bici più leggera
function showLighterBike() {

    let pesoMinore = "";                    

    let pesoCorrente = sommaTotale(bici, "peso");   //creo un numero che sarà sempre più grande del peso della bici ciclata

    for (i=0; i<bici.length; i++) { 

        if (bici[i]["peso"] < pesoCorrente) {   //se il peso della bici corrente è minore della bici con il peso più piccolo precedente...

            pesoCorrente = bici[i]["peso"];     //stampo il peso della bici corrente

            pesoMinore = bici[i]["nome"];       //e il relativo nome

        }

    }

    return `La bici più leggera si chiama ${pesoMinore}, con un peso di ${pesoCorrente}Kg`;

}


/* Alternativa 

let biciLeggera = bici[0]: 
for(let i = 0; i<bici.length; i++){
       if(biciLeggera.peso > bici[i].peso){
              biciLeggera = bici[i]
       }
}

*/

console.log(showLighterBike());

