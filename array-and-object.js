
const programming = {}
    programming.languages = ["javascript", "java", "c", "c++"] 
    programming.difficulty = 9
    programming.usage = "web"
    programming.isRewarding = true 

    // console.log(programming) 

    delete programming.isRewarding
    // console.log(programming)

    programming["isFun"] = true
    // console.log(programming) 

    programming.languages.unshift("Python")
    // console.log(programming)

    programming.difficulty = 8
    console.log(programming) 

    // let i = programming.languages
    //for (let i = 0; i < programming.languages.length; i ++) {
        console.log(programming.languages[i])
    }

/*let index = 0 
while( index < programming.languages.length) { 
    console.log(programming.languages[index])
    index++
} 
*/
const programming = {
    languages: ["python", "javascript", "java"]
}

programming.languages.map(languages => {
    console.log(languages)
})