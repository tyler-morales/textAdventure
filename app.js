//turn text into an array of letters
const textEl = document.querySelector('h1')
const textArr = textEl.textContent.split('')


let char = 0
const userInput = document.querySelector('#user-input')

textEl.textContent = ''

// wrap each letter in output in a span 
function createInduvidualLetterSpans(letterArr) {
    for (const letter of letterArr) {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        textEl.appendChild(letterEl)
    }
}

// animate each letter
function displayChars() {
    const span = textEl.querySelectorAll('span')[char]
    span.classList.add('load')
    char++

    if (char == textArr.length) {
        complete()
        return
    }
}

function complete() {
    clearInterval(timer)
    timer = null
}

// iterator function to animate each letter
function displayChars(arr) {
    let count = 0
    const span = textEl.querySelectorAll('span')[char]
    const inner = {
        next: function () {
            const el = arr[count]
            console.log(span)
            // span.classList.add('load')
            count++
            arr[count] == undefined ? done = true : done = false
            return {
                value: el,
                done
            }
        }
    }
    return inner
}

const iterator = displayChars(textArr);

console.log(iterator.next())


// let result = iterator.next();
// while (!result.done) {
//     result = iterator.next()
//     console.log(result)
// }














createInduvidualLetterSpans(textArr)
//let timer = setInterval(displayChars, 10)







// change computer color
userInput.addEventListener('submit', (e) => {
    let input = e.target.elements.text.value.toLowerCase()
    e.preventDefault()

    changeTerminalTextColor(input)
})