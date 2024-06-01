import re

file = open('input.txt', 'r')

onHand = {
    'red': 12,
    'green': 13,
    'blue': 14
}

total = 0
for line in file:
    valid = True
    for show in re.split('[;,]', line.split(':')[1]):
        show = show.strip()
        if int(show.split(' ')[0]) > onHand[show.split(' ')[1]]:
            valid = False
    if valid:
        total += int(line.split(':')[0].split(' ')[1])

print(total)
