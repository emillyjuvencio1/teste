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

const btnEditarNome     = document.querySelector('#btn-editar-nome');
const formEdicao        = document.querySelector('#form-edicao');
const inputNome         = document.querySelector('#input-nome');
const inputProfissao    = document.querySelector('#input-profissao');
const nomeUsuario       = document.querySelector('#nome-usuario');
const profissaoUsuario  = document.querySelector('#profissao-usuario');

btnEditarNome.addEventListener('click', () => {
   formEdicao.style.display = 'block';
   
   inputNome.value = nomeUsuario.textContent;
   inputProfissao.value = profissaoUsuario.textContent;
});

const btnSalvar     = document.querySelector('#btn-salvar');
const btnCancelar   = document.querySelector('#btn-cancelar');

btnSalvar.addEventListener('click', () => {
    const novoNome = inputNome.value.trim(); //trim tira oq n é necessario
    const novaProfissao = inputProfissao.value.trim();

    if(novoNome === ''){
        alert('Nome vazio!');
        return;
    }

    nomeUsuario.textContent = novoNome;
    profissaoUsuario.textContent = novaProfissao || 'Sem profissão';

    formEdicao.style.display = 'nome';
});

btnCancelar.addEventListener('click', () => {
    formEdicao.style.display = 'none';
});

//trocar foto de perfil
const btnTrocarFoto = document.querySelector('#btn-trocar-foto');
const fotoOpcoes = document.querySelector('#foto-opcoes');
const fotoPerfil = document.querySelector('#foto-perfil');

btnTrocarFoto.addEventListener('click', () => {
    if(fotoOpcoes.style.display === 'black'){
        fotoOpcoes.style.display = 'none';
    }else{
        fotoOpcoes.style.display = 'block';
        formEdicao.style.display = 'none';
    }
});

const todasFotos = document.querySelectorAll('.foto-opcao');

todasFotos.forEach(opcao => { //tipo um for mas faz auto

    opcao.addEventListener('click', () => {

        //<img dat-seed="Felix"> -> opcao.dataset.seed === "Felix"
        const seed = opcao.dataset.seed; //dataset conjunto de dados

        fotoPerfil.src = `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`; //buscando na net as img

        todasFotos.forEach(f = f.classList.remove('selecionada'));
        opcao.classList.add('selecionada');

        fotoOpcoes.style.display = 'none';

        console.log('Avatar trocado para:', seed);
    });
});