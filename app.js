//turn text into an array of letters
const textEl = document.querySelector('h1')
const textArr = textEl.textContent.split('')

let char = 0
const userInput = document.querySelector('#user-input')

textEl.textContent = ''

// display story game
createInduvidualLetterSpans(textArr)
let timer = setInterval(displayChars, 10)

// change computer color
userInput.addEventListener('submit', (e) => {
    let input = e.target.elements.text.value.toLowerCase()
    e.preventDefault()

    changeTerminalTextColor(input)
})


