document.addEventListener('DOMContentLoaded', () => {
  updateCartUI(); // Atualiza a interface do carrinho ao carregar a página

  const botaoVoltar = document.querySelector('#voltar');
  if (botaoVoltar) {
    botaoVoltar.addEventListener('click', (e) => {
      window.history.back();
    });
  }
  
});

document.querySelector('.button-comprar button').addEventListener('click', (e) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    e.preventDefault(); // Impede o redirecionamento
    alert('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.');
  }
});


function updateCartUI() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById("cart-list");
    const itemCount = document.getElementById("cart-item-count");
    const subtotalDisplay = document.getElementById("cart-subtotal");
    const cartCountBadge = document.getElementById("cart-count");
  
    cartList.innerHTML = "";
  
    if (cart.length === 0) {
      const p = document.createElement("p");
      p.id = "empty-cart-msg";
      p.textContent = "Seu carrinho está vazio.";
      cartList.appendChild(p);
    } else {
      cart.forEach((product, index) => {
        const produtoDiv = document.createElement("div");
        produtoDiv.className = "produtos-adicionados";
        produtoDiv.innerHTML = `
          <div class="img-produto">
            <img src="${product.img}" alt="${product.name}" />
          </div>
          <div class="info-produto">
            <div class="titulo-info-produto">
              <p>${product.name}</p>
            </div>
            <div class="info-produto-detalhes">
              <p class="descricao">${product.details}</p>
              <button class="ver-mais">Ver Mais</button>
            </div>
            <div class="info-produto-preco">
              <span>R$ ${product.price}</span>
              <span>R$ ${product.discountPrice}</span>
            </div>
            <div class="opcoes-produto">
              <div class="remove-quantidade" onclick="decreaseQuantity(${index})">
                <i class="fa-solid fa-minus"></i>
              </div>
              <div class="quantidade-produto">
                <p>${product.quantidade}</p>
              </div>
              <div class="add-quantidade" onclick="increaseQuantity(${index})">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div onclick="removeFromCart(${index})">
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>
        `;
        cartList.appendChild(produtoDiv);
      });
    }
  
    // Atualiza a contagem de itens e o subtotal
    itemCount.textContent = "Itens: " + cart.length;
    cartCountBadge.textContent = cart.length;
    const subtotal = cart.reduce((acc, product) => acc + (product.discountPrice * product.quantidade), 0);
    subtotalDisplay.innerHTML = `Subtotal: <strong>R$ ${subtotal.toFixed(2)}</strong>`;
  
    // Controla a barra de rolagem com base no número de produtos
    const produtosLista = document.querySelector('.produtos-lista');
    if (cart.length >= 2) {
      produtosLista.classList.add('com-scroll'); // Adiciona a classe para habilitar a barra de rolagem
    } else {
      produtosLista.classList.remove('com-scroll'); // Remove a classe para desabilitar a barra de rolagem
    }
  }

// Aumenta a quantidade de um produto
function increaseQuantity(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart[index]) {
    cart[index].quantidade += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  }
}

// Diminui a quantidade de um produto
function decreaseQuantity(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart[index] && cart[index].quantidade > 1) {
    cart[index].quantidade -= 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  }
}

// Remove um produto do carrinho
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
  setTimeout(() => alert("Produto removido do carrinho!"), 100); // Exibe um alerta após 100ms
}

// Adiciona um produto ao carrinho
function addToCart(product) {
  console.log("Produto recebido:", product); // Depuração

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log("Carrinho antes de adicionar:", cart); // Depuração

  const produtoExistente = cart.find(item => item.name === product.name);
  if (produtoExistente) {
    produtoExistente.quantidade += 1;
    setTimeout(() => alert("Produto já existe no carrinho!"), 100); // Exibe um alerta após 100ms
  } else {
    cart.push(product);
    setTimeout( () => alert("Produto adicionado ao carrinho!"), 100);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  console.log("Carrinho após adicionar:", JSON.parse(localStorage.getItem('cart'))); // Depuração

  updateCartUI();
}

// Função para adicionar produtos ao carrinho
function addProductToCart(product) {
  addToCart(product);
  if (firstCartOpen) {
    const offcanvasElement = document.getElementById("offcanvasRight");
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
    bsOffcanvas.show();
    firstCartOpen = false;
  }
}

// Evento de clique para o botão "COMPRAR"
const btnComprar = document.querySelector('.btn-produto');

if (btnComprar) {
  btnComprar.addEventListener('click', () => {

    const nomeProduto = document.getElementById('nomeProduto').innerText;
    const preco = document.getElementById('preco').innerText;
    const precoDesconto = document.getElementById('precoDesconto').innerText;
    const descricao = document.getElementById('descricaoproduto').innerText;
    const imagem = document.getElementById('imagemProduto').src;

    const produto = {
      name: nomeProduto,
      details: descricao,
      price: parseFloat(preco.replace('R$ ', '').replace(',', '.')),
      discountPrice: parseFloat(precoDesconto.replace('R$ ', '').replace(',', '.')),
      img: imagem,
      quantidade: 1
    };
    addProductToCart(produto);
  });
}

// Evento de clique para os botões "Ver Mais" e "Ver Menos"
document.addEventListener('click', (event) => {

  if (event.target.classList.contains('ver-mais')) {
    const descricao = event.target.previousElementSibling;
    descricao.style.whiteSpace = 'normal'; 
    descricao.style.maxHeight = 'none'; 
    event.target.textContent = "Ver Menos";
    event.target.classList.remove('ver-mais');
    event.target.classList.add('ver-menos');
  } else if (event.target.classList.contains('ver-menos')) {
    const descricao = event.target.previousElementSibling;
    descricao.style.whiteSpace = 'nowrap'; 
    descricao.style.maxHeight = '60px'; 
    event.target.textContent = "Ver Mais";
    event.target.classList.remove('ver-menos');
    event.target.classList.add('ver-mais');
  }
});
