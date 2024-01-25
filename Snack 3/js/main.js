// creo l'array di oggetti
const bici = [
    { nome: 'bici 1', peso: 10 },
    { nome: 'bici 2', peso: 9 },
    { nome: 'bici 3', peso: 12 },
    { nome: 'bici 4', peso: 13 },
]

let biciLeggera = bici[0]
// trovo qual è la bici più leggera controllando il peso per ciascuna bici
for (const b of bici) {
    if (b.peso < biciLeggera.peso) {
        biciLeggera = b
    }
}

// uso il destructuring per recuperare il nome e il peso di biciLeggera
const { nome, peso } = biciLeggera

// stampo in console col template literal
console.log(`Il peso di ${nome} è di: ${peso} kg`)


// BONUS: stampo in pagina

// creo un elemento
const stampa = document.createElement('p')
stampa.innerHTML = `La bici più leggera è ${nome} con un peso di ${peso} kg.`

// recupero il container in html
const container = document.getElementById('text-container')
container.appendChild(stampa)