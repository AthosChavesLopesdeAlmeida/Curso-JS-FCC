let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "

let messageEL = document.getElementById("msg-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")


let player = {
 pname: "Athos",
 chips: 145,
}

let fundsEL = document.getElementById("funds-el")
fundsEL.innerHTML = player.pname + ": $" + player.chips

function getRandomCard() {
 let randomNumber = Math.floor(Math.random() * 13) + 1
 if(randomNumber > 10) {
    return 10
 } else if(randomNumber === 1){
  return 11
 } else {
  return randomNumber
 }
}

function startGame() {

  isAlive = true
  let c1 = getRandomCard()
  let c2 = getRandomCard()
  cards = [c1, c2]
  sum = c1 + c2

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
  
  cardsEL.innerHTML = "Cards: "
  for(let i = 0; i < cards.length; i++){
    cardsEL.innerHTML += cards[i] + " "
  }
}

function newcard() {
  if(isAlive === true && hasBlackJack === false){
    let newcard = getRandomCard()
    sum += newcard
    cards.push(newcard)
  
    renderGame()
}

}

