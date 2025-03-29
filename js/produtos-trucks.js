document.addEventListener('DOMContentLoaded', () => {
    const produtosLoja = [
        {
            image: './imagens/imagens-produtos-trucks/TRUCK-CRAIL/truck_crail_classic_black.png',
            imagem1: './imagens/imagens-produtos-trucks/TRUCK-CRAIL/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-trucks/TRUCK-CRAIL/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-trucks/TRUCK-CRAIL/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-trucks/TRUCK-CRAIL/truck_crail_classic_black.png',
            textoAlternativo: 'Truck Crail Classic Preto Fosco',
            classificacao: 'lançamento',
            titulo: 'Truck Crail Classic 139mm Preto Fosco',
            preco: 'R$ 199,99',
            precoDesconto: 'R$ 179,99',
            parcelamento: 'ou 3x de R$59,99 sem juros',
            descricao: 'O Truck Crail Classic 139mm em Preto Fosco oferece excelente estabilidade e controle para manobras técnicas. Ideal para shapes de 8.0" a 8.25".'
        },
        {
            image: './imagens/imagens-produtos-trucks/TRUCK-INDEPENDENT/truck_independent_stage11_silver.png',
            imagem1: './imagens/imagens-produtos-trucks/TRUCK-INDEPENDENT/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-trucks/TRUCK-INDEPENDENT/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-trucks/TRUCK-INDEPENDENT/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-trucks/TRUCK-INDEPENDENT/truck_independent_stage11_silver.png',
            textoAlternativo: 'Truck Independent Stage 11 Prata',
            classificacao: 'destaque',
            titulo: 'Truck Independent Stage 11 149mm Prata',
            preco: 'R$ 249,99',
            precoDesconto: 'R$ 224,99',
            parcelamento: 'ou 4x de R$56,25 sem juros',
            descricao: 'O Truck Independent Stage 11 149mm em acabamento Prata é conhecido por sua durabilidade e performance superior. Recomendado para shapes de 8.5" e maiores.'
        },
        {
            image: './imagens/imagens-produtos-trucks/TRUCK-THUNDER/truck_thunder_polished_red.png',
            imagem1: './imagens/imagens-produtos-trucks/TRUCK-THUNDER/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-trucks/TRUCK-THUNDER/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-trucks/TRUCK-THUNDER/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-trucks/TRUCK-THUNDER/truck_thunder_polished_red.png',
            textoAlternativo: 'Truck Thunder Polished Vermelho',
            classificacao: 'promoção',
            titulo: 'Truck Thunder Polished 147mm Vermelho Neon',
            preco: 'R$ 239,90',
            precoDesconto: 'R$ 215,91',
            parcelamento: 'ou 5x de R$43,18 sem juros',
            descricao: 'O Truck Thunder Polished 147mm em Vermelho Neon combina leveza e resistência, proporcionando respostas rápidas em manobras. Ideal para shapes de 8.0" a 8.5".'
        },
        {
            image: './imagens/imagens-produtos-trucks/TRUCK-TENSOR/truck_tensor_maglight_blue.png',
            imagem1: './imagens/imagens-produtos-trucks/TRUCK-TENSOR/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-trucks/TRUCK-TENSOR/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-trucks/TRUCK-TENSOR/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-trucks/TRUCK-TENSOR/truck_tensor_maglight_blue.png',
            textoAlternativo: 'Truck Tensor MagLight Azul',
            classificacao: 'lançamento',
            titulo: 'Truck Tensor MagLight 139mm Azul Elétrico',
            preco: 'R$ 269,90',
            precoDesconto: 'R$ 242,91',
            parcelamento: 'ou 6x de R$40,49 sem juros',
            descricao: 'O Truck Tensor MagLight 139mm em Azul Elétrico é um dos trucks mais leves do mercado, oferecendo excelente controle e estabilidade. Perfeito para shapes de 7.75" a 8.25".'
        },
        {
            image: './imagens/imagens-produtos-trucks/TRUCK-VENTURE-POLISHED/truck_venture_polished_green.png',
            imagem1: './imagens/imagens-produtos-trucks/TRUCK-VENTURE-POLISHED/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-trucks/TRUCK-VENTURE-POLISHED/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-trucks/TRUCK-VENTURE-POLISHED/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-trucks/TRUCK-VENTURE-POLISHED/truck_venture_polished_green.png',
            textoAlternativo: 'Truck Venture Polished Verde',
            classificacao: 'destaque',
            titulo: 'Truck Venture Polished 148mm Verde Militar',
            preco: 'R$ 219,90',
            precoDesconto: 'R$ 197,91',
            parcelamento: 'ou 4x de R$49,48 sem juros',
            descricao: 'O Truck Venture Polished 148mm em Verde Militar é reconhecido por sua robustez e design clássico. Adequado para shapes de 8.25" a 8.5".'
        },
        {
            image: './imagens/imagens-produtos-trucks/TRUCK-SILVER/truck_silver_m_class_black.png',
            imagem1: './imagens/imagens-produtos-trucks/TRUCK-SILVER/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-trucks/TRUCK-SILVER/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-trucks/TRUCK-SILVER/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-trucks/TRUCK-SILVER/truck_silver_m_class_black.png',
            textoAlternativo: 'Truck Silver M-Class Preto',
            classificacao: 'promoção',
            titulo: 'Truck Silver M-Class 139mm Preto Fosco',
            preco: 'R$ 189,90',
            precoDesconto: 'R$ 170,91',
            parcelamento: 'ou 3x de R$56,97 sem juros',
            descricao: 'O Truck Silver M-Class 139mm em Preto Fosco oferece um equilíbrio perfeito entre peso e resistência, ideal para skatistas que buscam performance versátil. Compatível com shapes de 8.0" a 8.25".'
        },
        {
            image: './imagens/imagens-produtos-trucks/TRUCK-THUNDER-TEAM/truck_thunder_team_hollow.png',
            imagem1: './imagens/imagens-produtos-trucks/TRUCK-THUNDER-TEAM/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-trucks/TRUCK-THUNDER-TEAM/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-trucks/TRUCK-THUNDER-TEAM/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-trucks/TRUCK-THUNDER-TEAM/truck_thunder_team_hollow.png',
            textoAlternativo: 'Truck Thunder Team Hollow',
            classificacao: 'lançamento',
            titulo: 'Truck Thunder Team Hollow',
            preco: 'R$ 459,90',
            precoDesconto: 'R$ 413,91',
            parcelamento: 'ou 6x de R$68,98 sem juros',
            descricao: 'O Truck Thunder Team Hollow é reconhecido por sua combinação de leveza e durabilidade. Ideal para skatistas que buscam performance superior em manobras de street e park.'
        },
        {
            image: './imagens/imagens-produtos-trucks/TRUCK-ROYAL/truck_royal_inverted_kingpin.png',
            imagem1: './imagens/imagens-produtos-trucks/TRUCK-ROYAL/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-trucks/TRUCK-ROYAL/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-trucks/TRUCK-ROYAL/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-trucks/TRUCK-ROYAL/truck_royal_inverted_kingpin.png',
            textoAlternativo: 'Truck Royal Inverted Kingpin',
            classificacao: 'lançamento',
            titulo: 'Truck Royal Inverted Kingpin',
            preco: 'R$ 439,90',
            precoDesconto: 'R$ 395,91',
            parcelamento: 'ou 6x de R$65,98 sem juros',
            descricao: 'O Truck Royal Inverted Kingpin apresenta um design inovador com parafuso central invertido, proporcionando maior espaço para grinds e manobras em corrimãos, sem sacrificar a resistência.'
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
