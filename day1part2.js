const fs = require('node:fs')

const list1 = [3, 4, 2, 1, 3, 3]
const list2 = [4, 3, 5, 3, 9, 3]

let seperatedLists = fs.readFileSync('day1Input.txt').toString().split(/\s+/).reduce((acc, value, index) => {
  acc[index % 2].push(value)
  return acc
}, [[], []])

let similarityMap = {}
seperatedLists[0].forEach((value) => {
  if (!similarityMap[value]) {
    similarityMap[value] = 0
    seperatedLists[1].forEach((value2) => {
      if (value === value2) {
        similarityMap[value]++
      }
    })
  }
})

let total = 0
Object.keys(similarityMap).forEach((key) => {
  total += (key * similarityMap[key])
})
console.log(total)