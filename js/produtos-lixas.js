document.addEventListener('DOMContentLoaded', () => {
    const produtosLoja = [
        {
            image: './imagens/imagens-produtos-lixas/LIXA-MOB-GRIP-PRETA/lixa_mob_grip_preta.png',
            imagem1: './imagens/imagens-produtos-lixas/LIXA-MOB-GRIP-PRETA/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-lixas/LIXA-MOB-GRIP-PRETA/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-lixas/LIXA-MOB-GRIP-PRETA/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-lixas/LIXA-MOB-GRIP-PRETA/lixa_mob_grip_preta.png',
            textoAlternativo: 'Lixa Mob Grip Preta',
            classificacao: 'lançamento',
            titulo: 'Lixa Mob Grip Preta',
            preco: 'R$ 89,90',
            precoDesconto: 'R$ 80,91',
            parcelamento: 'ou 3x de R$26,97 sem juros',
            descricao: 'A lixa Mob Grip é reconhecida por sua alta durabilidade e excelente aderência, proporcionando maior controle durante as manobras.'
        },
        {
            image: './imagens/imagens-produtos-lixas/LIXA-GRIZZLY/lixa_grizzly_logo_green.png',
            imagem1: './imagens/imagens-produtos-lixas/LIXA-GRIZZLY/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-lixas/LIXA-GRIZZLY/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-lixas/LIXA-GRIZZLY/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-lixas/LIXA-GRIZZLY/lixa_grizzly_logo_green.png',
            textoAlternativo: 'Lixa Grizzly Logo Green',
            classificacao: 'destaque',
            titulo: 'Lixa Grizzly Logo Green',
            preco: 'R$ 99,90',
            precoDesconto: 'R$ 89,91',
            parcelamento: 'ou 3x de R$29,97 sem juros',
            descricao: 'A lixa Grizzly apresenta design diferenciado com o icônico logo do urso, além de microfuros que evitam bolhas na aplicação.'
        },
        {
            image: './imagens/imagens-produtos-lixas/LIXA-EMBORRACHADA/lixa_emborrachada_folha.png',
            imagem1: './imagens/imagens-produtos-lixas/LIXA-EMBORRACHADA/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-lixas/LIXA-EMBORRACHADA/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-lixas/LIXA-EMBORRACHADA/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-lixas/LIXA-EMBORRACHADA/lixa_emborrachada_folha.png',
            textoAlternativo: 'Lixa Jessup Emborrachada Rosa',
            classificacao: 'promoção',
            titulo: 'Lixa Jessup Emborrachada Rosa',
            preco: 'R$ 67,90',
            precoDesconto: 'R$ 54,90',
            parcelamento: 'ou 3x de R$18,30 sem juros',
            descricao: 'A lixa Jessup emborrachada oferece uma superfície suave e aderente, disponível em diversas cores vibrantes.'
        },
        {
            image: './imagens/imagens-produtos-lixas/LIXA-CBGANG/lixa_cbgang_double_grip_og_script.png',
            imagem1: './imagens/imagens-produtos-lixas/LIXA-CBGANG/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-lixas/LIXA-CBGANG/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-lixas/LIXA-CBGANG/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-lixas/LIXA-CBGANG/lixa_cbgang_double_grip_og_script.png',
            textoAlternativo: 'Lixa CBGANG Double Grip OG Script',
            classificacao: 'lançamento',
            titulo: 'Lixa CBGANG Double Grip OG Script',
            preco: 'R$ 43,90',
            precoDesconto: 'R$ 39,51',
            parcelamento: 'ou 3x de R$13,17 sem juros',
            descricao: 'A lixa CBGANG Double Grip proporciona excelente aderência e durabilidade, com design exclusivo OG Script.'
        },
        {
            image: './imagens/imagens-produtos-lixas/LIXA-JESSUP/lixa_jessup_emborrachada_rosa.png',
            imagem1: './imagens/imagens-produtos-lixas/LIXA-JESSUP/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-lixas/LIXA-JESSUP/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-lixas/LIXA-JESSUP/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-lixas/LIXA-JESSUP/lixa_jessup_emborrachada_rosa.png',
            textoAlternativo: 'Lixa Emborrachada Folha',
            classificacao: 'destaque',
            titulo: 'Lixa Emborrachada Folha',
            preco: 'R$ 59,90',
            precoDesconto: 'R$ 56,91',
            parcelamento: 'ou 3x de R$18,97 sem juros',
            descricao: 'Com estampa de folha, esta lixa emborrachada oferece estilo único e excelente performance para skatistas.'
        },
        {
            image: './imagens/imagens-produtos-lixas/LIXA-VIBE-GRIP/lixa_vibe_grip_og_logo.png',
            imagem1: './imagens/imagens-produtos-lixas/LIXA-VIBE-GRIP/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-lixas/LIXA-VIBE-GRIP/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-lixas/LIXA-VIBE-GRIP/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-lixas/LIXA-VIBE-GRIP/lixa_vibe_grip_og_logo.png',
            textoAlternativo: 'Lixa Vibe Grip OG Logo',
            classificacao: 'promoção',
            titulo: 'Lixa Vibe Grip OG Logo',
            preco: 'R$ 49,90',
            precoDesconto: 'R$ 44,91',
            parcelamento: 'ou 3x de R$14,97 sem juros',
            descricao: 'A lixa Vibe Grip OG Logo é confeccionada em material resistente e aderente, ideal para manobras de skate.'
        },
        {
            image: './imagens/imagens-produtos-lixas/LIXA-MOB-GRIP-ROSA/lixa_mob_grip_rosa.png',
            imagem1: './imagens/imagens-produtos-lixas/LIXA-MOB-GRIP-ROSA/imagemDemostracao1.png',
            imagemDemostracao1: './imagens/imagens-produtos-lixas/LIXA-MOB-GRIP-ROSA/imagemDemostracao1.png',
            imagemDemostracao2: './imagens/imagens-produtos-lixas/LIXA-MOB-GRIP-ROSA/imagemDemostracao2.png',
            imagemDemostracao3: './imagens/imagens-produtos-lixas/LIXA-MOB-GRIP-ROSA/lixa_mob_grip_rosa.png',
            textoAlternativo: 'Lixa Mob Grip Rosa',
            classificacao: 'lançamento',
            titulo: 'Lixa Mob Grip Rosa',
            preco: 'R$ 89,90',
            precoDesconto: 'R$ 80,91',
            parcelamento: 'ou 3x de R$26,97 sem juros',
            descricao: 'A lixa Mob Grip é reconhecida por sua alta durabilidade e excelente aderência, proporcionando maior controle durante as manobras.'
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
