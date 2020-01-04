//cache DOM
const textEl = document.querySelector('h1')
const str = textEl.textContent
const lettersArr = str.split('')
const userInput = document.querySelector('#user-input')

textEl.textContent = ''

for (const letter of lettersArr) {
    textEl.innerHTML += '<span>' + letter + '</span>'
}

let char = 0
let timer = setInterval(onTick, 10)

function onTick() {
    const span = textEl.querySelectorAll('span')[char]
    span.classList.add('load')
    char++
    if (char == lettersArr.length) {
        complete()
        return
    }
}



userInput.addEventListener('submit', (e) => {
    let text = e.target.elements.text.value.toLowerCase()
    e.preventDefault()

    if (text == 'ibm') {
        changeTerminalTextColor(ibm = 'ibm')
    }
    if (text == 'cathode') {
        changeTerminalTextColor(cathode = 'cathode')
    }
    if (text == 'apple') {
        changeTerminalTextColor(appleii = 'apple')
    }
})

function complete() {
    clearInterval(timer)
    timer = null
}

const changeTerminalTextColor = (color) => {
    if (color == 'ibm') {
        document.documentElement.setAttribute('data-theme', 'ibm')


    }
    if (color == 'cathode') {
        document.documentElement.setAttribute('data-theme', 'cathode')
    }
    if (color == 'apple') {
        document.documentElement.setAttribute('data-theme', 'apple')
    }
}