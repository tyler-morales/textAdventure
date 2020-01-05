const textEl = document.querySelector('h1')
const submit = document.getElementById('user-input')
const userText = document.getElementById('user-text')
const error = 'not sure what you meant'


let lastResponses;

const displayPrompt = ({
  text,
  responses
}) => {
  display(text)
  lastResponses = responses;
};

// start game
displayPrompt(prompts.wake);

submit.addEventListener('submit', () => {
  const nextPrompt = prompts[lastResponses[userText.value]];
  if (nextPrompt) {
    displayPrompt(nextPrompt);
  } else {
    displayPrompt(error);
  }
  userText.value = ''; //clear user input
});