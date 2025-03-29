// Codigo que puxa as informações das paginas que tem o botão ver produto 
window.onload = function () {
  const params = new URLSearchParams(window.location.search);

  document.getElementById("imagemProduto").src = params.get("imagem");
  document.getElementById("imagem-demostracao1").src = params.get("imagemDemostracao1");
  document.getElementById("imagem-demostracao2").src = params.get("imagemDemostracao2");
  document.getElementById("imagem-demostracao3").src = params.get("imagemDemostracao3");
  document.getElementById("nomeProduto").innerHTML = params.get("nome");
  document.getElementById("preco").innerHTML = params.get("preco");
  document.getElementById("precoDesconto").innerHTML = params.get("precoDesconto");
  document.getElementById("opcaoParcelamento").innerHTML = params.get("parcelamento");
  document.getElementById("descricaoproduto").innerHTML = params.get("descricao");
  document.getElementById("textoalternativo").innerText = params.get("textoAlternativo");
};

const imagemPrincipal = document.getElementById("imagemProduto");
const containersImagens = document.querySelectorAll(".img-next");
const imagensDemonstracao = document.querySelectorAll(".img-next img");

imagensDemonstracao.forEach((img) => {
  img.addEventListener("click", function() {
    // Remover bordas de todos os contêineres
    containersImagens.forEach((container) => {
      container.style.border = "none";
    });

    // Adicionar borda ao contêiner clicado
    this.parentElement.style.border = "2px solid #999";
    this.parentElement.style.borderRadius = "10px";
    
    // Atualizar a imagem principal
    imagemPrincipal.src = this.src;
  });
});


// Seleciona o elemento com a classe "container"
const container = document.querySelector(".container");

// Seleciona o elemento com o id "zoom"
const zoom = document.getElementById("zoom");

// Seleciona a imagem dentro do container
const img = container.querySelector("img");

// Define a largura e altura do background da imagem ampliada
const bgWidth = 800;
const bgHeight = 800;

// Adiciona um evento de movimento do mouse ao container
container.addEventListener("mousemove", (e) => {
  // Obtém as coordenadas do container em relação à janela
  const rect = container.getBoundingClientRect();
  // Calcula a posição do mouse dentro do container
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Obtém a largura e altura do elemento de zoom
  const zoomWidth = zoom.offsetWidth;
  const zoomHeight = zoom.offsetHeight;
  // Define a posição do elemento de zoom para centralizá-lo no cursor do mouse
  zoom.style.left = x - zoomWidth / 2 + "px";
  zoom.style.top = y - zoomHeight / 2 + "px";

  // Exibe o elemento de zoom
  zoom.style.display = "block";

  // Obtém as coordenadas da imagem em relação à janela
  const imgRect = img.getBoundingClientRect();
  // Calcula a posição relativa do mouse dentro da imagem
  const relX = e.clientX - imgRect.left;
  const relY = e.clientY - imgRect.top;

  // Calcula a porcentagem da posição do mouse dentro da imagem
  const xPercent = relX / imgRect.width;
  const yPercent = relY / imgRect.height;

  // Define os limites máximos para a posição do background
  const maxX = bgWidth - zoomWidth;
  const maxY = bgHeight - zoomHeight;

  // Calcula a posição do background da imagem ampliada
  const bgPosX = -(xPercent * maxX);
  const bgPosY = -(yPercent * maxY);

  // Define a imagem de fundo do elemento de zoom como a mesma da imagem original
  zoom.style.backgroundImage = `url(${img.src})`;
  // Define o tamanho do background da imagem ampliada
  zoom.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;
  // Define a posição do background da imagem ampliada
  zoom.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
});

// Adiciona um evento para esconder o elemento de zoom quando o mouse sai do container
container.addEventListener("mouseleave", () => {
  zoom.style.display = "none";
});