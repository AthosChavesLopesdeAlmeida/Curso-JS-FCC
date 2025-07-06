let = player1Time = 102
let = player2Time = 107

function getFastest() {
  if(player1Time < player2Time) {
    return player1Time
  } else if(player2Time < player1Time) {
    return player2Time
  } else {
    return player1Time
  }
}

//let fastest = getFastest()
//console.log(fastest)

function total() {
  return player1Time + player2Time
}

let totalTime = total()
console.log(totalTime)