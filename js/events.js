import { Elements } from "./elements.js";

const {
  buttonNature,
  buttonRain,
  buttonCoffee,
  buttonFire,
  volNature,
  volRain,
  volCoffee,
  volFire
} = Elements

export default function() {

  function validationVolNature(sounds) {
    if (buttonNature.classList.contains('check')) {
      if (volNature.value == 1) {
        volNature.value = 50
      }
      sounds.playNature(volNature)
    }else{
      sounds.natureSound.pause()
    }
  }
  
  function validationVolRain(sounds) {
    if (buttonRain.classList.contains('check')) {
      if (volRain.value == 1) {
        volRain.value = 50
      }
      sounds.playRain(volRain)
    }else{
      sounds.rainSound.pause()
    }
  }
  
  function validationVolCoffee(sounds) {
    if (buttonCoffee.classList.contains('check')) {
      if (volCoffee.value == 1) {
        volCoffee.value = 50
      }
      sounds.playCoffee(volCoffee)
    }else{
      sounds.coffeeSound.pause()
    }
  }
  
  function validationVolFire(sounds) {
    if (buttonFire.classList.contains('check')) {
      if (volFire.value == 1) {
        volFire.value = 50
      }
      sounds.playFire(volFire)
    }else{
      sounds.fireSound.pause()
    }
  }

  return {
    validationVolNature,
    validationVolRain,
    validationVolCoffee,
    validationVolFire
  }
}