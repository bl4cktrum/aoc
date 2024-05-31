file = open('input.txt', 'r')
total = 0
for line in file:
    nums = []
    for char in line:
        try:
            nums.append(int(char))
        except:
            pass

    total += int(str(nums[0]) + str(nums[-1]))

print(total)
