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

  const menuBtn = document.getElementById('menu-btn');
  const megaMenu = document.getElementById('mega-menu');
  const closeBtn = document.getElementById('close-btn');
  const productList = document.getElementById('productList');
  const cartItems = document.getElementById('cartItems');
  let cart = [];

  // Відкриття меню
  if (menuBtn && megaMenu) {
    menuBtn.addEventListener('click', () => {
      megaMenu.classList.add('active');
    });
  }

  // Закриття меню
  if (closeBtn && megaMenu) {
    closeBtn.addEventListener('click', () => {
      megaMenu.classList.remove('active');
    });
  }

  // Додавання анімації на кнопку
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

  // Вивід товарів
  if (productList) {
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}₴</p>
        <button class="add-to-cart" data-id="${product.id}">Додати в кошик</button>
      `;
      productList.appendChild(div);
    });

    // Обробка натискання на кнопку "Додати в кошик"
    productList.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        addToCart(id);
      }
    });
  }

  // Додати товар в кошик
  function addToCart(id) {
    const item = products.find(p => p.id === id);
    if (item) {
      cart.push(item);
      renderCart();
    }
  }

  // Відобразити кошик
  function renderCart() {
    if (cartItems) {
      cartItems.innerHTML = '';
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.price}₴`;
        cartItems.appendChild(li);
      });
    }
  }
});
