let sentence = ["Hello", "World", "!"]
let greetingEl = document.getElementById("greeting-el")

for(let i = 0; i < sentence.length; i++) {
  greetingEl.innerHTML += sentence[i] + "  "
}