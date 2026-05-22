

const tabs = document.querySelectorAll(".tab");
const style = document.querySelectorAll(".style");

tabs.forEach(tab => { tab.addEventListener("click", () => { tabs.forEach(t => t.classList.remove("active"));

    style.forEach(c => c.classList.remove("active")); tab.classList.add("active");
     
    document.getElementById(tab.dataset.category).classList.add("active"); }); })
const cityBtn = document.getElementById('cityBtn');
const cityDropdown = document.getElementById('cityDropdown');
const cityItems = document.querySelectorAll('.city-item');
const currentCitySpan = document.getElementById('current-city');


const menuButtons = document.querySelectorAll('.mob-menu');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');

menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        sideMenu.classList.add('open');
        menuOverlay.classList.add('show');
    });
});


const closeAll = () => {
    sideMenu.classList.remove('open');
    menuOverlay.classList.remove('show');
};

menuOverlay.addEventListener('click', closeAll);
closeMenu.addEventListener('click', closeAll);

const gps = document.getElementById('popup-btn-minsk');
const closeBtn = document.querySelector('.popup-close');
const overlay = document.querySelector('.popup-minsk');
const gpss = document.getElementById('popup-btn-grodno');
const gpsss = document.getElementById('popup-btn-brest');
const overlayy = document.querySelector('.popup-grodno');
const overlayyy = document.querySelector('.popup-brest');

window.addEventListener('click', function (event) {
  if (event.target === gps) {
    overlay.classList.add('open');
  }
  if (event.target === closeBtn) {
    overlay.classList.remove('open');
  }
  if (event.target === overlay) {
    overlay.classList.remove('open');
  }
});



const button = document.getElementById('mainButton');
  const menu = document.getElementById('menu');
  const items = menu.querySelectorAll('div');

  button.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  items.forEach(item => {
    item.addEventListener('click', () => {
      button.textContent = item.dataset.value; 
      menu.classList.remove('active'); 
    });
  });

 
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.container')) {
      menu.classList.remove('active');
    }
  });
function changeText(btn) {
    const configs = {
        1: { text: "Minsk", activeGps: gps, activeOverlay: overlay },
        2: { text: "Grodno", activeGps: gpss, activeOverlay: overlayy },
        3: { text: "Brest", activeGps: gpsss, activeOverlay: overlayyy }
    };

    const current = configs[btn];
    if (!current) return;

    button.textContent = current.text;

    const allGps = [gps, gpss, gpsss];
    const allOverlays = [overlay, overlayy, overlayyy];
    allGps.forEach(el => el.classList.remove('activate'));
    allOverlays.forEach(el => el.classList.remove('activate'));

    
    current.activeGps.classList.toggle('activate');
    current.activeOverlay.classList.toggle('activate');

    menu.classList.remove('active');
}
window.addEventListener('click', function (event) {
  if (event.target === gpss) {
    overlayy.classList.add('open');
  }
  if (event.target === closeBtn) {
    overlayy.classList.remove('open');
  }
  if (event.target === overlayy) {
    overlayy.classList.remove('open');
  }
});
window.addEventListener('click', function (event) {
  if (event.target === gpsss) {
    overlayyy.classList.add('open');
  }
  if (event.target === closeBtn) {
    overlayyy.classList.remove('open');
  }
  if (event.target === overlayyy) {
    overlayyy.classList.remove('open');
  }
});







function createModal(text) {
  console.log(text)
  const popup = document.querySelector(`div.${text}`)
  console.log(popup)
  popup.classList.add("visible")
  const closeBtn = popup.querySelector(".button-js")
  closeModal(closeBtn, popup)
};
function closeModal(btn, popup) {
  btn.addEventListener('click', function (e) {
    popup.classList.remove("visible")
  });
};
document.querySelectorAll('.open-popup').forEach(link => {
  link.addEventListener('click', function (e) {
    createModal(link.classList[0]);
  });
});


const karta = document.querySelectorAll('.ct-div')
let names, descriptions, prices, pics
fetch('uu.json')
  .then(response => response.json())
  .then(data => {
    names = data.map(item => item.name);
    descriptions = data.map(item => item.description)
    prices = data.map(item => item.price)
    pics = data.map(item => item.pic)
    console.log(names, descriptions, prices)
  });

function saveToFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(productId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Добавлено в избранное!');
}
function removeFromFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites = favorites.filter(id => id !== productId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function saveToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(id => id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}















karta.forEach((el, index) => {
    el.addEventListener('click', function() {
        const existingModal = document.querySelector('.js-okno-cloth');
        if (existingModal) {
            existingModal.remove();
        }
        const template = `
        <div class="js-okno-cloth">
            <button class="js-okno-close">✕</button>
            <div class="js-okno-cloth1">
                <img src=${pics[index]} alt="" class="js-okno-cloth-img">
            </div>
            <div class="js-okno-cloth2">
                <h2 class="js-okno-cloth-h2">${names[index]}</h2>
                <p class="js-okno-cloth-p">${descriptions[index]}</p>
                <div class="js-okno-cloth-buttons">
                    <div class="js-okno-cloth-sizes">
                        <button class="js-okno-cloth-bs">XS</button>
                        <button class="js-okno-cloth-bs">S</button>
                        <button class="js-okno-cloth-bs">M</button>
                        <button class="js-okno-cloth-bs">L</button>
                        <button class="js-okno-cloth-bs">XL</button>
                    </div>
                    <div class="js-okno-cloth-b123">
                        <button class="js-okno-cloth-b1">To favorites</button>
                        <button class="js-okno-cloth-b2">Add to Cart</button>
                        <button class="js-okno-cloth-b3">BUY: ${prices[index]}</button>
                    </div>
                </div>
            </div>
        </div>`
        document.body.insertAdjacentHTML('beforeend', template);
        const closeBtn = document.querySelector('.js-okno-close');
        const modal = document.querySelector('.js-okno-cloth');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                
                if (modal) {
                    modal.remove();
                }
            });
            
        }
        const size = document.querySelectorAll('.js-okno-cloth-bs');
        size.forEach(btn => {
            btn.addEventListener('click', function(e) {
                if (this.classList.contains('clicked')){
                    this.classList.remove('clicked')
                } else {
                    this.classList.add('clicked');
                }
                
            });
        });
const cart = document.querySelector('.js-okno-cloth-b2');
cart.addEventListener('click', function(e) {
    let cartList = JSON.parse(localStorage.getItem('cart') || '[]');
    let currentIndex = index; // Берем index из внешнего forEach
    
    if (cartList.includes(currentIndex)) {
        let newCart = cartList.filter(i => i !== currentIndex);
        localStorage.setItem('cart', JSON.stringify(newCart));
        this.classList.remove('clicked2');
        this.textContent = 'Add to Cart';
    } else {
        cartList.push(currentIndex);
        localStorage.setItem('cart', JSON.stringify(cartList));
        this.classList.add('clicked2');
        this.textContent = 'In Cart';
    }
});

const favorites = document.querySelector('.js-okno-cloth-b1');
favorites.addEventListener('click', function(e) {
    let favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');
    let currentIndex = index; // Берем index из внешнего forEach
    
    if (favoritesList.includes(currentIndex)) {
        let newFavorites = favoritesList.filter(i => i !== currentIndex);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        this.classList.remove('.clicked3');
        this.textContent = 'To favorites';
    } else {
        favoritesList.push(currentIndex);
        localStorage.setItem('favorites', JSON.stringify(favoritesList));
        this.classList.add('.clicked3');
        this.textContent = 'In favorites';
    }
});

    });
});

