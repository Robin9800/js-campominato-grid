/*Creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi
 in un range compreso tra 1 e 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/


//Creo una griglia 8x8.
const grid = document.getElementById('grid');

const column = 8;
const row = 8;

const totalCells = column * row;
