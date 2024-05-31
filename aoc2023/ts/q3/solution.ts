import * as fs from 'fs'

const file = fs.readFileSync('input.txt', 'utf8')
const cubesOnHand = {
    red: 12,
    green: 13,
    blue: 14,
}

const lines = file.split('\n')
const gamesIN = lines.map(line => {
    let id = parseInt(line.split(':')[0].split(' ')[1])
    let cubesStr = line.split(':')[1]
    let cubesArr = cubesStr.split(/[,;]/)
    let maxes =  {
        'red': 0,
        'green': 0,
        'blue': 0,
    }
    cubesArr.forEach(cubesShow =>{
        let num = parseInt(cubesShow.trim().split(' ')[0])
        let color = cubesShow.trim().split(' ')[1] as keyof typeof maxes
        if(maxes[color] < num){
            maxes[color] = num
        }
    })
    return {
        id: id,
        maxR: maxes.red,
        maxG: maxes.green,
        maxB: maxes.blue,
    }
})
let possibleGames = gamesIN.filter(game =>
    game.maxR <= cubesOnHand.red && game.maxG <= cubesOnHand.green && game.maxB <= cubesOnHand.blue
)
console.log(possibleGames.reduce((total,game) => total + game.id, 0))