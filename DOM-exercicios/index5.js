//criando um novo elemento li
const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");
const item4 = document.createElement("li");

//texto que vai ter dentro do li
item1.textContent = "C#";
item2.textContent = "C++";
item3.textContent = "JavaScript";
item4.textContent = "HTML";

//seleciona o ul
const lista = document.querySelector("ul");
//adiciona a li no ul
lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(item3);
lista.appendChild(item4);