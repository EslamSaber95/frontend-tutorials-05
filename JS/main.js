let wordDiv = document.querySelector(".word")
let categorySpan = document.querySelector(".info .category span")


const englishLetters = "abcdefghijklmnopqrstuvwxyz"
let lettersArray = Array.from(englishLetters)

let lettersDiv = document.querySelector(".letters")
lettersArray.forEach(letter => {
    let span = document.createElement("span")
    span.appendChild(document.createTextNode(letter))
    span.className = "letter-box"
    lettersDiv.appendChild(span)
})

// object of words + categories
const words = {
    programming : ["PHP" , "JavaScript" , "GO" , "Scala" , "Swift" , "Cotlin" , "Python" , "MySQL" , "Fortran"],
    movies : ["Prestige" , "Inception" , "Parasite" , "Intersteller" , "Memento" , "COCO" , "UP"],
    people : ["Albert Einstien" , "Alexander" , "Cleopatra" , "Mahatma Gandi" , "Hitchcook"],
    countries : ["Egypt" , "Syria" , "Palestine" , "Lebanon" , "Iraq" , "Bahrain" , "Tunisia"]
}
let allKeys = Object.keys(words)
let randomCategoryIndex = Math.floor(Math.random() *  allKeys.length)
let randomCategory = allKeys[randomCategoryIndex]
let randomCategoryContent = words[randomCategory]
console.log(randomCategoryContent);

categorySpan.textContent = randomCategory

// Word to guess
let wordToGuessIndex = Math.floor(Math.random() *  randomCategoryContent.length)
console.log(wordToGuessIndex);
let wordToGuess = randomCategoryContent[wordToGuessIndex]
console.log(wordToGuess);

let wordToGuessArray = Array.from(wordToGuess)
console.log(wordToGuessArray);

wordToGuessArray.forEach(letter => {
    let letterSpan = document.createElement("span")
    wordDiv.appendChild(letterSpan)
    if (letter == " ") {
        letterSpan.className = "space"
        letterSpan.textContent = "-"
    }
})







