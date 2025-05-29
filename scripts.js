document.addEventListener('DOMContentLoaded', () => {
  const products = [
    {
      id: 1,
      name: 'Oversized Hoodie',
      price: 4200,
      img: 'https://via.placeholder.com/200x250?text=Hoodie'
    },
    {
      id: 2,
      name: 'Luxury Cargo Pants',
      price: 3600,
      img: 'https://via.placeholder.com/200x250?text=Cargo+Pants'
    },
    {
      id: 3,
      name: 'Minimalist T-Shirt',
      price: 1800,
      img: 'https://via.placeholder.com/200x250?text=T-Shirt'
    }
  ];
document.querySelectorAll('.discover-btn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    const textWrapper = button.querySelector('.text-wrapper');
    
    // Додаємо клас анімації
    textWrapper.classList.add('animate');

    // Видаляємо клас після завершення анімації (1 секунда)
    setTimeout(() => {
      textWrapper.classList.remove('animate');
    }, 1000);
  });
});
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const megaMenu = document.getElementById('mega-menu');
  const productList = document.getElementById('productList');
  const cartItems = document.getElementById('cartItems');
  let cart = [];

  menuBtn.addEventListener('click', () => {
    megaMenu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    megaMenu.classList.remove('active');
  });

  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}₴</p>
      <button onclick="addToCart(${product.id})">Додати в кошик</button>
    `;
    productList.appendChild(div);
  });

  window.addToCart = function (id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    renderCart();
  };

  function renderCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} — ${item.price}₴`;
      cartItems.appendChild(li);
    });
  }
});
