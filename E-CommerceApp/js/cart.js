// AUTH PROTECTION
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
  window.location.href = "login.html";
}

// WELCOME MESSAGE
document.getElementById("welcomeText").textContent =
  `Welcome, ${currentUser.firstName}!`;

// LOGOUT
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
});


// Load cart data from localStorage or start empty
let cartData = JSON.parse(localStorage.getItem("cart")) || [];



// RENDER PRODUCTS
const container = document.getElementById("productsContainer");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product-card";
  div.dataset.id = product.id; // assign unique id for persistence

  div.innerHTML = `
    <div class="product-image">
      <img 
        src="${product.image}" 
        alt="${product.name}"
        loading="lazy"
        onerror="this.src='assets/images/placeholder.png'"
      >
    </div>

    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="price">₦${product.price.toLocaleString()}</p>

      <div class="product-actions">
        <button class="minus">−</button>
        <span class="qty">0</span>
        <button class="plus">+</button>
      </div>
    </div>
  `;

  container.appendChild(div);

  // ---- Handle qty ----
  const plusBtn = div.querySelector(".plus");
  const minusBtn = div.querySelector(".minus");
  const qtySpan = div.querySelector(".qty");

  // Initialize qty from localStorage
  let productInCart = cartData.find(p => p.id == product.id);
  let qty = productInCart ? productInCart.qty : 0;
  qtySpan.textContent = qty;

  // Plus button
  plusBtn.addEventListener("click", () => {
    qty++;
    qtySpan.textContent = qty;

    if (productInCart) {
      productInCart.qty = qty;
    } else {
      productInCart = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: qty
      };
      cartData.push(productInCart);
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
    updateCartCount();
  });

  // Minus button
  minusBtn.addEventListener("click", () => {
    if (qty > 0) {
      qty--;
      qtySpan.textContent = qty;
      if (productInCart) productInCart.qty = qty;

      localStorage.setItem("cart", JSON.stringify(cartData));
      updateCartCount();
    }
  });
});

// ---- Update cart icon count ----
function updateCartCount() {
  const cartCount = document.getElementById("cartCount"); // use the correct ID
  if (!cartCount) return;
  const totalQty = cartData.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalQty;
}

// Call once on page load
updateCartCount();


