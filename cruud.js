//Validação de formulário

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// Recupera as mensagens salvas localmente, se houver
let savedMessages = JSON.parse(localStorage.getItem("messages")) || [];

// Cria os elementos na página para cada mensagem salva
savedMessages.forEach(message => {
  posts.innerHTML += `
    <div>        
      <p>${message}</p>

      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");  
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "PARA SALVAR É NECESSÁRIO UMA ATIVIDADE";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};
let acceptData = () => {
  data["text"] = input.value;
  console.log(data)
  createPost();

  // Salva a nova mensagem localmente
  savedMessages.push(data.text);
  localStorage.setItem("messages", JSON.stringify(savedMessages));
};  

let createPost = () => {
  posts.innerHTML += `
    <div>        
      <p>${data.text}</p>

      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
  input.value = "";
};  

let deletePost = (e) => {
  e.parentElement.parentElement.remove();

  // Remove a mensagem salva localmente
  let message = e.parentElement.previousElementSibling.innerHTML;
  let index = savedMessages.indexOf(message);
  if (index > -1) {
    savedMessages.splice(index, 1);
    localStorage.setItem("messages", JSON.stringify(savedMessages));
  }
}

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();

  // Remove a mensagem salva localmente
  let message = e.parentElement.previousElementSibling.innerHTML;
  let index = savedMessages.indexOf(message);
  if (index > -1) {
    savedMessages.splice(index, 1);
    localStorage.setItem("messages", JSON.stringify(savedMessages));
  }
};


  

  
  
  
  