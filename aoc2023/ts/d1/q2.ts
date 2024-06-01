import * as fs from 'fs'
let file = fs.readFileSync('input.txt','utf-8')

enum digits {
    'zero'= 0,
    'one'= 1,
    'two'=2,
    'three'= 3,
    'four'= 4,
    'five'= 5,
    'six'= 6,
    'seven'= 7,
    'eight'= 8,
    'nine'= 9
}

let lines = file.split('\n')
let total = 0
for (let line of lines) {
    let chars = line.split('')
    let nums: number[] = []
    for (let i = 0; i < chars.length; i++) {
        let num = parseInt(chars[i])
        if (!isNaN(num))
            nums.push(num)
        else {
            try {
                for (let digit in digits) {
                    if (line.slice(i, i+digit.length).includes(digit))
                        nums.push(Number(digits[digit]))
                }
            }
            catch (e){}
        }
    }
    total += parseInt(''+nums[0] + nums[nums.length - 1])
}
console.log(total)