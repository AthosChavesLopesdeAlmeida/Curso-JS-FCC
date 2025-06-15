let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
  count = count + 1
  countEl.innerHTML = count
}

function save() {
  let countString = count + " - "
  saveEl.innerHTML += countString
  count = 0
  countEl.innerHTML = count
}

