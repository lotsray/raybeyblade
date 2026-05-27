const API_URL = "https://script.google.com/macros/s/AKfycbyQ3dml8e3U83p4j7X8LNzWSz5i_joYG6prlPnuRGzq-QOcTisLVZeThPw8Jo6e0kLWfw/exec";

const productList = document.getElementById("productList");

fetch(API_URL)
  .then(response => response.json())
  .then(products => {
    productList.innerHTML = "";

    if (products.length === 0) {
      productList.innerHTML = "<p>目前尚無商品上架。</p>";
      return;
    }

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="card-content">
          <h2>${product.name}</h2>
          <div class="price">$${product.price}</div>
          <p class="description">${product.description || ""}</p>
        </div>
      `;

      productList.appendChild(card);
    });
  })
  .catch(error => {
    productList.innerHTML = "<p>商品資料讀取失敗，請稍後再試。</p>";
    console.error(error);
  });
