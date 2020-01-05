const textEl = document.querySelector('h1');
const startGame = textEl.textContent.split('');
const submit = document.getElementById('user-input');
const userText = document.getElementById('user-text')

//prompts
const bed = 'Your lack of desire has lead you towards a life of bordeom and dread. [[GAME OVER]]'.split('');
const explore = 'As your eyes adjust to the early monning sun, you glance around the room. To your left, you notice a small, but sturdy bed side table. In front of you, a TV is broadcasting re-runs of the show "Friends". You also consider walking and exploring more of this strange room.What is your next inclination?'.split('')
const walkAroundRoom = 'Walking around the room seems like a good idea. After all, you tell yourself, "I should at least aquainte and introduce myself to this bewildering experience. After a bit of pondering and wandering, you look straight ahead and notice a bathroom. To your right, a window.'.split('')
const watchTV = 'You make yourself comfortable. You kick off your shoes, pile the covers and pillows over your body bask in the glory of laziness for eternity.[[GAME OVER]]'.split('')
const defaultValue = `I am not sure what you mean? Try again`.split('')

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