const personagens = [
    { nome: "Aragorn", classe: "Guerreiro", nivel: 15 },
    { nome: "Gandalf", classe: "Mago",      nivel: 20 },
    { nome: "Legolas", classe: "Arqueiro",  nivel: 12 },
    { nome: "Gimli",   classe: "Bárbaro",   nivel: 10 }
  ];

const cardPersonagem = document.querySelector('#container');
console.log(personagens.length);

personagens.forEach(personagem => {
    cardPersonagem.innerHTML += `
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${personagem.nome}</h4>
                <p class="classe">${personagem.classe}</p>
                <p class="nivel">${personagem.nivel}</p>
            </div>
        </div>
    `;
});
