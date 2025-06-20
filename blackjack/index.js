
let c1 = 11
let c2 = 10
let sum = c1 + c2
let hasBlackJack = false
let isAlive = true
message = " "

console.log(sum)

if (sum <= 20){
  message = "You can draw a new card"
} else if(sum == 21) {    
  hasBlackJack = true
  message = "Blackjack"
} else {
  message = "You lose. Fuck you"
  isAlive = false
}

console.log(message) 