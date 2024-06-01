file = open('input.txt', 'r')
digits = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'zero': 0
}

total = 0
for line in file:
    nums = []
    for idx, char in enumerate(line):
        try:
            nums.append(int(char))
        except:
            for digit in digits:
                if line[idx : idx + len(digit) : ].__contains__(digit):
                    nums.append(digits[digit])
    total += int(str(nums[0]) + str(nums[-1]))
print(total)
