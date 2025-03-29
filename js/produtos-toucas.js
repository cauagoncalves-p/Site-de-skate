document.addEventListener('DOMContentLoaded', () => {
    const produtosLoja = [
        {
            image: './imagens/imagens-produtos-toucas/TOUCA-ROYAL-SCRIPT/touca_royal_script.png',
            imagem1: './imagens/imagens-produtos-toucas/TOUCA-ROYAL-SCRIPT/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-toucas/TOUCA-ROYAL-SCRIPT/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-toucas/TOUCA-ROYAL-SCRIPT/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-toucas/TOUCA-ROYAL-SCRIPT/touca_royal_script.png',
            textoAlternativo: 'Touca Royal Script',
            classificacao: 'lançamento',
            titulo: 'Touca Royal Script',
            preco: 'R$ 216,90',
            precoDesconto: 'R$ 194,90',
            parcelamento: 'ou 4x de R$48,73 sem juros',
            descricao: 'A Touca Royal Script oferece estilo clássico com o logo da Royal bordado, perfeita para manter-se aquecido enquanto anda de skate.',
            link: 'https://primorskateshop.com.br/acessorios/touca/touca-royal-script'
        },
        {
            image: './imagens/imagens-produtos-toucas/TOUCA-ANTIHERO/touca_antihero_stock_eagle.png',
            imagem1: './imagens/imagens-produtos-toucas/TOUCA-ANTIHERO/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-toucas/TOUCA-ANTIHERO/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-toucas/TOUCA-ANTIHERO/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-toucas/TOUCA-ANTIHERO/touca_antihero_stock_eagle.png',
            textoAlternativo: 'Touca Anti Hero Stock Eagle Label',
            classificacao: 'destaque',
            titulo: 'Touca Anti Hero Stock Eagle Label',
            preco: 'R$ 199,90',
            precoDesconto: 'R$ 179,90',
            parcelamento: 'ou 4x de R$44,98 sem juros',
            descricao: 'A Touca Anti Hero Stock Eagle Label apresenta o icônico logo da marca, confeccionada em material de alta qualidade para durabilidade e conforto.',
            link: 'https://primorskateshop.com.br/acessorios/touca/touca-anti-hero-stock-eagle-label'
        },
        {
            image: './imagens/imagens-produtos-toucas/TOUCA-BONES-IRON/touca_bones_iron_sun.png',
            imagem1: './imagens/imagens-produtos-toucas/TOUCA-BONES-IRON/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-toucas/TOUCA-BONES-IRON/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-toucas/TOUCA-BONES-IRON/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-toucas/TOUCA-BONES-IRON/touca_bones_iron_sun.png',
            textoAlternativo: 'Touca Bones Iron Sun',
            classificacao: 'promoção',
            titulo: 'Touca Bones Iron Sun',
            preco: 'R$ 199,90',
            precoDesconto: 'R$ 169,90',
            parcelamento: 'ou 4x de R$42,48 sem juros',
            descricao: 'A Touca Bones Iron Sun combina estilo e funcionalidade, mantendo você aquecido nos dias frios enquanto pratica suas manobras.',
            link: 'https://primorskateshop.com.br/acessorios/touca/touca-bones-iron-sun'
        },
        {
            image: './imagens/imagens-produtos-toucas/TOUCA-GIRL-ARCH/touca_girl_arch_beanie.png',
            imagem1: './imagens/imagens-produtos-toucas/TOUCA-GIRL-ARCH/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-toucas/TOUCA-GIRL-ARCH/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-toucas/TOUCA-GIRL-ARCH/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-toucas/TOUCA-GIRL-ARCH/touca_girl_arch_beanie.png',
            textoAlternativo: 'Touca Girl Arch Beanie',
            classificacao: 'lançamento',
            titulo: 'Touca Girl Arch Beanie',
            preco: 'R$ 187,90',
            precoDesconto: 'R$ 168,90',
            parcelamento: 'ou 4x de R$42,23 sem juros',
            descricao: 'A Touca Girl Arch Beanie é perfeita para os fãs da marca, oferecendo conforto e estilo com o logo discreto da Girl Skateboards.',
            link: 'https://primorskateshop.com.br/acessorios/touca/touca-girl-arch-beanie'
        },
        {
            image: './imagens/imagens-produtos-toucas/TOUCA-CHOCOLATE/touca_chocolate_eightballer.png',
            imagem1: './imagens/imagens-produtos-toucas/TOUCA-CHOCOLATE/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-toucas/TOUCA-CHOCOLATE/imagemDemostracao1.png',
            imagemDemostracao3: './imagens/imagens-produtos-toucas/TOUCA-CHOCOLATE/touca_chocolate_eightballer.png',
            textoAlternativo: 'Touca Chocolate Eightballer',
            classificacao: 'destaque',
            titulo: 'Touca Chocolate Eightballer',
            preco: 'R$ 216,90',
            precoDesconto: 'R$ 194,90',
            parcelamento: 'ou 4x de R$48,73 sem juros',
            descricao: 'A Touca Chocolate Eightballer apresenta um design moderno com o logo da Chocolate Skateboards, ideal para complementar seu visual skatista.',
            link: 'https://primorskateshop.com.br/acessorios/touca/touca-chocolate-eightballer'
        },
        {
            image: './imagens/imagens-produtos-toucas/TOUCA-SPITFIRE/touca_spitfire_old_e_skully.png',
            imagem1: './imagens/imagens-produtos-toucas/TOUCA-SPITFIRE/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-toucas/TOUCA-SPITFIRE/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-toucas/TOUCA-SPITFIRE/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-toucas/TOUCA-SPITFIRE/touca_spitfire_old_e_skully.png',
            textoAlternativo: 'Touca Spitfire Old e Skully',
            classificacao: 'promoção',
            titulo: 'Touca Spitfire Old e Skully',
            preco: 'R$ 199,90',
            precoDesconto: 'R$ 179,90',
            parcelamento: 'ou 4x de R$44,98 sem juros',
            descricao: 'A Touca Spitfire Old e Skully é ideal para os dias frios, mantendo sua cabeça aquecida enquanto você anda de skate com estilo.',
            link: 'https://primorskateshop.com.br/acessorios/touca/touca-spitfire-old-e-skully'
        },
        {
            image: './imagens/imagens-produtos-toucas/TOUCA-THUNDER/touca_thunder_script_patch.png',
            imagem1: './imagens/imagens-produtos-toucas/TOUCA-THUNDER/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-toucas/TOUCA-THUNDER/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-toucas/TOUCA-THUNDER/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-toucas/TOUCA-THUNDER/touca_thunder_script_patch.png',
            textoAlternativo: 'Touca Thunder Script Patch Cuff',
            classificacao: 'lançamento',
            titulo: 'Touca Thunder Script Patch Cuff',
            preco: 'R$ 199,90',
            precoDesconto: 'R$ 179,90',
            parcelamento: 'ou 4x de R$44,98 sem juros',
            descricao: 'A Touca Thunder Script Patch Cuff oferece um ajuste confortável e o logo da Thunder Trucks, perfeita para completar seu look.',
            link: 'https://primorskateshop.com.br/acessorios/touca/touca-thunder-script-patch-cuff'
        },
        {
            image: './imagens/imagens-produtos-toucas/TOUCA-CHOCOLATE-WORK/touca_chocolate_work_beanie.png',
            imagem1: './imagens/imagens-produtos-toucas/TOUCA-CHOCOLATE-WORK/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-toucas/TOUCA-CHOCOLATE-WORK/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-toucas/TOUCA-CHOCOLATE-WORK/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-toucas/TOUCA-CHOCOLATE-WORK/touca_chocolate_work_beanie.png',
            textoAlternativo: 'Touca Chocolate Work Beanie',
            classificacao: 'lançamento',
            titulo: 'Touca Chocolate Work Beanie',
            preco: 'R$ 169,90',
            precoDesconto: 'R$ 152,90',
            parcelamento: 'ou 4x de R$38,23 sem juros',
            descricao: 'A Touca Chocolate Work Beanie é confeccionada em material de alta qualidade, garantindo durabilidade e estilo para o dia a dia.',
            link: 'https://primorskateshop.com.br/acessorios/touca/touca-chocolate-work-beanie'
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
