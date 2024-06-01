import * as fs from "node:fs";

let file = fs.readFileSync('input.txt', 'utf-8')
let lines = file.split('\n')

let powers = lines.map(l => {
    if (l == '')
       return 0
    let maxes = {
        'red': 0,
        'green': 0,
        'blue': 0
    }
    l.split(':')[1].split(/[;,]/).forEach(show => {
        show = show.trim()
        if (+show.split(' ')[0].trim() > maxes[show.split(' ')[1].trim() as keyof typeof maxes]) {
            maxes[show.split(' ')[1].trim() as keyof typeof maxes] = +show.split(' ')[0].trim()
        }
    })
    return maxes['red'] * maxes['green'] * maxes['blue']
})

console.log(powers.reduce((acc, cur) => acc + cur, 0))