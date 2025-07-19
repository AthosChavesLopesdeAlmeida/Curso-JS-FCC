let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const listEl = document.getElementById("listEl")
const deleteBtn = document.getElementById("delete-btn")
let listItems = ""

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  renderLeads()
})


inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value) 
  inputEl.value = "" 
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads()
})

function renderLeads(){
let listItems = ""
  for(let i = 0; i < myLeads.length; i++){
  listItems += `<li><a target = '_blank' href ='${myLeads[i]}'>"  ${myLeads[i]} "</a></li>`
}
  listEl.innerHTML = listItems
}

// const li = document.createElement("li")
// li.textContent = myLeads[i]
// listEl.append(li)
// Acima está outra maneira de criar elementos de lista