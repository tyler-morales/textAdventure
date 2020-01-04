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
// change terminal color based on user input
function changeTerminalTextColor(computer) {
    switch (computer) {
        case 'ibm':
            document.documentElement.setAttribute('data-theme', 'ibm')
            break;
        case 'cathode':
            document.documentElement.setAttribute('data-theme', 'cathode')
            break;
        case 'apple':
            document.documentElement.setAttribute('data-theme', 'apple')
            break;
    }
}