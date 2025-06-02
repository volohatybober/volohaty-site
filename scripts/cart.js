document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const clearCartButton = document.getElementById('clear-cart');
    const cartCount = document.getElementById('cart-count');
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const updateCartCount = () => {
      let totalCount = 0;
      cart.forEach(item => {
        totalCount += item.quantity;
      });
      cartCount.textContent = totalCount;
    };
  
    const renderCart = () => {
      cartItemsContainer.innerHTML = '';
      let total = 0;
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Cart Empty</p>';
      } else {
        cart.forEach((item, index) => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'cart-item';
          itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" />
            <div class="cart-item-details">
              <h3>${item.name}</h3>
              <p>Ціна: ${item.price}$</p>
              <p>Quantity ${item.quantity}</p>
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
  
    const removeItem = (index) => {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    };
  
    cartItemsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-item')) {
        const index = parseInt(e.target.getAttribute('data-index'));
        removeItem(index);
      }
    });
  
    clearCartButton.addEventListener('click', () => {
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });
  
    renderCart();
  });
  