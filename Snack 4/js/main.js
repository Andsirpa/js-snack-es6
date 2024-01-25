const teams = [
    {
        name: 'Team Turtle',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Frog',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Penguin',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Hippopotamus',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Seal',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Crocodile',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Dolphin',
        score: 0,
        foul: 0,
    },
]

// genero i valori randomico da 1 a 10 per ogni team

for (const team of teams) {
    // valore randomico per ogni score
    team.score = Math.floor(Math.random() * 11)
    // valore randomico per ogni foul
    team.foul = Math.floor(Math.random() * 11)

}


const container = document.getElementById('info-container')

// creo un 'div' per raccogliere le info in un 'p'
const output = document.createElement('div')

// uso il forEach e il destructuring per recuperare i valori dall'oggetto
teams.forEach(({ name, score, foul }) => output.innerHTML += `<p>${name} : Score = ${score}, Foul = ${foul}</p> <br>`)
// stampo l'output in console
console.log(output);


// aggiungo l'output al container per stampare in pagina
container.appendChild(output)



