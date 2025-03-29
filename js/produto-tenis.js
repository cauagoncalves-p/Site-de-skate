document.addEventListener('DOMContentLoaded', () => {
    const produtosLoja = [
        {
            image: './imagens/imagens-produtos-tenis/TENIS-DC-SHOES-CAMURCA/tenis_dc_shoes_camurca.png',
            imagem1: './imagens/imagens-produtos-tenis/TENIS-DC-SHOES-CAMURCA/imagemDemostracao1.png',
            imagemDemostracao1:'./imagens/imagens-produtos-tenis/TENIS-DC-SHOES-CAMURCA/imagemDemostracao1.png',
            imagemDemostracao2:'./imagens/imagens-produtos-tenis/TENIS-DC-SHOES-CAMURCA/imagemDemostracao2.png',
            imagemDemostracao3:'./imagens/imagens-produtos-tenis/TENIS-DC-SHOES-CAMURCA/tenis_dc_shoes_camurca.png',
            textoAlternativo: 'Tênis DC Shoes Camurça',
            classificacao: 'lançamento',
            titulo: 'Tênis DC Shoes Camurça Ascend IMP | Off White',
            preco: 'R$ 987,90',
            precoDesconto: 'R$ 657,98',
            parcelamento: 'ou 6x de R$109,63 sem juros',
            descricao: 'O Tênis DC Shoes Camurça Ascend IMP oferece design premium com camurça de alta qualidade, proporcionando conforto e aderência excepcionais para manobras radicais.'
        },
        { image: './imagens/imagens-produtos-tenis/TENIS-HOCKS/tenis-hocks.png', 
          imagem1: './imagens/imagens-produtos-tenis/TENIS-HOCKS/imagemDemostracao1.png', 
          imagemDemostracao1: './imagens/imagens-produtos-tenis/TENIS-HOCKS/imagemDemostracao1.png',
          imagemDemostracao2: './imagens/imagens-produtos-tenis/TENIS-HOCKS/imagemDemostracao2.png',
          imagemDemostracao3: './imagens/imagens-produtos-tenis/TENIS-HOCKS/tenis-hocks.png',
          textoAlternativo: 'tenis de skate', 
          classificacao: 'lançamento', 
          titulo: 'Tênis Hocks Puff Psylocke', 
          preco: 'R$323,91', 
          precoDesconto: 'R$302,85', 
          parcelamento: 'ou 6 x de R$50,48 sem juros', 
          descricao: 'O Tênis Hocks Puff Psylocke une conforto e performance com design inovador. Confeccionado com materiais de alta qualidade, ele proporciona aderência excepcional e estabilidade, sendo ideal para skatistas que exigem segurança e estilo durante manobras radicais.' 
        },
        { image: './imagens/imagens-produtos-tenis/TENIS-FREEDAY/tenis1.png', 
          imagem1: './imagens/imagens-produtos-tenis/TENIS-FREEDAY/imagemDemostracao1.png', 
          imagemDemostracao1: './imagens/imagens-produtos-tenis/TENIS-FREEDAY/imagemDemostracao1.png', 
          imagemDemostracao2: './imagens/imagens-produtos-tenis/TENIS-FREEDAY/imagemDemostracao2.png', 
          imagemDemostracao3: './imagens/imagens-produtos-tenis/TENIS-FREEDAY/tenis1.png', 
          textoAlternativo: 'tenis de skate', 
          classificacao: 'lançamento', 
          titulo: 'Tênis Freeday Hero Preto Azul', 
          preco: 'R$ 399,99', 
          precoDesconto: 'R$ 347,99', 
          parcelamento: 'ou 10x de R$34,70 sem juros', 
          descricao: 'O Tênis Freeday Hero Preto Azul oferece conforto superior e performance excepcional. Com design moderno e cores impactantes, ele é perfeito para manobras radicais e uso diário, proporcionando aderência e estabilidade em cada movimento, ideal para skatistas que buscam estilo aliado à funcionalidade.' 
        },
        {
            image: './imagens/imagens-produtos-tenis/TENIS-DC-CLASSIC/tenis_dc_classic.png',
            imagem1: './imagens/imagens-produtos-tenis/TENIS-DC-CLASSIC/imagemDemostracao1.png',
            imagemDemostracao1:'./imagens/imagens-produtos-tenis/TENIS-DC-CLASSIC/imagemDemostracao1.png',
            imagemDemostracao2:'./imagens/imagens-produtos-tenis/TENIS-DC-CLASSIC/imagemDemostracao2.png',
            imagemDemostracao3:'./imagens/imagens-produtos-tenis/TENIS-DC-CLASSIC/tenis_dc_classic.png',
            textoAlternativo: 'Tênis DC Shoes Classic',
            classificacao: 'promoção',
            titulo: 'Tênis DC Shoes Classic',
            preco: 'R$ 359,90',
            precoDesconto: 'R$ 329,90',
            parcelamento: 'ou 6x de R$54,98 sem juros',
            descricao: 'O Tênis DC Shoes Classic é um ícone no mundo do skate, combinando tradição e inovação para oferecer conforto e durabilidade em todas as sessões.'
        },
        {
            image: './imagens/imagens-produtos-tenis/TENIS-VANS-OLD-SKOOL/tenis_vans_old_skool.png',
            imagem1: './imagens/imagens-produtos-tenis/TENIS-VANS-OLD-SKOOL/imagemDemostracao1.png',
            imagemDemostracao1:'./imagens/imagens-produtos-tenis/TENIS-VANS-OLD-SKOOL/imagemDemostracao1.png',
            imagemDemostracao2:'./imagens/imagens-produtos-tenis/TENIS-VANS-OLD-SKOOL/imagemDemostracao2.png',
            imagemDemostracao3:'./imagens/imagens-produtos-tenis/TENIS-VANS-OLD-SKOOL/tenis_vans_old_skool.png',
            textoAlternativo: 'Tênis Vans Old Skool',
            classificacao: 'lançamento',
            titulo: 'Tênis Vans Old Skool',
            preco: 'R$ 299,90',
            precoDesconto: 'R$ 269,90',
            parcelamento: 'ou 6x de R$44,98 sem juros',
            descricao: 'O Tênis Vans Old Skool mantém o clássico design da marca, com solado vulcanizado e material resistente, ideal para skatistas que buscam estilo e tradição.'
        },
        {
            image: './imagens/imagens-produtos-tenis/TENIS-ELEMENT-PRO/tenis_element_pro.png',
            imagem1: './imagens/imagens-produtos-tenis/TENIS-ELEMENT-PRO/imagemDemostracao1.png',
            imagemDemostracao1:'./imagens/imagens-produtos-tenis/TENIS-ELEMENT-PRO/imagemDemostracao1.png',
            imagemDemostracao2:'./imagens/imagens-produtos-tenis/TENIS-ELEMENT-PRO/imagemDemostracao2.png',
            imagemDemostracao3:'./imagens/imagens-produtos-tenis/TENIS-ELEMENT-PRO/tenis_element_pro.png',
            textoAlternativo: 'Tênis Element Pro',
            classificacao: 'destaque',
            titulo: 'Tênis Element Pro',
            preco: 'R$ 329,90',
            precoDesconto: 'R$ 299,90',
            parcelamento: 'ou 6x de R$49,98 sem juros',
            descricao: 'O Tênis Element Pro é feito para oferecer máximo desempenho, com design inovador e materiais que garantem conforto e durabilidade para as sessões mais intensas.'
        },
        {
            image: './imagens/imagens-produtos-tenis/TENIS-VANS-KNU-SKOOL/tenis_vans_knu_skool.png',
            imagem1: './imagens/imagens-produtos-tenis/TENIS-VANS-KNU-SKOOL/imagemDemostracao1.png',
            imagemDemostracao1:'./imagens/imagens-produtos-tenis/TENIS-VANS-KNU-SKOOL/imagemDemostracao1.png',
            imagemDemostracao2:'./imagens/imagens-produtos-tenis/TENIS-VANS-KNU-SKOOL/imagemDemostracao2.png',
            imagemDemostracao3:'./imagens/imagens-produtos-tenis/TENIS-VANS-KNU-SKOOL/tenis_vans_knu_skool.png',
            textoAlternativo: 'Tênis Vans Knu Skool',
            classificacao: 'lançamento',
            titulo: 'Tênis Vans Knu Skool',
            preco: 'R$ 349,90',
            precoDesconto: 'R$ 314,90',
            parcelamento: 'ou 6x de R$52,48 sem juros',
            descricao: 'O Tênis Vans Knu Skool, que se tornou um sucesso no TikTok, apresenta um design robusto e moderno, com o clássico padrão quadriculado da marca, proporcionando estilo e conforto para o dia a dia.'
        },
        {
            image: './imagens/imagens-produtos-tenis/TENIS-NIKE-SB-DUNK/tenis_nike_sb_dunk_low.png',
            imagem1: './imagens/imagens-produtos-tenis/TENIS-NIKE-SB-DUNK/imagemDemostracao1.png',
            imagemDemostracao1:'./imagens/imagens-produtos-tenis/TENIS-NIKE-SB-DUNK/imagemDemostracao1.png',
            imagemDemostracao2:'./imagens/imagens-produtos-tenis/TENIS-NIKE-SB-DUNK/imagemDemostracao2.png',
            imagemDemostracao3:'./imagens/imagens-produtos-tenis/TENIS-NIKE-SB-DUNK/tenis_nike_sb_dunk_low.png',
            textoAlternativo: 'Tênis Nike SB Dunk Low',
            classificacao: 'destaque',
            titulo: 'Tênis Nike SB Dunk Low',
            preco: 'R$ 499,90',
            precoDesconto: 'R$ 449,90',
            parcelamento: 'ou 6x de R$74,98 sem juros',
            descricao: 'O Tênis Nike SB Dunk Low é um dos modelos mais populares entre os skatistas, oferecendo excelente amortecimento, durabilidade e um design icônico que combina com diversas ocasiões.'
        },
        {
            image: './imagens/imagens-produtos-tenis/TENIS-DC-SHOES-KALIS/tenis_dc_shoes_kalis.png',
            imagem1: './imagens/imagens-produtos-tenis/TENIS-DC-SHOES-KALIS/imagemDemostracao1.png',
            imagemDemostracao1:'./imagens/imagens-produtos-tenis/TENIS-DC-SHOES-KALIS/imagemDemostracao1.png',
            imagemDemostracao2:'./imagens/imagens-produtos-tenis/TENIS-DC-SHOES-KALIS/imagemDemostracao2.png',
            imagemDemostracao3:'./imagens/imagens-produtos-tenis/TENIS-DC-SHOES-KALIS/tenis_dc_shoes_kalis.png',
            textoAlternativo: 'Tênis DC Shoes Kalis',
            classificacao: 'promoção',
            titulo: 'Tênis DC Shoes Kalis',
            preco: 'R$ 429,90',
            precoDesconto: 'R$ 389,90',
            parcelamento: 'ou 6x de R$64,98 sem juros',
            descricao: 'O Tênis DC Shoes Kalis é um clássico do skate, com design moderno e materiais de alta qualidade, proporcionando conforto e durabilidade para as sessões mais'
        },
        {
            image: './imagens/imagens-produtos-tenis/TENIS-NIKE-SB-BLAZER/tenis_nike_sb_blazer.png',
            imagem1: './imagens/imagens-produtos-tenis/TENIS-NIKE-SB-BLAZER/imagemDemostracao1.png',
            imagemDemostracao1:'./imagens/imagens-produtos-tenis/TENIS-NIKE-SB-BLAZER/imagemDemostracao1.png',
            imagemDemostracao2:'./imagens/imagens-produtos-tenis/TENIS-NIKE-SB-BLAZER/imagemDemostracao2.png',
            imagemDemostracao3:'./imagens/imagens-produtos-tenis/TENIS-NIKE-SB-BLAZER/tenis_nike_sb_blazer.png',
            textoAlternativo: 'Tênis Nike SB Blazer',
            classificacao: 'lançamento',
            titulo: 'Tênis Nike SB Blazer',
            preco: 'R$ 399,90',
            precoDesconto: 'R$ 359,90',
            parcelamento: 'ou 6x de R$59,98 sem juros',
            descricao: 'O Tênis Nike SB Blazer é um clássico reinventado, com design moderno e materiais de alta performance, proporcionando conforto e durabilidade para as sessões mais intensas.'
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
