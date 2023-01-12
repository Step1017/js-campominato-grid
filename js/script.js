
//Creo una funzione per creare una cella e gli assegno una classe
const createCell = () => {
    const cell = document.createElement('div');
    cell.classList.add ('cell');
    return cell;
}

//Prendo gli elementi dal DOM:
const form = document.getElementById('difficulty-form');
const submit = document.getElementById('submit');
const select = document.getElementById('select');
const grid = document.getElementById('grid');


//Aggiungo un evento al click del bottone play:
form.addEventListener('submit', function(event){  
    
     // Blocco il riavvio della pagina
    event.preventDefault();
    

     // Svuoto la griglia
    grid.innerHTML = '';
    
    const mode = select.value;
    console.log(mode);
    let rows = 10;
    let cols = 10;

    if (mode === 'medium') {
        rows = 9;
        cols = 9;
    } else if (mode === 'hard') {
        rows = 7;
        cols = 7;
    }

    const totalCells = rows * cols;


//Creo un ciclo
for (let i = 0; i < totalCells; i++) {

//Creo una cella sfruttando la funzione che ho creato in precedenza
    let cell = createCell();

//Verifico il numero di celle che devono essere create in griglia in base alla scelta dell'utente (di default c'è la griglia per 'facile')
    cell.classList.add('easy');
        if (mode === 'medium') {
            cell.classList.add('medium');
        } else if (mode === 'hard') {
            cell.classList.add('hard');
        }

//Creo il numero per la cella
    const number = parseInt(i + 1);

//Appendo il numero alla cella in modo da farlo vedere
    cell.append (number);

//Aggiungo un evento al click della cella
    cell.addEventListener('click', function() {
        cell.classList.toggle('clicked');
        console.log(cell);
    })

//Appendo le celle alla griglia
    grid.append(cell);
}

});