import Events from "./events.js";
import Sounds from "./sounds.js";
import { Elements } from "./elements.js";
import { Controls } from "./controls.js";
import { Timer } from "./timer.js";

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonDecrease,
  buttonNature,
  buttonRain,
  buttonCoffee,
  buttonFire,
  buttonbgColorLight,
  buttonbgColorDark
} = Elements

const controls = Controls()
const sounds = Sounds()
const timer = Timer()
const events = Events()

// Botões de controle de tempo
buttonPlay.addEventListener('click', () => {
  sounds.buttonPress()
  controls.playTimer()
  timer.countDown()
})

buttonPause.addEventListener('click', () => {
  sounds.buttonPress()
  controls.reset()
  timer.hold()
})

buttonStop.addEventListener('click', () => {
  sounds.buttonPress()
  timer.resetTimer()
  controls.reset()
})

buttonAdd.addEventListener('click', () => {
  sounds.buttonPress()
  timer.addTimer()
})

buttonDecrease.addEventListener('click', () => {
  sounds.buttonPress()
  timer.decreaseTimer()
})


// Botões de controle de audio / fundo musical
buttonNature.addEventListener('click', () => {
  controls.playNature()
  events.validationVolNature(sounds)
})

buttonRain.addEventListener('click', () => {
  controls.playRain()
  events.validationVolRain(sounds)
})

buttonCoffee.addEventListener('click', () => {
  controls.playCoffee()
  events.validationVolCoffee(sounds)
})

buttonFire.addEventListener('click', () => {
  controls.playFire()
  events.validationVolFire(sounds)
})


// Botões de controle tema (background) light / dark 
buttonbgColorLight.addEventListener('click', () => {
  controls.bgLight()
})

buttonbgColorDark.addEventListener('click', () => {
  controls.bgDark()
})
