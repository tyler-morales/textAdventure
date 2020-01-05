userInput = document.querySelector('#user-input')

//setup terminal animation
function makeAnimator(arr) {
    let count = 0

    return {
        createSpan: function (letterArr) {
            textEl.textContent = ''
            for (const letter of letterArr) {
                const letterEl = document.createElement('span')
                letterEl.textContent = letter
                textEl.appendChild(letterEl)
            }
        },
        animateEachLetter(ms) {
            this.interval = setInterval(() => this.animateOneLetter(), ms)
        },
        animateOneLetter() {
            const span = textEl.querySelectorAll('span')[count]
            if (!span) {
                clearInterval(this.interval)
                return
            }
            span.classList.add('load')
            count++
            arr[count] == undefined ? done = true : done = false
        }
    }
}

// run terminal animation
function display(action) {
    const animator = makeAnimator(action);
    animator.createSpan(action)
    animator.animateEachLetter(10);
}

// send user response
function response(input) {
    return userText.value.toLowerCase().includes(input)
}

// change terminal color based on user input
function changeTerminalTextColor(computer) {
    switch (computer) {
        case 'ibm':
            document.documentElement.setAttribute('data-theme', 'ibm')
            break
        case 'cathode':
            document.documentElement.setAttribute('data-theme', 'cathode')
            break
        case 'apple':
            document.documentElement.setAttribute('data-theme', 'apple')
            break
    }
}

// change computer color
userInput.addEventListener('submit', (e) => {
    let input = e.target.elements.text.value.toLowerCase()
    e.preventDefault()
    changeTerminalTextColor(input)
})