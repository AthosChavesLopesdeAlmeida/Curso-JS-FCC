let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const listEl = document.getElementById("listEl")
let listItems = ""

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value) 
  inputEl.value = "" // Limpa o campo de entrada após adicionar o lead
  renderLeads()
})

function renderLeads(){
let listItems = ""
for(let i = 0; i < myLeads.length; i++){
  // const li = document.createElement("li")
  // li.textContent = myLeads[i]
  // listEl.append(li)
  // Acima está outra maneira de criar elementos de lista

  listItems += 
  `<li>
  <a target = '_blank' href ='${myLeads[i]}'>"  ${myLeads[i]}   "</a>
  </li>`
}
listEl.innerHTML = listItems
}
