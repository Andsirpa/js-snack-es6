// array di ospiti
const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
];

// dichiaro la costante table ( uguale per tutti gli ospiti )
const tableName = "Tavolo Vip"

// return implicito,                                       restituisco implicitamente il valore 
const segnaPosto = vips.map((guest, index) => ({ tableName, guestName: guest, seatNumber: index + 1 }))

// stampo 
console.log(segnaPosto)