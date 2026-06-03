const btnTema = document.querySelector('#btn-tema');

btnTema.addEventListener('click', () => { //so vai funcionar se o user clicar (tudo dentro vai ativar)
    document.body.classList.toggle('dark');

    //const = sempre q clicar ele cria um novo, n vai ser a msm const
    const modoEscuro = document.body.classList.contains('dark'); // se o modo estiver no modo escuro retorna true senão false

    btnTema.textContent = modoEscuro ? '☀️ Modo Claro' : '🌙 Modo Escuro'; //if ternario (if numa linha só). Se o modo estiver em true = modo claro sn o modo escuro
});

const btnToggleInfo = document.querySelector('#btn-toggle-info'); //clicou
const infoCorpo     = document.querySelector('#info-corpo');

btnToggleInfo.addEventListener('click', () => { //ativou
    const visivel = infoCorpo.style.display !== 'none'; //tava display block e mudou pra none 

    if(visivel){
        infoCorpo.style.display = 'none'
        btnToggleInfo.textContent = 'Mostrar';
    }else{
        infoCorpo.style.display = 'block';
        btnToggleInfo.textContent = 'Ocultar';
    }

    //visivel ? (infoCorpo.style.display = 'none', btnToggleInfo.textContent = 'Mostrar') : (infoCorpo.style.display = 'block', btnToggleInfo.textContent = 'Ocultar');
});

const btnAumentarJs = document.querySelector('#btn-aumentar-js');
const barraJs       = document.querySelector('#barra-js');
const nivelJs       = document.querySelector('#nivel-js');

btnAumentarJs.addEventListener('click', () => {
    const nivelAtual = parseInt(nivelJs.textContent);

    if(nivelAtual >= 100){
        btnAumentarJs.textContent = 'Javascript Dominado';
        btnAumentarJs.disabled = 'true';
        return;
    }

    const novoNivel = Math.min(nivelAtual + 10, 100);

    nivelJs.textContent = novoNivel + '%';

    barraJs.style.width = novoNivel + '%';
});



