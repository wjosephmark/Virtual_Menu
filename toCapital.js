const shortStr = "Hi there"
const longStr = "The quick brown fox jumps over the lazy dog"

//My Solution ->

function capitalizeEachWord(str){
    wordArray =[]
    let splitStr = str.split(" ")
    splitStr.forEach(word => {
        wordArray.push(word.charAt(0).toUpperCase() + word.substring(1)) 
    });
    return (wordArray.join(" "))
}

console.log(capitalizeEachWord(longStr))

//Instructor Solution ->

// const toCapital = str => {
//     const words = str.split(" ")
//     return words.map(word => word[0].toUpperCase() + word.slice(1).join(" "))
// }

// console.log(longStr)