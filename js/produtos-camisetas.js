document.addEventListener('DOMContentLoaded', () => {
    const produtosLoja = [
        {
            image: './imagens/imagens-produtos-camisetas/CAMISETA-THRASHER-FLAME/camiseta_thrasher_flame_logo_preta.png',
            imagem1: './imagens/imagens-produtos-camisetas/CAMISETA-THRASHER-FLAME/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-camisetas/CAMISETA-THRASHER-FLAME/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-camisetas/CAMISETA-THRASHER-FLAME/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-camisetas/CAMISETA-THRASHER-FLAME/camiseta_thrasher_flame_logo_preta.png',
            textoAlternativo: 'Camiseta Thrasher Flame Logo Preta',
            classificacao: 'lançamento',
            titulo: 'Camiseta Thrasher Flame Logo Preta',
            preco: 'R$ 179,99',
            precoDesconto: 'R$ 161,99',
            parcelamento: 'ou 3x de R$53,99 sem juros',
            descricao: 'A clássica camiseta Thrasher Flame Logo na cor preta, confeccionada em algodão de alta qualidade, oferece conforto e estilo para os amantes do skate.'
        },
        {
            image: './imagens/imagens-produtos-camisetas/CAMISETA-SANTA-CRUZ/camiseta_santa_cruz_paisley_dot_preta.png',
            imagem1: './imagens/imagens-produtos-camisetas/CAMISETA-SANTA-CRUZ/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-camisetas/CAMISETA-SANTA-CRUZ/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-camisetas/CAMISETA-SANTA-CRUZ/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-camisetas/CAMISETA-SANTA-CRUZ/camiseta_santa_cruz_paisley_dot_preta.png',
            textoAlternativo: 'Camiseta Santa Cruz Paisley Dot Preta',
            classificacao: 'destaque',
            titulo: 'Camiseta Santa Cruz Paisley Dot Preta',
            preco: 'R$ 159,99',
            precoDesconto: 'R$ 143,99',
            parcelamento: 'ou 3x de R$47,99 sem juros',
            descricao: 'A camiseta Santa Cruz Paisley Dot apresenta o icônico logo da marca com um design paisley, perfeita para quem busca autenticidade no visual.'
        },
        {
            image: './imagens/imagens-produtos-camisetas/CAMISETA-VANS-OTW/camiseta_vans_otw_classic_preta.png',
            imagem1: './imagens/imagens-produtos-camisetas/CAMISETA-VANS-OTW/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-camisetas/CAMISETA-VANS-OTW/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-camisetas/CAMISETA-VANS-OTW/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-camisetas/CAMISETA-VANS-OTW/camiseta_vans_otw_classic_preta.png',
            textoAlternativo: 'Camiseta Vans OTW Classic Preta',
            classificacao: 'promoção',
            titulo: 'Camiseta Vans OTW Classic Preta',
            preco: 'R$ 149,90',
            precoDesconto: 'R$ 134,91',
            parcelamento: 'ou 3x de R$44,97 sem juros',
            descricao: 'A camiseta Vans Off The Wall Classic na cor preta é uma peça essencial para os fãs da marca, combinando simplicidade e estilo.'
        },
        {
            image: './imagens/imagens-produtos-camisetas/CAMISETA-ELEMENTE-PRETA/camiseta_element_skate_preta.png',
            imagem1: './imagens/imagens-produtos-camisetas/CAMISETA-ELEMENTE-PRETA/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-camisetas/CAMISETA-ELEMENTE-PRETA/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-camisetas/CAMISETA-ELEMENTE-PRETA/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-camisetas/CAMISETA-ELEMENTE-PRETA/camiseta_element_skate_preta.png',
            textoAlternativo: 'Camiseta Element Skate Preta',
            classificacao: 'lançamento',
            titulo: 'Camiseta Element Skate Preta',
            preco: 'R$ 139,90',
            precoDesconto: 'R$ 125,91',
            parcelamento: 'ou 3x de R$41,97 sem juros',
            descricao: 'A camiseta Element Skate na cor preta é confeccionada em material de alta qualidade, garantindo durabilidade e conforto durante as sessões de skate.'
        },
        {
            image: './imagens/imagens-produtos-camisetas/CAMISETA-NIKESB/camiseta_nike_sb_branca.png',
            imagem1: './imagens/imagens-produtos-camisetas/CAMISETA-NIKESB/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-camisetas/CAMISETA-NIKESB/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-camisetas/CAMISETA-NIKESB/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-camisetas/CAMISETA-NIKESB/camiseta_nike_sb_branca.png',
            textoAlternativo: 'Camiseta Nike SB Branca',
            classificacao: 'destaque',
            titulo: 'Camiseta Nike SB Branca',
            preco: 'R$ 169,90',
            precoDesconto: 'R$ 152,91',
            parcelamento: 'ou 3x de R$50,97 sem juros',
            descricao: 'A camiseta Nike SB na cor branca oferece um design clean e moderno, ideal para quem busca performance e estilo nas pistas.'
        },
        {
            image: './imagens/imagens-produtos-camisetas/CAMISETA-THRASHER-PRETA/camiseta_thrasher_skate_goat_preta.png',
            imagem1: './imagens/imagens-produtos-camisetas/CAMISETA-THRASHER-PRETA/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-camisetas/CAMISETA-THRASHER-PRETA/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-camisetas/CAMISETA-THRASHER-PRETA/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-camisetas/CAMISETA-THRASHER-PRETA/camiseta_thrasher_skate_goat_preta.png',
            textoAlternativo: 'Camiseta Thrasher Skate Goat Preta',
            classificacao: 'promoção',
            titulo: 'Camiseta Thrasher Skate Goat Preta',
            preco: 'R$ 179,90',
            precoDesconto: 'R$ 161,91',
            parcelamento: 'ou 3x de R$53,97 sem juros',
            descricao: 'A camiseta Thrasher Skate Goat apresenta uma estampa marcante, perfeita para quem deseja se destacar com atitude.'
        },
        {
            image: './imagens/imagens-produtos-camisetas/CAMISETA-VANS-ROSA/camiseta_vans_classic_rosa.png',
            imagem1: './imagens/imagens-produtos-camisetas/CAMISETA-VANS-ROSA/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-camisetas/CAMISETA-VANS-ROSA/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-camisetas/CAMISETA-VANS-ROSA/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-camisetas/CAMISETA-VANS-ROSA/camiseta_vans_classic_rosa.png',
            textoAlternativo: 'Camiseta Vans Classic Rosa',
            classificacao: 'lançamento',
            titulo: 'Camiseta Vans Classic Rosa',
            preco: 'R$ 149,90',
            precoDesconto: 'R$ 134,91',
            parcelamento: 'ou 3x de R$44,97 sem juros',
            descricao: 'A camiseta Vans Classic na cor rosa é uma opção estilosa e descontraída para complementar seu guarda-roupa.'
        },
        {
            image: './imagens/imagens-produtos-camisetas/CAMISETA-ELEMENTE-BRANCA/camiseta_element_branca.png',
            imagem1: './imagens/imagens-produtos-camisetas/CAMISETA-ELEMENTE-BRANCA/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-camisetas/CAMISETA-ELEMENTE-BRANCA/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-camisetas/CAMISETA-ELEMENTE-BRANCA/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-camisetas/CAMISETA-ELEMENTE-BRANCA/camiseta_element_branca.png',
            textoAlternativo: 'Camiseta Element Skate Branca',
            classificacao: 'lançamento',
            titulo: 'Camiseta Element Skate Branca',
            preco: 'R$ 139,90',
            precoDesconto: 'R$ 125,91',
            parcelamento: 'ou 3x de R$41,97 sem juros',
            descricao: 'A camiseta Element Skate na cor branca combina conforto e durabilidade, ideal para o dia a dia e para as sessões de skate.'
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
