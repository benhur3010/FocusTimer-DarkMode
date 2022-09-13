import { Elements } from "./elements.js";
import Sounds from "./sounds.js";
import { Controls } from "./controls.js";

const {
  minutesDisplay,
  secondsDisplay
} = Elements
const sounds = Sounds()
const controls = Controls()

let timerTimeOut;
let minutes = Number(minutesDisplay.textContent)

export function Timer() {
  function countDown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      
      if (minutes <= 0 && seconds <= 0) {
        sounds.timeEnd()
        controls.reset()
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        minutes--
      }
      
      minutesDisplay.textContent = String(minutes).padStart(2, '0')
      secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
  
      countDown()
    }, 1000);
  
  }
  
  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  
  function resetTimer() {
    clearTimeout(timerTimeOut)
    updateDisplay(minutes, 0)
  }
  
  function addTimer() {
    minutes = minutes + 5
    if (minutes > 90) {
      minutes = 90;
      alert('Você atingiu o limite máximo de tempo!')
    }
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }
  
  function decreaseTimer() {
    minutes = minutes - 5
    if (minutes < 0) {
      minutes = 0
      alert('Seu cronômetro está zerado!')
    }
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countDown,
    updateDisplay,
    resetTimer,
    addTimer,
    decreaseTimer,
    hold
  }
}