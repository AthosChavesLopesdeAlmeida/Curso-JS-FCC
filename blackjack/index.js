
let c1 = 11
let c2 = 11
let sum = c1 + c2
let hasBlackJack = false
let isAlive = true
message = " "

let messageEL = document.getElementById("msg-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

function gamestart() {
    if (sum <= 20){
    message = "You can draw a new card."
  } else if(sum == 21) {    
    hasBlackJack = true
    message = "You got Blackjack!"
  } else {
    message = "You lose. Fuck you"
    isAlive = false
  }

  messageEL.innerHTML = message
  sumEL.innerHTML = "Sum: " + sum
  cardsEL.innerHTML = `Sum: ${c1}, ${c2}`
}

