
const randomStudent = () => {
    const students = ["Mandahaa", "Anar", "Huluguu", "Dee", "Ziggy", "Tsatsa", "Jaagii", "Muugii", "Zoe", "Meg", "Jamia"]
    const index = Math.floor(Math.random() * students.length)
    console.log(students[index])
} 
randomStudent()