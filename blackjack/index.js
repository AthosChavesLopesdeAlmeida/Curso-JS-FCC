
let c1 = 10
let c2 = 4
let cards = [c1, c2]
let sum = c1 + c2
let hasBlackJack = false
let isAlive = true
message = " "

let messageEL = document.getElementById("msg-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")


function startGame() {
  renderGame()
}

function renderGame() {
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
  cardsEL.innerHTML = `Sum: ${cards[0]}, ${cards[1]}`
}

function newcard() {
  let newcard = 7
  sum += newcard
  cards.push(newcard)
  
  renderGame()
}