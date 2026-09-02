let users =[
    {name: "somya" , email:"somyaezz@gmail.com"},
    {name:"nada" ,email :"nadaahmed@gmail.com"},
    {name : "ali" , email : "alisamy@gmail.com"}
];

console.table(users)
localStorage.setItem("users", JSON.stringify(users));
let usersList = JSON.parse(localStorage.getItem('users'))
usersList.push({name:"mohamed" ,email :'mohamedezz@gmail.com'});
localStorage.setItem('usersList',JSON.stringify(usersList))
console.table(usersList)

let container = document.getElementById("container");
usersList.forEach(user => {
  let cardDiv = document.createElement("div");
  cardDiv.className = "user-card"; 
  let nameElement = document.createElement("h1");
  nameElement.textContent = user.name;
  let emailElement = document.createElement("h3");
  emailElement.textContent = user.email;

  cardDiv.appendChild(nameElement);
  cardDiv.appendChild(emailElement);
  container.appendChild(cardDiv);
});
