
const person = {firstName: "Tsatsa", lastName: "Batbold", occupation: "student"} 

person["skill"] = "doItYourself"
person["favorite food"] = "everything"

person.hobby = "travel"

delete person.occupation 
console.log(person) 


delete person["favorite food"] 
console.log(person)