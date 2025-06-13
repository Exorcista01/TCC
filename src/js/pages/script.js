document.querySelector(".toggle").addEventListener("click", function() {
    document.querySelector(".wrapper").classList.toggle("collapse");
});


const settingsToggle = document.getElementById('settings-toggle');
const menuOverflow = document.getElementById("overflow");

settingsToggle.addEventListener('click', function(e) {
  e.preventDefault();
  menuOverflow.style.display = 'flex';
});

menuOverflow.addEventListener('click', function(e) {
  if (e.target === menuOverflow) {
    menuOverflow.style.display = 'none';
  }
});
  

const inputTasks = document.getElementById("InputTasks");
const list = document.getElementById("list");
function addTask(){

  if(inputTasks.value === ''){
    alert("You must write something!")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputTasks.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputTasks.value = "";
  saveData();
  event.preventDefault(); // impede o envio do formulário
}

list.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", list.innerHTML);
}

function showTask(){
  list.innerHTML = localStorage.getItem("data");
}
showTask()

// Função para remover e aplicar a classe "active"
function setActive(buttonId) {
  document.querySelectorAll(".nav-pomo > div").forEach(div => {
    div.classList.remove("active");
  });
  // Adiciona "active" ao pai do botão clicado
  document.getElementById(buttonId).closest("div").parentElement.classList.add("active");
}

