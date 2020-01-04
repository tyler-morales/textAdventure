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