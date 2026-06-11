const itens = document.querySelectorAll('.item');
itens.classL

console.log(itens[0]);
console.log(itens.length);

itens.forEach((item, indice)  => {
    console.log(`${indice} : ${item.textContent}`);
});