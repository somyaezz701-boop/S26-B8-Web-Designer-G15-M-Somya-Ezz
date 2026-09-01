var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var btn = document.getElementById('addUserBtn');
var divContainer = document.getElementById('divContainer');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  var nameValue = nameInput.value;
  var emailValue = emailInput.value;
  var div = document.createElement('div');
  var h3 = document.createElement('h3');
  var h4 = document.createElement('h4');
  h3.innerText = nameValue;
  h4.innerText = emailValue;
  div.appendChild(h3);
  div.appendChild(h4);
  div.classList.add('alert', 'alert-primary');
  divContainer.appendChild(div);
});


