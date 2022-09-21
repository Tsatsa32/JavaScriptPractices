
function findTheLargest(num1, num2, num3){

    if(typeof (num1 === "string" || num2 === "string" || num3 === "string"))
    
    let largest 
    if (num1 > num2 && num2 > num3) {
        console.log("num1 is the largest number")
        largest = num1
    } else if (num1 < num2 && num2 > num3) {
        console.log("num2 is the greatest number")
        largest = num2
    } else  {
        console.log("num3 is the largest number")
        largest = num3
    }


    return largest 

    }
   
  
   
let mynum = 0;
mynum = findTheLargest(30, 2, -13) 
console.log(mynum)

let mynum1 = 40; 
mynum1 = findTheLargest(30, 2, -13)
console.log(mynum1)


