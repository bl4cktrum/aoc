import * as fs from 'fs'

const file = fs.readFileSync('input.txt', 'utf8')
const cubesOnHand = {
    red: 12,
    green: 13,
    blue: 14,
}

const lines = file.split('\n')
const possibleGames = lines.map(line => {
    let id = +line.split(':')[0].split(' ')[1]
    if (line.split(':')[1].split(/[,;]/).every(cubeShows => {
        let num = +cubeShows.trim().split(' ')[0]
        let color = cubeShows.trim().split(' ')[1] as keyof typeof cubesOnHand
        return (num <= cubesOnHand[color])
    }))
        return id
    else
        return null
}, [])
console.log(possibleGames.reduce((acc, cur) => (acc || 0) + (cur || 0), 0))