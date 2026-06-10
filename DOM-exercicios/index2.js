const titulo = document.querySelector('#titulo');
console.log(titulo.textContent);

titulo.textContent = "JavaScript no DOM!";

const subtitulo = document.querySelector('#subtitulo');
console.log(subtitulo.textContent);

subtitulo.textContent = "Emilly";

const caixa = document.querySelector('#caixa');
console.log(caixa.textContent);

subtitulo.innerHTML = "<strong>Conteúdo alterado</strong>"

