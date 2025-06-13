document.addEventListener('DOMContentLoaded', () => {
  const cartCount = document.getElementById('cart-count');
  const menuWrapper = document.querySelector('.menu-wrapper');
  const megaMenu = document.getElementById('mega-menu');
  const productList = document.getElementById('productList');
  const cartItems = document.getElementById('cartItems');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCartCount() {
    if (cartCount) {
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = total;
    }
  }

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  if (menuWrapper && megaMenu) {
    menuWrapper.addEventListener('mouseenter', () => {
      megaMenu.classList.add('active');
    });

    menuWrapper.addEventListener('mouseleave', () => {
      megaMenu.classList.remove('active');
    });
  }

  document.querySelectorAll('.discover-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
      const textWrapper = button.querySelector('.text-wrapper');
      if (textWrapper) {
        textWrapper.classList.add('animate');
        setTimeout(() => {
          textWrapper.classList.remove('animate');
        }, 1000);
      }
    });
  });

  if (productList) {
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name || 'Unnamed Product'}</h3>
        <p>${product.price}$</p>
        <button class="add-to-cart" data-id="${product.id}">Додати в кошик</button>
      `;
      productList.appendChild(div);
    });

    productList.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        addToCart(id);
      }
    });
  }

  function addToCart(id) {
    const item = products.find(p => p.id === id);
    if (item) {
      const existingItem = cart.find(p => p.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
      saveCart();
      renderCart();
    }
  }

  function renderCart() {
    if (cartItems) {
      cartItems.innerHTML = '';
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.price}₴ × ${item.quantity}`;
        cartItems.appendChild(li);
      });
    }
  }

  updateCartCount();
  renderCart();
});
function getRandomProducts(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function renderMiniCatalogue() {
  const miniGrid = document.getElementById('miniProductGrid');
  const selected = getRandomProducts(products, 5);

  selected.forEach(product => {
    const div = document.createElement('div');
    div.className = 'mini-product';
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}$</p>
    `;
    miniGrid.appendChild(div);
  });
}

renderMiniCatalogue();