document.addEventListener('DOMContentLoaded', () => {
    const ordersContainer = document.getElementById('orders-container');
    const cartCount = document.getElementById('cart-count')
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
  
    if (orders.length === 0) {
      ordersContainer.innerHTML = '<p>No orders found.</p>';
      return;
    }
  
    const renderOrders = () => {
      ordersContainer.innerHTML = '';
      orders.forEach((order, idx) => {
        const div = document.createElement('div');
  
        let itemsHtml = order.items.map(i =>
          `<li>
             <img src="${i.img}" alt="${i.name}" />
             <span>${i.name} — ${i.quantity} pcs × ${i.price}$ = ${(i.quantity * i.price).toFixed(2)}$</span>
           </li>`
        ).join('');
  
        div.innerHTML = `
          <h3>Order #${idx + 1} - ${new Date(order.date).toLocaleString()}</h3>
          <ul>${itemsHtml}</ul>
          <div class="order-info">
            <p><strong>Total:</strong> ${order.total.toFixed(2)}$</p>
            <p><strong>Name:</strong> ${order.firstName} ${order.lastName}</p>
            <p><strong>Address:</strong> ${order.address}</p>
            <p><strong>Postal Code:</strong> ${order.postalCode}</p>
            <p><strong>Phone:</strong> ${order.phoneCountry} ${order.phone}</p>
          </div>
          <button class="remove-order-btn" data-index="${idx}">Remove Order</button>
        `;
  
        ordersContainer.appendChild(div);
      });
  
      document.querySelectorAll('.remove-order-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          const index = +e.target.getAttribute('data-index');
          orders.splice(index, 1);
          localStorage.setItem('orders', JSON.stringify(orders));
          renderOrders();
        });
      });
    };
  
    renderOrders();
  });
  