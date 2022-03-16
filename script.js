/*Creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi
 in un range compreso tra 1 e 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/


//Creo una griglia 8x8.
const grid = document.getElementById('grid');

const column = 8;
const row = 8;

const totalCells = column * row;

/*Ora che sappiamo quante celle dobbiamo creare, dobbiamo ripetere la creazione della cella N volte.
 Usiamo il ciclo for.*/
for(let i= 0; i < totalCells; i++){

    //Ora creo la cella. Creano nel documento un div
    const cell = document.createElement('div');
    //Aggiungiamo a "cell" una classe e ricreiamo la stessa classe nel css
    cell.classList.add('cell');
}
