import * as fs from 'fs'
let file = fs.readFileSync('input.txt','utf-8')

let lines = file.split('\n')
let total = 0
for (let line of lines) {
    let chars = line.split('')
    let nums: number[] = []
    for (let i = 0; i < chars.length; i++) {
        let num = parseInt(chars[i])
        if (!isNaN(num))
            nums.push(num)
    }
    total += parseInt(''+nums[0] + nums[nums.length - 1])
}
console.log(total)