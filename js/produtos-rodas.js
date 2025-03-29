    document.addEventListener('DOMContentLoaded', () => {
        const produtosLoja = [
            {
                image: './imagens/imagens-produtos-rodas/RODA-SPITFIRE-CLASSIC/roda_spitfire_classic.png',
                imagem1: './imagens/imagens-produtos-rodas/RODA-SPITFIRE-CLASSIC/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-rodas/RODA-SPITFIRE-CLASSIC/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-rodas/RODA-SPITFIRE-CLASSIC/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-rodas/RODA-SPITFIRE-CLASSIC/roda_spitfire_classic.png',
                textoAlternativo: 'Roda Spitfire Classic',
                classificacao: 'lançamento',
                titulo: 'Roda Spitfire Classic 52mm - 99DU',
                preco: 'R$ 432,90',
                precoDesconto: 'R$ 389,61',
                parcelamento: 'ou 4x de R$97,40 sem juros',
                descricao: 'A Roda Spitfire Classic oferece excelente desempenho e durabilidade, ideal para todos os tipos de terreno.'
            },
            {
                image: './imagens/imagens-produtos-rodas/RODA-BONES-STF/roda_bones_stf.png',
                imagem1: './imagens/imagens-produtos-rodas/RODA-BONES-STF/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-rodas/RODA-BONES-STF/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-rodas/RODA-BONES-STF/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-rodas/RODA-BONES-STF/roda_bones_stf.png',
                textoAlternativo: 'Roda Bones STF',
                classificacao: 'destaque',
                titulo: 'Roda Bones STF 53mm - 103A',
                preco: 'R$ 449,99',
                precoDesconto: 'R$ 404,99',
                parcelamento: 'ou 4x de R$101,25 sem juros',
                descricao: 'A Roda Bones STF é conhecida por sua resistência ao flatspot e excelente controle em slides.'
            },
            {
                image: './imagens/imagens-produtos-rodas/RODA-MOSKA-T55/roda_moska_t55.png', 
                imagem1: './imagens/imagens-produtos-rodas/RODA-MOSKA-T55/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-rodas/RODA-MOSKA-T55/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-rodas/RODA-MOSKA-T55/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-rodas/RODA-MOSKA-T55/roda_moska_t55.png',
                textoAlternativo: 'Roda Moska T.55mm',
                classificacao: 'promoção',
                titulo: 'Roda Moska T.55mm',
                preco: 'R$ 139,99',
                precoDesconto: 'R$ 125,99',
                parcelamento: 'ou 4x de R$31,50 sem juros',
                descricao: 'A Roda Moska T.55mm é ideal para quem busca qualidade e custo-benefício, perfeita para street e park.'
            },
            {
                image: './imagens/imagens-produtos-rodas/RODA-PRIMOR/roda_primor_skateboards.png',
                imagem1: './imagens/imagens-produtos-rodas/RODA-PRIMOR/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-rodas/RODA-PRIMOR/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-rodas/RODA-PRIMOR/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-rodas/RODA-PRIMOR/roda_primor_skateboards.png',
                textoAlternativo: 'Roda Primor Skateboards',
                classificacao: 'lançamento',
                titulo: 'Roda Primor Skateboards 54mm - 100A',
                preco: 'R$ 225,90',
                precoDesconto: 'R$ 203,31',
                parcelamento: 'ou 4x de R$50,83 sem juros',
                descricao: 'A Roda Primor Skateboards oferece alta performance com design exclusivo da marca.'
            },
            {
                image: './imagens/imagens-produtos-rodas/RODA-TOY/roda_toy_machine_sect.png',
                imagem1: './imagens/imagens-produtos-rodas/RODA-TOY/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-rodas/RODA-TOY/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produto-rodas/RODA-TOY/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-rodas/RODA-TOY/roda_toy_machine_sect.png',
                textoAlternativo: 'Roda Toy Machine Sect',
                classificacao: 'destaque',
                titulo: 'Roda Toy Machine Sect 52mm - 99A',
                preco: 'R$ 209,90',
                precoDesconto: 'R$ 188,91',
                parcelamento: 'ou 4x de R$47,23 sem juros',
                descricao: 'A Roda Toy Machine Sect apresenta design icônico e excelente desempenho para diversas modalidades.'
            },
            {
                image: './imagens/imagens-produtos-rodas/RODA-BONES-X/roda_bones_x_formula_v6.png',
                imagem1: './imagens/imagens-produtos-rodas/RODA-BONES-X/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-rodas/RODA-BONES-X/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-rodas/RODA-BONES-X/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-rodas/RODA-BONES-X/roda_bones_x_formula_v6.png',
                textoAlternativo: 'Roda Bones X-Formula V6 54mm 99A',
                classificacao: 'lançamento',
                titulo: 'Roda Bones X-Formula V6 54mm 99A',
                preco: 'R$ 349,90',
                precoDesconto: 'R$ 314,91',
                parcelamento: 'ou 3x de R$104,97 sem juros',
                descricao: 'As rodas Bones X-Formula V6 oferecem alta performance com dureza 99A, ideais para manobras técnicas em superfícies lisas.'
            },
            {
                image: './imagens/imagens-produtos-rodas/RODA-MOSKA-ROCK/roda_moska_skate_rock_black.png',
                imagem1: './imagens/imagens-produtos-rodas/RODA-MOSKA-ROCK/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-rodas/RODA-MOSKA-ROCK/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-rodas/RODA-MOSKA-ROCK/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-rodas/RODA-MOSKA-ROCK/roda_moska_skate_rock_black.png',
                textoAlternativo: 'Roda Moska Skate Rock Black 55mm Dureza 53D',
                classificacao: 'destaque',
                titulo: 'Roda Moska Skate Rock Black 55mm Dureza 53D',
                preco: 'R$ 199,90',
                precoDesconto: 'R$ 179,91',
                parcelamento: 'ou 3x de R$59,97 sem juros',
                descricao: 'As rodas Moska Skate Rock Black são conhecidas por sua durabilidade e aderência, perfeitas para diferentes tipos de terreno.'
            },
            {
                image: './imagens/imagens-produtos-rodas/RODA-SPITFIRE/roda_spitfire_bighead.png',
                imagem1: './imagens/imagens-produtos-rodas/RODA-SPITFIRE/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-rodas/RODA-SPITFIRE/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-rodas/RODA-SPITFIRE/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-rodas/RODA-SPITFIRE/roda_spitfire_bighead.png',
                textoAlternativo: 'Roda Spitfire Bighead 54mm Dureza 99A',
                classificacao: 'promoção',
                titulo: 'Roda Spitfire Bighead 54mm Dureza 99A',
                preco: 'R$ 299,90',
                precoDesconto: 'R$ 269,91',
                parcelamento: 'ou 3x de R$89,97 sem juros',
                descricao: 'As rodas Spitfire Bighead são reconhecidas mundialmente por sua qualidade e design icônico, oferecendo excelente desempenho.'
            }
        ];
    
        const produtosGrid = document.querySelector('.aba-produtos');

        produtosLoja.forEach(prod => {
            const produtosCard = document.createElement('div');
            produtosCard.classList.add('card-produtos');
      
            produtosCard.innerHTML = `
                <div class="card-imagem">
                    <img src="${prod.image}" alt="${prod.textoAlternativo}">
                    <div class="card-imagem-hover">
                        <img src="${prod.imagem1}" alt="${prod.textoAlternativo}">
                    </div>
                </div>
                <div class="info-produtos">
                    <h4>${prod.classificacao}</h4>
                    <h3>${prod.titulo.toUpperCase()}</h3>
                    <div class="precos">
                        <span>${prod.preco}</span>
                        <p>${prod.precoDesconto}</p>
                    </div>
                    <p class="parcelamento">${prod.parcelamento}</p>
                </div>
              <button class="botao-cardProdutos" onclick="verProduto('${encodeURIComponent(prod.titulo)}', '${encodeURIComponent(prod.preco)}', '${encodeURIComponent(prod.precoDesconto)}', '${encodeURIComponent(prod.image)}','${encodeURIComponent(prod.parcelamento)}', '${encodeURIComponent(prod.descricao)}', '${encodeURIComponent(prod.textoAlternativo)}', '${encodeURIComponent(prod.imagemDemostracao1)}', '${encodeURIComponent(prod.imagemDemostracao2)}', '${encodeURIComponent(prod.imagemDemostracao3)}')">Ver Produto</button>
          `;
      
            produtosGrid.appendChild(produtosCard);
        });
      });
      
      
      function verProduto(nome, preco, precoDesconto, imagem, parcelamento, descricao, textoAlternativo, imagemDemostracao1, imagemDemostracao2, imagemDemostracao3) {
        const url = `verProduto.html?nome=${nome}&preco=${preco}&precoDesconto=${precoDesconto}&imagem=${imagem}&parcelamento=${parcelamento}&descricao=${descricao}&textoAlternativo=${textoAlternativo}&imagemDemostracao1=${imagemDemostracao1}&imagemDemostracao2=${imagemDemostracao2}&imagemDemostracao3=${imagemDemostracao3}`;
        window.location.href = url;
      }

// função para abrir a opção de filtros da pagina de skate
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu-filter');
const arrow = document.querySelector('.arrow');
const selectedText = document.getElementById('selected-option');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

function selectOption(option) {
  selectedText.textContent = option;
  dropdownMenu.classList.remove('show');
}

// Fecha o dropdown se clicar fora dele
document.addEventListener('click', (event) => {
  if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('show');
  }
});


// Função que mostra as opções de filtros na tela
const botoes = document.querySelectorAll('.verMais');

botoes.forEach(botao => {
  const Textobotao = botao.textContent;
  
  botao.addEventListener('click', () => {
    const container = botao.closest('.checkbox, .categoria');
    const labels = container.querySelectorAll('.label-grup-none');
    
    labels.forEach(label => {
      label.classList.toggle('hidden');
    });

    if (botao.textContent === Textobotao) {
      botao.textContent = "Ver menos";
    } else {
      botao.textContent = Textobotao;
    }
  });
});

    // Elementos do modal
    const modal = document.getElementById('atendimentoModal');
    const openModal = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeBtn');

    // Abre o modal ao clicar no botão
    openModal.addEventListener('click', () => {
      modal.classList.add('ativo');
    });

    // Fecha o modal ao clicar no "X"
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('ativo');
    });

    // Fecha o modal ao clicar fora da área do conteúdo
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('ativo');
      }
    });

  // Menu dropdown
  const menu = document.querySelector('.user-menu');
  const menudropdown = document.querySelector('.dropdown-menu');

  menu.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique no menu propague para o window
    menudropdown.classList.toggle('active');
  });

  window.addEventListener('click', (event) => {
    if (event.target !== menu && !menudropdown.contains(event.target)) {
      menudropdown.classList.remove('active');
    }
  });
