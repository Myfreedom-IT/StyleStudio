let allProducts = [];
fetch('uu.json')
    .then(response => response.json())
    .then(data => {
        allProducts = data;
        loadFavorites();
        loadCart();
        updateStats();
    });
// Функция загрузки ИЗБРАННОГО
function loadFavorites() {
    let favoritesIds = JSON.parse(localStorage.getItem('favorites') || '[]');
    let favoritesGrid = document.querySelector('.favorites-grid');
    if (!favoritesGrid) return;  
    if (favoritesIds.length === 0) {
        favoritesGrid.innerHTML = '<div style="text-align: center; padding: 40px;">Нет избранных товаров</div>';
        return;
    }
    favoritesGrid.innerHTML = '';
    favoritesIds.forEach(index => {
        let product = allProducts[index];
        if (product) {
            favoritesGrid.innerHTML += `
                <div class="fav-item" style="position: relative;">
                    <button class="remove-fav" data-index="${index}" style="position: absolute; top: 5px; right: 5px; background: #ff4444; color: white; border: none; border-radius: 50%; width: 20px; height: 20px; cursor: pointer; font-size: 12px; display: flex; align-items: center; justify-content: center;">✕</button>
                    <img src="${product.pic}" alt="${product.name}">
                    <div class="fav-info">
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                </div>
            `;
        }
    });
    // удаления из избранного
    document.querySelectorAll('.remove-fav').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            let index = parseInt(this.getAttribute('data-index'));
            let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            let newFavorites = favorites.filter(i => i !== index);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            loadFavorites();
            updateStats(); 
        });
    });
}

// Функция загрузки КОРЗИНЫ
function loadCart() {
    let cartIds = JSON.parse(localStorage.getItem('cart') || '[]');
    let ordersList = document.querySelector('.orders-list');
    if (!ordersList) return;
    if (cartIds.length === 0) {
        ordersList.innerHTML = '<div style="text-align: center; padding: 20px;">Корзина пуста</div>';
        return;
    }
    ordersList.innerHTML = '';
    cartIds.forEach((index) => {
        let product = allProducts[index];
        if (product) {
            ordersList.innerHTML += `
                <div class="order-item" style="position: relative; display: flex; justify-content: space-between; align-items: center; gap: 15px;">
                    <button class="remove-cart" data-index="${index}" style="position: absolute; top: 5px; right: 5px; background: #ff4444; color: white; border: none; border-radius: 50%; width: 20px; height: 20px; cursor: pointer; font-size: 12px; display: flex; align-items: center; justify-content: center;">✕</button>
                    <img src="${product.pic}" alt="${product.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px;">
                    <div class="order-details" style="flex: 1;">
                        <h3>${product.name}</h3>
                        <p>Added to cart</p>
                        <span class="order-status status-processing">In Cart</span>
                    </div>
                    <div class="order-total">${product.price}</div>
                </div>
            `;
        }
    });
    // удаления из корзины
    document.querySelectorAll('.remove-cart').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            let index = parseInt(this.getAttribute('data-index'));
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            let newCart = cart.filter(i => i !== index);
            localStorage.setItem('cart', JSON.stringify(newCart));
            loadCart();
            updateStats();
        });
    });
}

// Обновление счетчиков
function updateStats() {
    let cartIds = JSON.parse(localStorage.getItem('cart') || '[]');
    let favoritesIds = JSON.parse(localStorage.getItem('favorites') || '[]');
    let statValues = document.querySelectorAll('.stat-value');
    if (statValues.length >= 2) {
        statValues[0].textContent = cartIds.length;
        statValues[1].textContent = favoritesIds.length;
    }
}