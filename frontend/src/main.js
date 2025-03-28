document.getElementById("scrapeButton").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value; // Obtém a palavra-chave inserida pelo usuário
  const loadingElement = document.getElementById("loading"); // Obtém o indicador de loading
  const resultsDiv = document.getElementById("results");

  if (!keyword) {
    alert("Por favor, digite uma palavra-chave"); // Alerta se a palavra-chave não for fornecida
    return;
  }

  loadingElement.style.display = "block"; // Exibe o indicador de loading
  resultsDiv.innerHTML = ""; // Limpa os resultados anteriores

  try {
    // Faz uma requisição para o endpoint de scraping com a palavra-chave fornecida
    const response = await fetch(
      `http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`
    );
    if (!response.ok) {
      throw new Error("Falha ao buscar dados do servidor"); // Lança um erro se a resposta não for bem-sucedida
    }
    const data = await response.json(); // Converte a resposta em JSON
    displayResults(data.products); // Exibe os resultados
  } catch (error) {
    console.error("Erro:", error.message); // Loga o erro no console
    alert(
      "Falha ao coletar dados da Amazon. Por favor, tente novamente mais tarde."
    ); // Alerta o usuário sobre o erro
  } finally {
    loadingElement.style.display = "none"; // Oculta o indicador de carregamento
  }
});

function displayResults(products) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Limpa os resultados anteriores

  if (products.length === 0) {
    resultsDiv.innerHTML =
      "<p>Nenhum produto encontrado. Tente uma palavra-chave diferente.</p>"; // Mensagem se nenhum produto for encontrado
    return;
  }

  // Mapeia e exibe os produtos coletados
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product"); // Adiciona a classe 'product' ao div

    productDiv.innerHTML = `
            <div class="img-container">
                <img src="${product.imageUrl}" alt="${product.title}">
            </div>
            <div class="product-details">
                <h2>${product.title}</h2>
                <p>Rating: ${product.rating}</p>
                <p>Reviews: ${product.reviews}</p>
            </div>
        `;

    resultsDiv.appendChild(productDiv); // Adiciona o div do produto ao div de resultados
  });
}
