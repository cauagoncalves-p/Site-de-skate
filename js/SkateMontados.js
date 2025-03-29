document.addEventListener('DOMContentLoaded', () => {
  const produtosLoja = [
    {
      image: './imagens/imagens-produtos-skates/SKATE-MONTADO-HSC/skate1.png',
      imagem1:'./imagens/imagens-produtos-skates/SKATE-MONTADO-HSC/imagemDemostracao1.png',
      imagemDemostracao1: './imagens/imagens-produtos-skates/SKATE-MONTADO-HSC/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-produtos-skates/SKATE-MONTADO-HSC/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-produtos-skates/SKATE-MONTADO-HSC/imagemDemostracao3.png',
      textoAlternativo: 'Skate Montado HSC First Love Azul',
      classificacao: 'lançamento',
      titulo: 'Skate Montado HSC First Love',
      descricao: 'Skate completo ideal para iniciantes e intermediários. Possui shape de marfim, trucks de alumínio reforçado e rodas 52mm 99A.',
      preco: 'R$ 379,90',
      precoDesconto: 'R$ 329,99',
      parcelamento: '12x de R$ 27,99 sem juros'
  },
  {
      image: './imagens/imagens-produtos-skates/SKATE-MATILHA/skate3.png',
      imagem1: './imagens/imagens-produtos-skates/SKATE-MATILHA/imagemDemostracao1.png',
      imagemDemostracao1: './imagens/imagens-produtos-skates/SKATE-MATILHA/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-produtos-skates/SKATE-MATILHA/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-produtos-skates/SKATE-MATILHA/imagemDemostracao3.png',
      textoAlternativo: 'Skate Montado Semi Profissional Shape Matilha 8.0 Retro Car',
      classificacao: 'lançamento',
      titulo: 'Skate Montado Semi Profissional Shape Matilha 8.0 Retro Car',
      descricao: 'Shape 8.0" de marfim de alta qualidade, trucks reforçados e rodas 54mm, ideal para parques e ruas.',
      preco: 'R$ 255,00',
      precoDesconto: 'R$ 187,40',
      parcelamento: '12x de R$ 18,26'
  },
  {
      image: './imagens/imagens-produtos-skates/SKATE-MONTADO-SEMI-PROFISSIONAL/skate4.png',
      imagem1: './imagens/imagens-produtos-skates/SKATE-MONTADO-SEMI-PROFISSIONAL/imagemDemostracao1.png',
      imagemDemostracao1: './imagens/imagens-produtos-skates/SKATE-MONTADO-SEMI-PROFISSIONAL/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-produtos-skates/SKATE-MONTADO-SEMI-PROFISSIONAL/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-produtos-skates/SKATE-MONTADO-SEMI-PROFISSIONAL/imagemDemostracao3.png',
      textoAlternativo: 'Skate Montado Semi Profissional Santa Cruz 8.0" Original',
      classificacao: 'lançamento',
      titulo: 'Skate Montado Semi Profissional Santa Cruz 8.0" Original',
      descricao: 'Modelo clássico da Santa Cruz, com shape de 7 camadas de maple, trucks de alumínio e rodas 99A de alta performance.',
      preco: 'R$ 680,00',
      precoDesconto: 'R$ 578,00',
      parcelamento: '12x de R$ 56,67 sem juros'
  },
  {
      image: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-MAPLE/skate5.png',
      imagem1: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-MAPLE/imagemDemostracao1.png',
      imagemDemostracao1: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-MAPLE/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-MAPLE/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-MAPLE/imagemDemostracao3.png',
      textoAlternativo: 'Skate Montado Profissional Maple Ever Skateboarding Genuine Symbol Black 8.0"',
      classificacao: 'lançamento',
      titulo: 'Skate Montado Profissional Maple Ever Skateboarding Genuine Symbol Black 8.0"',
      descricao: 'Skate profissional com shape de maple canadense, trucks de titânio e rodas 101A, ideal para alto desempenho.',
      preco: 'R$ 1.150,00',
      precoDesconto: 'R$ 977,50',
      parcelamento: '12x de R$ 95,83 sem juros'
  },
  {
      image: './imagens/imagens-produtos-skates/sKATE-MONTADO-MARFIM-EVER/skate6.png',
      imagem1: './imagens/imagens-produtos-skates/sKATE-MONTADO-MARFIM-EVER/imagemDemostracao1.png',
      imagemDemostracao1: './imagens/imagens-produtos-skates/sKATE-MONTADO-MARFIM-EVER/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-produtos-skates/sKATE-MONTADO-MARFIM-EVER/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-produtos-skates/sKATE-MONTADO-MARFIM-EVER/imagemDemostracao3.png',
      textoAlternativo: 'Skate Montado Semi Profissional Marfim Ever Skateboarding Tradicional Logo Horizontal White 8.0',
      classificacao: 'lançamento',
      titulo: 'Skate Montado Semi Profissional Marfim Ever Skateboarding Tradicional Logo Horizontal White 8.0"',
      descricao: 'Modelo para quem busca evolução no skate. Shape de marfim, rodas 54mm e trucks reforçados.',
      preco: 'R$ 600,00',
      precoDesconto: 'R$ 510,00',
      parcelamento: '12x de R$ 50,00 sem juros'
  },
  {
      image: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-SKATEBOARDING/skate7.png',
      imagem1: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-SKATEBOARDING/imagemDemostracao1.png',
      imagemDemostracao1: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-SKATEBOARDING/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-SKATEBOARDING/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-SKATEBOARDING/imagemDemostracao3.png',
      textoAlternativo: 'Skate Montado Profissional Maple Ever Skateboarding Name Red 8.0',
      classificacao: 'lançamento',
      titulo: 'Skate Montado Profissional Maple Ever Skateboarding Name Red 8.0"',
      descricao: 'Shape de maple de alta qualidade, trucks ultra leves e rodas 53mm para maior controle e velocidade.',
      preco: 'R$ 995,00',
      precoDesconto: 'R$ 845,75',
      parcelamento: '12x de R$ 82,92 sem juros'
  },
  {
      image: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-EVER-SKATEBOARDING/skate8.png',
      imagem1: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-EVER-SKATEBOARDING/imagemDemostracao2.png',
      imagemDemostracao1: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-EVER-SKATEBOARDING/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-EVER-SKATEBOARDING/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-produtos-skates/SKATE-PROFISSIONAL-EVER-SKATEBOARDING/imagemDemostracao3.png',
      textoAlternativo: 'Skate Montado Semi Profissional Marfim Ever Skateboarding Tradicional Logo Horizontal Black',
      classificacao: 'lançamento',
      titulo: 'Skate Montado Semi Profissional Marfim Ever Skateboarding Tradicional Logo Horizontal Black',
      descricao: 'Skate semi profissional com shape de marfim, trucks de alumínio e rodas 55mm para maior estabilidade.',
      preco: 'R$ 675,00',
      precoDesconto: 'R$ 573,75',
      parcelamento: '12x de R$ 56,25 sem juros'
  },
  {
      image: './imagens/imagens-produtos-skates/SKATE-MONTADO-INFANTIL/skate9.png',
      imagem1: './imagens/imagens-produtos-skates/SKATE-MONTADO-INFANTIL/skate9.png',
      imagemDemostracao1: './imagens/imagens-produtos-skates/SKATE-MONTADO-INFANTIL/skate9.png',
      textoAlternativo: 'Skate Montado Infantil Marfim Ever Skateboarding Tradicional Logo Horizontal Black 7.5"',
      classificacao: 'lançamento',
      titulo: 'Skate Montado Infantil Marfim Ever Skateboarding Tradicional Logo Horizontal Black 7.5"',
      descricao: 'Ideal para crianças e iniciantes. Shape 7.5", rodas macias de 52mm e trucks leves para maior segurança.',
      preco: 'R$ 395,00',
      precoDesconto: 'R$ 335,75',
      parcelamento: '12x de R$ 32,92 sem juros'
  },
  {
      image: './imagens/imagens-produtos-skates/SKATE-INICIANTES/skate10.png',
      imagem1: './imagens/imagens-produtos-skates/SKATE-INICIANTES/imagemDemostracao1.png',
      imagemDemostracao1: './imagens/imagens-produtos-skates/SKATE-INICIANTES/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-produtos-skates/SKATE-INICIANTES/imagemDemostracao2.png',
      textoAlternativo: 'Skate Montado Iniciante Fiberglass Liso Alta Resistência',
      classificacao: 'lançamento',
      titulo: 'Skate Montado Iniciante Fiberglass Liso Alta Resistência',
      descricao: 'Skate para iniciantes, com shape de fibra de vidro, rodas de 54mm macias e trucks reforçados.',
      preco: 'R$ 435,00',
      precoDesconto: 'R$ 369,75',
      parcelamento: '12x de R$ 36,25 sem juros'
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
            <img src= ${prod.imagem1} alt="${prod.textoAlternativo}">
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

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todas as setas
    const setas = document.querySelectorAll('.toggle-arrow');

    setas.forEach(seta => {
        seta.addEventListener('click', function () {
            // Pegamos o elemento pai (.text-seta) e depois o próximo irmão, que é a div .checkbox
            const checkboxDiv = this.parentElement.nextElementSibling;

            if (checkboxDiv) {
                // Alternamos entre mostrar e ocultar os checkboxes
                checkboxDiv.style.display = (checkboxDiv.style.display === "none" || checkboxDiv.style.display === "") ? "block" : "none";
                this.classList.toggle('active'); 
            }
        });
    });
});

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
