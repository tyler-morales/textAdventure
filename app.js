const textEl = document.querySelector('h1');
const startGame = textEl.textContent.split('');
const submit = document.getElementById('user-input');
const userText = document.getElementById('user-text')

//prompts
const prompts = {
  wake: {
    text: 'You wake, enter "walk" or "explore"',
    responses: { walk: 'wake_walk', explore: 'wake_explore' }
  },
  wake_explore: {
    text: 'You explore after waking. Enter "walk" to walk',
    responses: { walk: 'wake_walk' }
  },
  wake_walk: {
    text: 'You walk. Enter "walk" to continue walking, or "sleep" to go back to sleep',
    responses: { walk: 'wake_walk', sleep: 'sleep' }
  },
  sleep: {
    text: 'You sleep.',
    responses: {}
  }
};

go(startGame)

submit.addEventListener('submit', () => {
  if (response('bed')) {
    go(bed)
  } else if (response('ex')) {
    go(explore)

    submit.addEventListener('submit', () => {
      if (response('tv')) {
        go(watchTV)
      } else if (response('walk')) {
        go(walkAroundRoom)
      }
    })
  } else {
    go(defaultValue)
  }
})


// clear user input each time
submit.addEventListener('submit', () => {
  userText.value = ''
})