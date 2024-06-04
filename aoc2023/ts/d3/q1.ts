import * as fs from "node:fs";

let file = fs.readFileSync('input.txt', 'utf-8')
let lines = file.split('\n')

let around = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
]

let total = 0
for (let li = 0; li < lines.length; li++) {
    let numStartIdx = 0
    let numEndIdx = 0
    for (let ci = 0; ci < lines[li].length; ci++) {
        let char = lines[li][ci]
        if (isNum(char) && (ci == 0 || !isNum(lines[li][ci - 1]))) {
            numStartIdx = ci
        }
        if (isNum(char) && (ci == lines[li].length - 1 || !isNum(lines[li][ci + 1]))) {
            numEndIdx = ci
            let hasAdjacent = false
            for (let i = 0; i <= numEndIdx - numStartIdx; i++) {
                if (hasAdjacentSymbol(li, numStartIdx + i))
                    hasAdjacent = true
            }
            if (hasAdjacent) {
                total += parseInt(lines[li].slice(numStartIdx, numEndIdx + 1))
            }
        }
    }
}
console.log(total)

function isNum(char: string): boolean {
    return !isNaN(parseInt(char))
}

function isSymbol(char: string): boolean {
    return char != '' && !char.match(/[.0-9\r]/)
}

function hasAdjacentSymbol(li: number, ci: number) {
    return around.reduce((acc, [y, x]) => {
        return acc || ((lines[li + y] && lines[li + y][ci + x]) ? isSymbol(lines[li + y][ci + x]) : false)
    }, false)
}