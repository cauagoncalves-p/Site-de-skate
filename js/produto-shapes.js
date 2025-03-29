document.addEventListener('DOMContentLoaded', () => {
    const produtosLoja = [
        {
            image: './imagens/imagens-produtos-shapes/SHAPE-DARKSTAR/shape_darkstar_whip.png',
            imagem1: './imagens/imagens-produtos-shapes/SHAPE-DARKSTAR/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-shapes/SHAPE-DARKSTAR/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-shapes/SHAPE-DARKSTAR/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produto-shapes/SHAPE-DARKSTAR/shape_darkstar_whip.png',
            textoAlternativo: 'Shape DarkStar Whip',
            classificacao: 'lançamento',
            titulo: 'Shape DarkStar Whip',
            preco: 'R$ 369,99',
            precoDesconto: 'R$ 297,99',
            parcelamento: 'ou 3x de R$99,33 sem juros',
            descricao: 'O Shape DarkStar Whip é a escolha ideal para skatistas que buscam qualidade e desempenho. Fabricado com 100% maple canadense, seu design robusto e pop excepcional garantem manobras precisas em qualquer ambiente.'
        },
        {
            image: './imagens/imagens-produtos-shapes/SHAPE-FLIP/shape_flip_hkd.png',
            imagem1: './imagens/imagens-produtos-shapes/SHAPE-FLIP/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-shapes/SHAPE-FLIP/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-shapes/SHAPE-FLIP/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-shapes/SHAPE-FLIP/shape_flip_hkd.png',
            textoAlternativo: 'Shape Flip HKD 8.0"',
            classificacao: 'lançamento',
            titulo: 'Shape Flip HKD 8.0"',
            preco: 'R$ 349,99',
            precoDesconto: 'R$ 314,99',
            parcelamento: 'ou 4x de R$78,75 sem juros',
            descricao: 'O Shape Flip HKD 8.0 é feito com maple canadense de alta qualidade, oferecendo leveza e durabilidade. Seu design elegante proporciona excelente pop e resposta, ideal para skatistas que valorizam performance e estilo.'
        },
        {
            image: './imagens/imagens-produtos-shapes/SHAPE-BAKER-BRAND/shape_baker_brand.png',
            imagem1: './imagens/imagens-produtos-shapes/SHAPE-BAKER-BRAND/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-shapes/SHAPE-BAKER-BRAND/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-shapes/SHAPE-BAKER-BRAND/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-shapes/SHAPE-BAKER-BRAND/shape_baker_brand.png',
            textoAlternativo: 'Shape Baker Brand Logo 8.25"',
            classificacao: 'lançamento',
            titulo: 'Shape Baker Brand Logo 8.25"',
            preco: 'R$ 379,90',
            precoDesconto: 'R$ 341,91',
            parcelamento: 'ou 5x de R$68,38 sem juros',
            descricao: 'O Shape Baker Brand Logo 8.25 combina o icônico design da marca com performance superior. Confeccionado em maple, garante resistência e precisão para manobras radicais, atendendo a skatistas de todos os níveis.'
        },
        {
            image: './imagens/imagens-produtos-shapes/SHAPE-ELEMENT-PRIME/shape_element_prime.png',
            imagem1: './imagens/imagens-produtos-shapes/SHAPE-ELEMENT-PRIME/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-shapes/SHAPE-ELEMENT-PRIME/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-shapes/SHAPE-ELEMENT-PRIME/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-shapes/SHAPE-ELEMENT-PRIME/shape_element_prime.png',
            textoAlternativo: 'Shape Element Prime 8.0"',
            classificacao: 'lançamento',
            titulo: 'Shape Element Prime 8.0"',
            preco: 'R$ 359,90',
            precoDesconto: 'R$ 329,90',
            parcelamento: 'ou 3x de R$109,97 sem juros',
            descricao: 'O Shape Element Prime 8.0 é reconhecido pela sua construção de alta qualidade e design moderno. Feito com maple selecionado, proporciona estabilidade e controle excepcionais, ideal para manobras em street e park.'
        },
        {
            image: './imagens/imagens-produtos-shapes/SHAPE-PLANB/shape_planb_twin.png',
            imagem1: './imagens/imagens-produtos-shapes/SHAPE-PLANB/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-shapes/SHAPE-PLANB/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-shapes/SHAPE-PLANB/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-shapes/SHAPE-PLANB/shape_planb_twin.png',
            textoAlternativo: 'Shape Plan B Twin 8.5"',
            classificacao: 'lançamento',
            titulo: 'Shape Plan B Twin 8.5"',
            preco: 'R$ 389,90',
            precoDesconto: 'R$ 349,90',
            parcelamento: 'ou 5x de R$69,98 sem juros',
            descricao: 'O Shape Plan B Twin 8.5 é projetado para oferecer equilíbrio perfeito entre durabilidade e flexibilidade. Com construção em maple premium, proporciona resposta rápida e pop consistente, ideal para manobras ousadas.'
        },
        
        {
            image: './imagens/imagens-produtos-shapes/SHAPE-ALMOST/shape_almost_arto.png',
            imagem1: './imagens/imagens-produtos-shapes/SHAPE-ALMOST/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-shapes/SHAPE-ALMOST/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-shapes/SHAPE-ALMOST/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-shapes/SHAPE-ALMOST/shape_almost_arto.png',
            textoAlternativo: 'Shape Almost Arto 8.0"',
            classificacao: 'lançamento',
            titulo: 'Shape Almost Arto 8.0"',
            preco: 'R$ 379,90',
            precoDesconto: 'R$ 339,90',
            parcelamento: 'ou 4x de R$84,98 sem juros',
            descricao: 'O Shape Almost Arto 8.0 é popular entre skatistas que buscam performance e estilo. Fabricado com maple de alta resistência, oferece excelente controle e estabilidade, perfeito para manobras técnicas e street.'
        },
        {
            image: './imagens/imagens-produtos-shapes/SHAPE-GIRL/shape_girl_signature.png',
            imagem1: './imagens/imagens-produtos-shapes/SHAPE-GIRL/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-shapes/SHAPE-GIRL/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-shapes/SHAPE-GIRL/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-shapes/SHAPE-GIRL/shape_girl_signature.png',
            textoAlternativo: 'Shape Girl Signature 7.75"',
            classificacao: 'lançamento',
            titulo: 'Shape Girl Signature 7.75"',
            preco: 'R$ 329,90',
            precoDesconto: 'R$ 299,90',
            parcelamento: 'ou 5x de R$59,98 sem juros',
            descricao: 'O Shape Girl Signature 7.75 é especialmente projetado para oferecer leveza e agilidade. Com design exclusivo e construção em maple, garante resposta rápida e manobras precisas, ideal para skatistas que buscam um shape diferenciado.'
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
