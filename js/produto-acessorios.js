document.addEventListener('DOMContentLoaded', () => {
        const produtosLoja = [
            {
                image: './imagens/imagens-produtos-acessorios/SKATE-TOOL/skate_tool_pro.png',
                imagem1: './imagens/imagens-produtos-acessorios/SKATE-TOOL/imagemDemostracao1.png', 
                imagemDemostracao1: './imagens/imagens-produtos-acessorios/SKATE-TOOL/imagemDemostracao1.png',
                imagemDemostracao2:'./imagens/imagens-produtos-acessorios/SKATE-TOOL/imagemDemostracao2.png', 
                imagemDemostracao3:'./imagens/imagens-produtos-acessorios/SKATE-TOOL/skate_tool_pro.png',
                textoAlternativo: 'Skate Tool Pro Multiuso',
                classificacao: 'lançamento',
                titulo: 'Skate Tool Pro Multiuso',
                preco: 'R$ 89,90',
                precoDesconto: 'R$ 79,90',
                parcelamento: 'ou 3x de R$26,63 sem juros',
                descricao: 'A Skate Tool Pro Multiuso é indispensável para ajustes rápidos no seu skate, permitindo aperto de parafusos e ajustes nos trucks de forma prática e eficiente.',
            },
            {
                image: './imagens/imagens-produtos-acessorios/GRIP-TAPE-STICKIT/grip_tape_stickit.png',
                imagem1: './imagens/imagens-produtos-acessorios/GRIP-TAPE-STICKIT/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-acessorios/GRIP-TAPE-STICKIT/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-acessorios/GRIP-TAPE-STICKIT/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-acessorios/GRIP-TAPE-STICKIT/grip_tape_stickit.png',
                textoAlternativo: 'Grip Tape Stick It',
                classificacao: 'destaque',
                titulo: 'Grip Tape Stick It - Performance',
                preco: 'R$ 49,90',
                precoDesconto: 'R$ 44,90',
                parcelamento: 'ou 2x de R$22,45 sem juros',
                descricao: 'O Grip Tape Stick It proporciona aderência superior para o seu skate, garantindo maior controle e segurança durante as manobras.',
            },
            {
                image: './imagens/imagens-produtos-acessorios/SKATE-DECALS/skate_decals_pack.png',
                imagem1: './imagens/imagens-produtos-acessorios/SKATE-DECALS/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-acessorios/SKATE-DECALS/imagemDemostracao1.png',
                textoAlternativo: 'Skate Decals Pack',
                classificacao: 'promoção',
                titulo: 'Skate Decals Pack - 10 Adesivos',
                preco: 'R$ 29,90',
                precoDesconto: 'R$ 24,90',
                parcelamento: 'ou 2x de R$12,45 sem juros',
                descricao: 'O Skate Decals Pack inclui 10 adesivos exclusivos para personalizar seu skate e expressar sua identidade nas pistas.',
            },
            {
                image: './imagens/imagens-produtos-acessorios/CAP-RIDER/cap_rider.png',
                imagem1: './imagens/imagens-produtos-acessorios/CAP-RIDER/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-acessorios/CAP-RIDER/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-acessorios/CAP-RIDER/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-acessorios/CAP-RIDER/cap_rider.png',
                textoAlternativo: 'Boné Cap Rider',
                classificacao: 'lançamento',
                titulo: 'Boné Cap Rider - Unissex',
                preco: 'R$ 79,90',
                precoDesconto: 'R$ 69,90',
                parcelamento: 'ou 2x de R$34,95 sem juros',
                descricao: 'O Boné Cap Rider é perfeito para proteger do sol e complementar seu estilo urbano, com design moderno e ajuste confortável.',
            },
            {
                image: './imagens/imagens-produtos-acessorios/MOCHILA-SKATE/mochila_skate_pack_pro.png',
                imagem1: './imagens/imagens-produtos-acessorios/MOCHILA-SKATE/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-acessorios/MOCHILA-SKATE/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-acessorios/MOCHILA-SKATE/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-acessorios/MOCHILA-SKATE/mochila_skate_pack_pro.png',
                textoAlternativo: 'Mochila Skate Pack Pro',
                classificacao: 'destaque',
                titulo: 'Mochila Skate Pack Pro',
                preco: 'R$ 299,90',
                precoDesconto: 'R$ 269,90',
                parcelamento: 'ou 4x de R$67,48 sem juros',
                descricao: 'A Mochila Skate Pack Pro possui compartimentos ideais para transportar seu skate e acessórios, unindo funcionalidade e estilo para o dia a dia.'
            },
            {
                image: './imagens/imagens-produtos-acessorios/SKATE-SOCKS/skate_socks_pack.png',
                imagem1: './imagens/imagens-produtos-acessorios/SKATE-SOCKS/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-acessorios/SKATE-SOCKS/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-acessorios/SKATE-SOCKS/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-acessorios/SKATE-SOCKS/skate_socks_pack.png',
                textoAlternativo: 'Skate Socks Pack',
                classificacao: 'promoção',
                titulo: 'Skate Socks - Pacote com 3 pares',
                preco: 'R$ 59,90',
                precoDesconto: 'R$ 49,90',
                parcelamento: 'ou 2x de R$24,95 sem juros',
                descricao: 'Os Skate Socks oferecem conforto e absorção, essenciais para longas sessões no skate, com design exclusivo que mantém seus pés secos e protegidos.',
            },
            {
                image: './imagens/imagens-produtos-acessorios/SKATE-BEATS/skate_beats_wireless.png',
                imagem1: './imagens/imagens-produtos-acessorios/SKATE-BEATS/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-acessorios/SKATE-BEATS/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-acessorios/SKATE-BEATS/imagemDemostracao2.png',
                imagemDemostracao3:'./imagens/imagens-produtos-acessorios/SKATE-BEATS/skate_beats_wireless.png', 
                textoAlternativo: 'Fones de ouvido Skate Beats Wireless',
                classificacao: 'lançamento',
                titulo: 'Skate Beats Wireless',
                preco: 'R$ 299,90',
                precoDesconto: 'R$ 279,90',
                parcelamento: 'ou 3x de R$93,30 sem juros',
                descricao: 'Os fones de ouvido Skate Beats Wireless combinam qualidade de som e design robusto, ideais para ouvir sua playlist enquanto anda de skate.',
                link: 'https://exemplo.com/skate-beats-wireless'
            },
            {
                image: './imagens/imagens-produtos-acessorios/BONE-SKATE/bone_skate_cap_urban.png',
                imagem1: './imagens/imagens-produtos-acessorios/BONE-SKATE/imagemDemostracao1.png',
                imagemDemostracao1: './imagens/imagens-produtos-acessorios/BONE-SKATE/imagemDemostracao1.png',
                imagemDemostracao2: './imagens/imagens-produtos-acessorios/BONE-SKATE/imagemDemostracao2.png',
                imagemDemostracao3: './imagens/imagens-produtos-acessorios/BONE-SKATE/bone_skate_cap_urban.png',
                textoAlternativo: 'Boné Skate Cap Urban',
                classificacao: 'destaque',
                titulo: 'Boné Skate Cap Urban',
                preco: 'R$ 89,90',
                precoDesconto: 'R$ 79,90',
                parcelamento: 'ou 2x de R$39,95 sem juros',
                descricao: 'O Boné Skate Cap Urban é uma peça essencial para o visual skatista, oferecendo um ajuste confortável e um design moderno para completar seu look.',
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
