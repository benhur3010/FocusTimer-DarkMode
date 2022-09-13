import { Elements } from "./elements.js";

const {
  buttonPlay,
  buttonPause,
  buttonNature,
  buttonRain,
  buttonCoffee,
  buttonFire,
  buttonbgColorLight,
  buttonbgColorDark,
  bgBody
} = Elements

export function Controls() {
  function playNature() {
    buttonNature.classList.toggle('check')
    buttonRain.classList.remove('check')
    buttonCoffee.classList.remove('check')
    buttonFire.classList.remove('check')
  }
  
  function playRain() {
    buttonRain.classList.toggle('check')
    buttonNature.classList.remove('check')
    buttonCoffee.classList.remove('check')
    buttonFire.classList.remove('check')
  }
  
  function playCoffee() {
    buttonCoffee.classList.toggle('check')
    buttonNature.classList.remove('check')
    buttonRain.classList.remove('check')
    buttonFire.classList.remove('check')
  }
  
  function playFire() {
    buttonFire.classList.toggle('check')
    buttonNature.classList.remove('check')
    buttonRain.classList.remove('check')
    buttonCoffee.classList.remove('check')
  }

  function bgLight() {
    buttonbgColorLight.classList.add('hide')
    buttonbgColorDark.classList.remove('hide')
    bgBody.classList.add('dark-mode')
  }

  function bgDark() {
    buttonbgColorLight.classList.remove('hide')
    buttonbgColorDark.classList.add('hide')
    bgBody.classList.remove('dark-mode')
  }

  function playTimer() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  return {
    playTimer,
    reset,
    playNature,
    playRain,
    playCoffee,
    playFire,
    bgLight,
    bgDark
  }
}