const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, punctuation) {
  welcomeEl.textContent = `${greeting}, ${name}${punctuation}`
}

greetUser("Hello", "Athos", "!")