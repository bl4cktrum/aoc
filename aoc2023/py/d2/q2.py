import re

file = open('input.txt', 'r')
total = 0
for line in file:
    maxes = {
        'red': 0,
        'green': 0,
        'blue': 0
    }
    for show in re.split('[,;]', line.split(':')[1]):
        show = show.strip()
        if int(show.split(' ')[0]) > maxes[show.split(' ')[1]]:
            maxes[show.split(' ')[1]] = int(show.split(' ')[0])
    total += maxes['red'] * maxes['green'] * maxes['blue']


print(total)