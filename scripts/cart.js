document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const clearCartButton = document.getElementById('clear-cart');
  const cartCount = document.getElementById('cart-count');
  const orderBtn = document.getElementById('order-btn');
  const orderForm = document.getElementById('order-form');
  const cancelOrderBtn = document.getElementById('cancel-order');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const updateCartCount = () => {
    let totalCount = 0;
    cart.forEach(item => totalCount += item.quantity);
    cartCount.textContent = totalCount;
  };

  const renderCart = () => {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p></p>';
    } else {
      cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
          <img src="${item.img}" alt="${item.name}" />
          <div class="cart-item-details">
            <h3>${item.name}</h3>
            <p>Ціна: ${item.price}$</p>
            <div class="quantity-control" style="display:flex; justify-content:center; align-items:center; gap:10px;">
              <button class="qty-btn" data-index="${index}" data-action="decrease">-</button>
              <span>Кількість: ${item.quantity}</span>
              <button class="qty-btn" data-index="${index}" data-action="increase">+</button>
            </div>
            <button class="remove-item" data-index="${index}">Remove</button>
          </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price * item.quantity;
      });
    }
    totalPriceElement.textContent = total.toFixed(2);
    updateCartCount();
  };

  cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
      const index = parseInt(e.target.getAttribute('data-index'));
      cart.splice(index, 1);
      saveAndRender();
    }
    if (e.target.classList.contains('qty-btn')) {
      const index = parseInt(e.target.getAttribute('data-index'));
      const action = e.target.getAttribute('data-action');
      if (action === 'increase') {
        cart[index].quantity++;
      } else if (action === 'decrease' && cart[index].quantity > 1) {
        cart[index].quantity--;
      }
      saveAndRender();
    }
  });

  clearCartButton.addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    window.location.href = '/pages/order.html';
  });

  function saveAndRender() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }

  orderBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your Cart Empty!');
      return;
    }
    orderForm.style.display = 'block';
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });


  cancelOrderBtn.addEventListener('click', () => {
    orderForm.style.display = 'none';
  });

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!orderForm.checkValidity()) {
      orderForm.reportValidity();
      return;
    }

    const orderData = {
      items: cart,
      total: cart.reduce((acc, i) => acc + i.price * i.quantity, 0),
      firstName: document.getElementById('first-name').value.trim(),
      lastName: document.getElementById('last-name').value.trim(),
      address: document.getElementById('address').value.trim(),
      postalCode: document.getElementById('postal-code').value.trim(),
      phoneCountry: document.getElementById('phone-country').value,
      phone: document.getElementById('phone').value.trim(),
      date: new Date().toISOString(),
    };

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert('Order succesfully done!');

    cart = [];
    saveAndRender();
    orderForm.reset();
    orderForm.style.display = 'none';
  });

  renderCart();
});
