
const randomArray = ["A", 20, "B", 23, "C"]

randomArray.pop()
randomArray.shift()
randomArray.unshift(["A1","A2"]) 
randomArray.push(true) 
randomArray[2] = "U"

console.log(randomArray) 
console.log(randomArray.indexOf("A2"))