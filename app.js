//cache DOM
const textEl = document.querySelector('h1')
const str = textEl.textContent
const lettersArr = str.split('')
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

function complete() {
    clearInterval(timer)
    timer = null
}
