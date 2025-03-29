document.addEventListener('DOMContentLoaded', () => {
  const produtosLoja = [
    { image: './imagens/imagens-home/skate/skate.png', 
      imagem1: './imagens/imagens-home/skate/imagemDemostracao1.png', 
      imagemDemostracao1: './imagens/imagens-home/skate/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-home/skate/imagemDemostracao2.png',
      textoAlternativo: 'shape skate', 
      classificacao: 'lançamento', 
      titulo: 'Shape DarkStar Whip Red', 
      preco: 'R$369,99', 
      precoDesconto: 'R$297,99', 
      parcelamento: 'ou 6x de R$49,67 sem juros', 
      descricao: 'O Shape DarkStar Whip Red é a escolha perfeita para skatistas que buscam qualidade, resistência e estilo. Fabricado em 100% maple canadense, esse shape oferece durabilidade excepcional e um ótimo pop, garantindo mais controle e precisão nas manobras. Com um design vibrante em vermelho, o modelo Whip Red combina estética e desempenho, sendo ideal tanto para skatistas iniciantes quanto para os mais experientes. Sua construção reforçada proporciona maior estabilidade e resistência contra impactos, tornando-o uma excelente opção para quem curte street ou park.' 
    },

    { image: './imagens/imagens-home/tenisFreeday/tenis1.png', 
      imagem1: './imagens/imagens-home/tenisFreeday/imagemDemostracao1.png', 
      imagemDemostracao1: './imagens/imagens-home/tenisFreeday/imagemDemostracao1.png', 
      imagemDemostracao2: './imagens/imagens-home/tenisFreeday/imagemDemostracao2.png', 
      imagemDemostracao3: './imagens/imagens-home/tenisFreeday/imagemDemostracao3.png', 
      textoAlternativo: 'tenis de skate', 
      classificacao: 'lançamento', 
      titulo: 'Tênis Freeday Hero Preto Azul', 
      preco: 'R$399,99', 
      precoDesconto: 'R$347,99', 
      parcelamento: 'ou 10x de R$34,70 sem juros', 
      descricao: 'O Tênis Freeday Hero Preto Azul oferece conforto superior e performance excepcional. Com design moderno e cores impactantes, ele é perfeito para manobras radicais e uso diário, proporcionando aderência e estabilidade em cada movimento, ideal para skatistas que buscam estilo aliado à funcionalidade.' 
    },

    { image: './imagens/imagens-home/mochila/mochila1.png', 
      imagem1: './imagens/imagens-home/mochila/imagemDemostracao1.png',
      imagemDemostracao1: './imagens/imagens-home/mochila/imagemDemostracao1.png', 
      imagemDemostracao2: './imagens/imagens-home/mochila/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-home/mochila/imagemDemostracao3.png',
      textoAlternativo: 'Mochila Preta', 
      classificacao: 'lançamento', 
      titulo: 'Mochila Element Beyond Preta', 
      preco: 'R$ 279,99', 
      precoDesconto: 'R$254,90', 
      parcelamento: 'ou 6 x de R$42,48 sem juros', 
      descricao: 'A Mochila Element Beyond Preta alia design moderno e funcionalidade com compartimentos espaçosos, ideal para transportar equipamentos e acessórios. Sua construção robusta garante praticidade e estilo, atendendo às necessidades dos skatistas urbanos.'
     },

    { image: './imagens/imagens-home/tenisHocks/tenis-hocks.png', 
      imagem1: './imagens/imagens-home/tenisHocks/imagemDemostracao-hover1.png', 
      imagemDemostracao1: './imagens/imagens-home/tenisHocks/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-home/tenisHocks/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-home/tenisHocks/imagemDemostracao3.png',
      textoAlternativo: 'tenis de skate', 
      classificacao: 'lançamento', 
      titulo: 'Tênis Hocks Puff Psylocke', 
      preco: 'R$323,91', 
      precoDesconto: 'R$302,85', 
      parcelamento: 'ou 6 x de R$50,48 sem juros', 
      descricao: 'O Tênis Hocks Puff Psylocke une conforto e performance com design inovador. Confeccionado com materiais de alta qualidade, ele proporciona aderência excepcional e estabilidade, sendo ideal para skatistas que exigem segurança e estilo durante manobras radicais.' 
    },

    { image: './imagens/imagens-home/truck/truck-venture.png', 
      imagem1: './imagens/imagens-home/truck/imagemDemostracao1.png',
      imagemDemostracao1:  './imagens/imagens-home/truck/imagemDemostracao1.png',
      imagemDemostracao2:  './imagens/imagens-home/truck/imagemDemostracao2.png',
      imagemDemostracao3:  './imagens/imagens-home/truck/imagemDemostracao3.png',
      textoAlternativo: 'truck venture', 
      classificacao: 'lançamento', 
      titulo: 'Truck Venture Gilbert Crockett Pro Editions H Preto - Preto', 
      preco: 'R$599,90', 
      precoDesconto: 'R$539,90', 
      parcelamento: ' ou 6 x de R$89,98 sem juros', 
      descricao: 'O Truck Venture Gilbert Crockett Pro Editions H Preto - Preto oferece alta performance com construção robusta e design sofisticado. Ideal para skatistas que buscam precisão e estabilidade, ele garante um desempenho superior nas manobras mais exigentes.' 
    },

    { image: './imagens/imagens-home/roda/roda-skate.png', 
      imagem1: './imagens/imagens-home/roda/imagemDemostracao1.png',
      imagemDemostracao1: './imagens/imagens-home/roda/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-home/roda/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-home/roda/imagemDemostracao3.png',
      textoAlternativo: 'Roda de skate', 
      classificacao: 'lançamento', 
      titulo: 'Roda Ricta Speedrings Wide 54mm', 
      preco: 'R$449,90', 
      precoDesconto: 'R$409,90', 
      parcelamento: '6 x de R$68,32 sem juros', 
      descricao: 'A Roda Ricta Speedrings Wide 54mm proporciona excelente tração e durabilidade. Com design inovador e materiais premium, ela garante estabilidade e desempenho superior, sendo ideal para manobras radicais e uso em diferentes superfícies.' 
    },

    { image: './imagens/imagens-home/calcajeans/calcajeans.png', 
      imagem1: './imagens/imagens-home/calcajeans/imagemDemostracao1.png',
      imagemDemostracao1: './imagens/imagens-home/calcajeans/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-home/calcajeans/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-home/calcajeans/imagemDemostracao3.png', 
      textoAlternativo: 'calça jeans', 
      classificacao: 'lançamento', 
      titulo: 'Calça Jeans CBGANG Carpinteiro', 
      preco: 'R$280,00', 
      precoDesconto: 'R$249,90', 
      parcelamento: '6 x de R$41,65 sem juros', 
      descricao: 'A Calça Jeans CBGANG Carpinteiro alia estilo urbano com resistência e conforto. Confeccionada em tecido de alta qualidade, é perfeita para skatistas que buscam versatilidade e durabilidade, seja para sessões de skate ou para o uso diário.' 
    },

    { image: './imagens/imagens-home/blusadefrio/blusadefrio.png',
      imagem1: './imagens/imagens-home/blusadefrio/imagemDemostracao2.png',
      imagemDemostracao1: './imagens/imagens-home/blusadefrio/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-home/blusadefrio/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-home/blusadefrio/imagemDemostracao3.png',
      textoAlternativo: 'Blusa de frio',
      classificacao: 'lançamento',
      titulo: 'Camiseta Huf Cereal Killer Manga Longa', 
      preco: 'R$129,99',
      precoDesconto: 'R$109,99',
      parcelamento: '6 x de R$18,33 sem juros',
      descricao: 'A Camiseta Huf Cereal Killer Manga Longa oferece um design único e moderno aliado a um tecido confortável e resistente. Ideal para os apaixonados pelo skate, ela garante estilo e performance em qualquer ocasião, seja na pista ou no dia a dia.'
    },

    { image: './imagens/imagens-home/tenisDC/tenis_dc_shoes_unissex_camurca.png', 
      imagem1: './imagens/imagens-home/tenisDC/imagemDemostracao1.png', 
      imagemDemostracao1: './imagens/imagens-home/tenisDC/imagemDemostracao1.png', 
      imagemDemostracao2: './imagens/imagens-home/tenisDC/imagemDemostracao2.png', 
      imagemDemostracao3: './imagens/imagens-home/tenisDC/imagemDemostracao3.png', 
      textoAlternativo: 'Tenis de shoes', 
      classificacao: 'lançamento', 
      titulo: 'Tênis DC Shoes Unissex Camurça Ascend IMP | Off White', 
      preco: 'R$987,90', 
      precoDesconto: 'R$657,98', 
      parcelamento: '6 x de R$109,63 sem juros', 
      descricao: 'O Tênis DC Shoes Unissex Camurça Ascend IMP | Off White combina sofisticação e desempenho. Fabricado em camurça premium, ele oferece conforto excepcional e aderência, sendo a escolha perfeita para skatistas que buscam estilo sem abrir mão da performance.' 
    },

    { 
      image: './imagens/imagens-home/SkateMontado/skate1.png', 
      imagem1: './imagens/imagens-home/SkateMontado/imagemDemostracao3.png',
      imagemDemostracao1: './imagens/imagens-home/SkateMontado/imagemDemostracao1.png',
      imagemDemostracao2: './imagens/imagens-home/SkateMontado/imagemDemostracao2.png',
      imagemDemostracao3: './imagens/imagens-home/SkateMontado/imagemDemostracao3.png',
      textoAlternativo: 'skate shape', 
      classificacao: 'lançamento', 
      titulo: 'Skate Montado CBGANG Mais Pilaco', 
      preco: 'R$279,99', 
      precoDesconto: 'R$129,99', 
      parcelamento: '6 x de R$21,59 sem juros', descricao: 'O Skate Montado CBGANG Mais Pilaco é completo e pronto para rodar. Com shape resistente, trucks de alta performance e rodas de qualidade, ele proporciona estabilidade e controle, sendo ideal tanto para iniciantes quanto para skatistas experientes.' 
    }
  ];

  const produtosGrid = document.querySelector('.aba-produtos');

  produtosLoja.forEach(prod => {
    const produtosCard = document.createElement('div');
    produtosCard.classList.add('card-produtos');


    produtosCard.innerHTML =
      `<div class="card-imagem">
            <img src= ${prod.image} alt="${prod.textoAlternativo}">
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
       <button class="botao-cardProdutos" onclick="verProduto('${prod.titulo}', '${prod.preco}', '${prod.precoDesconto}', '${prod.image}', '${prod.parcelamento}', '${prod.descricao}', '${prod.textoAlternativo}', '${prod.imagemDemostracao1}', '${prod.imagemDemostracao2}', '${prod.imagemDemostracao3}')">Ver Produto</button>`;

    produtosGrid.appendChild(produtosCard);
  });
});

function verProduto(nome, preco, precoDesconto, imagem, parcelamento, descricao, textoAlternativo, imagemDemostracao1, imagemDemostracao2, imagemDemostracao3) {
  const url = `verProduto.html?nome=${encodeURIComponent(nome)}&preco=${encodeURIComponent(preco)}&precoDesconto=${encodeURIComponent(precoDesconto)}&imagem=${encodeURIComponent(imagem)}&parcelamento=${encodeURIComponent(parcelamento)}&descricao=${encodeURIComponent(descricao)}&textoAlternativo=${textoAlternativo}&imagemDemostracao1=${encodeURIComponent(imagemDemostracao1)}&imagemDemostracao2=${encodeURIComponent(imagemDemostracao2)}&imagemDemostracao3=${encodeURIComponent(imagemDemostracao3)}`;

  window.location.href = url;
}

const modal = document.getElementById('atendimentoModal');
const openModal = document.getElementById('openModal');
const closeBtn = document.getElementById('closeBtn');

// Ao clicar no elemento de atendimento, adiciona a classe para mostrar o modal
openModal.addEventListener('click', () => {
  modal.classList.add('ativo');
});

// Fecha o modal quando clicar no "X"
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
