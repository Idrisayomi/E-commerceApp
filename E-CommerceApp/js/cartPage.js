// Sample cartData format (replace with your actual cart logic)
let cartData = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function renderCart() {
  cartItemsContainer.innerHTML = ""; // clear current
  let total = 0;

  cartData.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>₦${item.price.toLocaleString()}</p>
      </div>
      <div class="cart-item-actions">
        <button class="minus">−</button>
        <span class="qty">${item.qty}</span>
        <button class="plus">+</button>
        <span class="subtotal">₦${subtotal.toLocaleString()}</span>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);

    // Add event listeners for +/- buttons
    const plusBtn = cartItem.querySelector(".plus");
    const minusBtn = cartItem.querySelector(".minus");
    const qtySpan = cartItem.querySelector(".qty");
    const subtotalSpan = cartItem.querySelector(".subtotal");

    plusBtn.addEventListener("click", () => {
      item.qty++;
      qtySpan.textContent = item.qty;
      subtotalSpan.textContent = `₦${(item.price * item.qty).toLocaleString()}`;
      updateTotal();
      saveCart();
    });

    minusBtn.addEventListener("click", () => {
      if (item.qty > 0) {
        item.qty--;
        qtySpan.textContent = item.qty;
        subtotalSpan.textContent = `₦${(item.price * item.qty).toLocaleString()}`;
        updateTotal();
        saveCart();
      }
    });
  });

  updateTotal();
}

function updateTotal() {
  const total = cartData.reduce((acc, item) => acc + item.price * item.qty, 0);
  cartTotal.textContent = total.toLocaleString();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cartData));
}

renderCart();
