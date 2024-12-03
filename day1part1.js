const fs = require('node:fs')

//const list1 = [3, 4, 2, 1, 3, 3]
//const list2 = [4, 3, 5, 3, 9, 3]

let seperatedLists = fs.readFileSync('day1Input.txt').toString().split(/\s+/).reduce((acc, value, index) => {
  acc[index % 2].push(value)
  return acc
}, [[], []])


let sortedList1 = sortListAsc(seperatedLists[0])
let sortedList2 = sortListAsc(seperatedLists[1])

let differenceList = sortedList1.map((value, index) => Math.abs(sortedList2[index] - value))

let differenceTotal = differenceList.reduce((acc, value) => acc + value, 0)
console.log(differenceTotal)

function sortListAsc(list) {
  return list.sort((a, b) => a - b)
}

