// creo l'array di oggetti per gli studenti
const studenti = [
    { id: 213, name: 'Marco della Rovere', grades: 78 },
    { id: 110, name: 'Paola Cortellessa', grades: 96 },
    { id: 250, name: 'Andrea Mantegna', grades: 48 },
    { id: 145, name: 'Gaia Borromini', grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', grades: 68 },
    { id: 102, name: 'Piero della Francesca', grades: 50 },
    { id: 120, name: 'Francesca da Polenta', grades: 84 },
];

// creo l'array di stringhe per mettere il nome in maiuscolo
const nomiMaiuscolo = studenti.map(student => student.name.toUpperCase())

// creo l'arry di oggetti per selezionare gli studenti con totale voti superiore a 70
const bestStudents = studenti.filter(student => student.grades > 70)

// creo l'array di oggetti per selezionare gli studenti con totale voti superiore a 70 e id superiore a 120
const doubleCondition = studenti.filter(student => student.grades > 70 && student.id > 120)

console.log("Nomi in maiuscolo:", nomiMaiuscolo)
console.log("Studenti con voti superiori a 70:", bestStudents)
console.log("Studenti con voti superiori a 70 e id superiore a 120:", doubleCondition)