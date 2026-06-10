const caixa = document.querySelector('#caixa');
console.log(caixa.textContent);

caixa.classList.add('destaque');

const alerta = document.querySelector('#alerta');
console.log(alerta.textContent);

alerta.classList.add('oculto');

const card = document.querySelector('#card');
console.log(card.textContent);

card.classList.add('erro');

console.log(caixa.classList.contains('destaque'));
console.log(alerta.classList.contains('oculto'));
console.log(card.classList.contains('erro'));

//teste com o if
if(caixa.classList.contains('destaque')){
    console.log('funciona');
}else{
    console.log('não funciona');
}

//-----------------------------------------------

if(alerta.classList.contains('oculto')){
    console.log('funciona');
}else{
    console.log('não funciona');
}

//-----------------------------------------------

if(card.classList.contains('erro')){
    console.log('funciona');
}else{
    console.log('não funciona');
}