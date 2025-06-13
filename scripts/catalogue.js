document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 1, name: 'Yoshi Yamomoto shirt', price: 2300, img: '/images/yoshi.png', gender: 'man', category: 'tshirt' },
    { id: 2, name: 'Vivien Westwood x Palace t-shirt', price: 200, img: '/images/pearl.png', gender: 'woman', category: 'tshirt' },
    { id: 3, name: 'Bunny Boot', price: 1600, img: '/images/boot2.png', gender: 'woman', category: 'shoes' },
    { id: 4, name: 'Snake Shorts', price: 600, img: '/images/snake.png', gender: 'woman', category: 'shorts' },
    { id: 5, name: 'Yves Saint Laurent Bag', price: 2000, img: '/images/ysl.png', gender: 'woman', category: 'bag' },
    { id: 6, name: 'Star Jeans', price: 2000, img: '/images/monster.png', gender: 'man', category: 'shorts' },
    { id: 7, name: 'DHL t-shirt', price: 700, img: '/images/tshirt.png', gender: 'man', category: 'tshirt' },
    { id: 8, name: 'Bape zip sweatshirt', price: 400, img: '/images/bape.png', gender: 'woman', category: 'sweater' },
    { id: 9, name: 'Bapesta shoes', price: 900, img: '/images/bapeshoe.png', gender: 'man', category: 'shoes' },
    { id: 10, name: 'Chrome Hearts Silver Bracelet', price: 1200, img: '/images/silver.png', gender: 'man', category: 'acc' },
    { id: 11, name: 'Vetements South Park T-shirt', price: 1800, img: '/images/park.png', gender: 'man', category: 'tshirt' },
    { id: 12, name: 'Vetements x Reebok instapump emoji shoes', price: 1500, img: '/images/pump.png', gender: 'man', category: 'shoes' },
    { id: 13, name: 'Off-White Industrial Belt', price: 250, img: '/images/offwhite_belt.png', gender: 'man', category: 'acc' },
    { id: 14, name: 'Chanel Classic Flap Bag', price: 5000, img: '/images/chanel_flap.png', gender: 'woman', category: 'bag' },
    { id: 15, name: 'Nike Air Jordan 1', price: 700, img: '/images/air_jordan1.png', gender: 'man', category: 'shoes' },
    { id: 16, name: 'Adidas Yeezy Boost', price: 900, img: '/images/yeezy_350.png', gender: 'man', category: 'shoes' },
    { id: 17, name: 'Louis Vuitton Monogram Scarf', price: 600, img: '/images/lv_scarf.png', gender: 'woman', category: 'acc' },
    { id: 18, name: 'Hermès Birkin Bag', price: 15000, img: '/images/hermes_birkin.png', gender: 'woman', category: 'bag' },
    { id: 19, name: 'Supreme Box Logo Hoodie', price: 800, img: '/images/supreme_hoodie.png', gender: 'man', category: 'sweater' },
    { id: 20, name: 'Stone Island Shadow Project Jacket', price: 2200, img: '/images/stone_island_jacket.png', gender: 'man', category: 'jacket' },
    { id: 21, name: 'Raf Simons Ozweego Sneakers', price: 1100, img: '/images/raf_simmons_ozweego.png', gender: 'man', category: 'shoes' },
    { id: 22, name: 'Vetements Oversized T-Shirt', price: 400, img: '/images/vetements_tshirt.png', gender: 'woman', category: 'tshirt' },
    { id: 23, name: 'Givenchy Antigona Bag', price: 2400, img: '/images/givenchy_antigona.png', gender: 'woman', category: 'bag' },
    { id: 24, name: 'Rick Owens DRKSHDW Pants', price: 1300, img: '/images/rick_owens_pants.png', gender: 'man', category: 'shorts' },
    { id: 25, name: 'Thom Browne 4-Bar Sweater', price: 1600, img: '/images/thom_browne_sweater.png', gender: 'man', category: 'sweater' },
    { id: 26, name: 'Alexander McQueen Skull Scarf', price: 300, img: '/images/mcqueen_scarf.png', gender: 'woman', category: 'acc' },
    { id: 27, name: 'Comme des Garçons PLAY T-Shirt', price: 150, img: '/images/cdg_play_tshirt.png', gender: 'woman', category: 'tshirt' },
    { id: 28, name: 'Burberry Trench Coat', price: 2500, img: '/images/burberry_trench.png', gender: 'woman', category: 'jacket' },
    { id: 29, name: 'Moncler Maya Jacket', price: 1800, img: '/images/moncler_maya.png', gender: 'man', category: 'jacket' },
    { id: 30, name: 'Fendi Baguette Bag', price: 2700, img: '/images/fendi_baguette.png', gender: 'woman', category: 'bag' },
    { id: 31, name: 'Palm Angels Track Pants', price: 600, img: '/images/palm_angels_pants.png', gender: 'man', category: 'shorts' },
    { id: 32, name: 'Balmain Double-Breasted Blazer', price: 3200, img: '/images/balmain_blazer.png', gender: 'woman', category: 'sweater' },
    { id: 33, name: 'Celine Triomphe Bag', price: 3500, img: '/images/celine_triomphe.png', gender: 'woman', category: 'bag' },
    { id: 34, name: 'Acne Studios Pistol Boots', price: 700, img: '/images/acne_pistol_boots.png', gender: 'woman', category: 'shoes' },
    { id: 35, name: 'Maison Margiela Tabi Boots', price: 1200, img: '/images/margiela_tabi.png', gender: 'woman', category: 'shoes' },
    { id: 36, name: 'Dr. Martens 1460 Boots', price: 200, img: '/images/drmartens_1460.png', gender: 'man', category: 'shoes' },
    { id: 37, name: 'Fear of God Essentials Hoodie', price: 350, img: '/images/fog_essentials_hoodie.png', gender: 'man', category: 'sweater' },
    { id: 38, name: 'The North Face Nuptse Jacket', price: 400, img: '/images/tnf_nuptse.png', gender: 'man', category: 'jacket' },
    { id: 39, name: 'Canada Goose Expedition Parka', price: 1000, img: '/images/canada_goose_parka.png', gender: 'woman', category: 'jacket' },
    { id: 40, name: 'Patagonia Down Sweater', price: 250, img: '/images/patagonia_down.png', gender: 'woman', category: 'sweater' },
    { id: 41, name: 'Arc’teryx Beta AR Jacket', price: 550, img: '/images/arcteryx_beta_ar.png', gender: 'man', category: 'jacket' },
    { id: 42, name: 'Nike Tech Fleece Joggers', price: 120, img: '/images/nike_tech_fleece.png', gender: 'man', category: 'shorts' },
    { id: 43, name: 'Adidas Originals Superstar', price: 100, img: '/images/adidas_superstar.png', gender: 'woman', category: 'shoes' },
    { id: 44, name: 'Reebok Club C 85', price: 90, img: '/images/reebok_club_c.png', gender: 'man', category: 'shoes' },
    { id: 45, name: 'New Balance 990v5', price: 175, img: '/images/nb_990v5.png', gender: 'man', category: 'shoes' }
  ]

  const productList = document.getElementById('productList')
  const searchInput = document.getElementById('searchInput')
  const menuBtn = document.getElementById('menu-btn')
  const megaMenu = document.getElementById('mega-menu')
  const closeBtn = document.getElementById('close-btn')
  const cartItems = document.getElementById('cartItems')
  const cartCount = document.getElementById('cart-count')

  let cart = JSON.parse(localStorage.getItem('cart')) || []

  let activeFilters = { gender: null, category: null }
  let searchTerm = ''

  function render(productsToRender) {
    productList.innerHTML = ''
    productsToRender.forEach(product => {
      const div = document.createElement('div')
      div.className = 'product'
      div.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}₴</p>
        <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
      `
      productList.appendChild(div)
    })
    productList.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const id = parseInt(button.getAttribute('data-id'))
        addToCart(id)
      })
    })
  }

  function applyFilters() {
    let filtered = [...products]
    if (activeFilters.gender) {
      filtered = filtered.filter(p => p.gender === activeFilters.gender)
    } else if (activeFilters.category) {
      filtered = filtered.filter(p => p.category === activeFilters.category)
    }
    if (searchTerm) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    render(filtered)
  }

  function addToCart(id) {
    const product = products.find(p => p.id === id)
    if (!product) return
    const existingProduct = cart.find(item => item.id === id)
    if (existingProduct) existingProduct.quantity++
    else cart.push({ ...product, quantity: 1 })
    saveCart()
    renderCart()
  }

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
  }

  function updateCartCount() {
    if (!cartCount) return
    const total = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = total
  }

  function renderCart() {
    if (!cartItems) return
    cartItems.innerHTML = ''
    if (cart.length === 0) {
      cartItems.innerHTML = '<li>Ваш кошик порожній</li>'
      return
    }
    cart.forEach(item => {
      const li = document.createElement('li')
      li.textContent = `${item.name} — ${item.price}₴ × ${item.quantity}`
      cartItems.appendChild(li)
    })
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchTerm = searchInput.value
      applyFilters()
    })
  }

  if (menuBtn && megaMenu) {
    menuBtn.addEventListener('click', () => {
      megaMenu.classList.add('active')
    })
  }

  if (closeBtn && megaMenu) {
    closeBtn.addEventListener('click', () => {
      megaMenu.classList.remove('active')
    })
  }

  document.querySelectorAll('.discover-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
      const textWrapper = button.querySelector('.text-wrapper')
      if (!textWrapper) return
      textWrapper.classList.add('animate')
      setTimeout(() => {
        textWrapper.classList.remove('animate')
      }, 1000)
    })
  })

  document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', () => {
      const type = item.getAttribute('data-type')
      const value = item.getAttribute('data-value')
      if (value === 'all') activeFilters = { gender: null, category: null }
      else if (type === 'gender') {
        activeFilters.gender = value
        activeFilters.category = null
      } else if (type === 'category') {
        activeFilters.category = value
        activeFilters.gender = null
      }
      applyFilters()
    })
  })

  const urlParams = new URLSearchParams(window.location.search)
  const gender = urlParams.get('gender')
  const category = urlParams.get('category')
  if (gender) {
    activeFilters.gender = gender
    activeFilters.category = null
  }
  else if (category) {
    activeFilters.category = category
    activeFilters.gender = null
  }
  applyFilters()
  updateCartCount()
  renderCart()
})
