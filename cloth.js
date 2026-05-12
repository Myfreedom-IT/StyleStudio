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

karta.forEach((el, index) => {
    el.addEventListener('click', function() {
        const existingModal = document.querySelector('.js-okno-cloth');
        if (existingModal) {
            existingModal.remove();
        }
        const template = `
        <div class="js-okno-cloth">
            <button class="js-okno-close">x</button>
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
        const cart = document.querySelector('.js-okno-cloth-b2')
        cart.addEventListener('click', function(e) {
                if (this.classList.contains('clicked2')){
                    this.classList.remove('clicked2')
                } else {
                    this.classList.add('clicked2');
                }
                
            });
        const favorites = document.querySelector('.js-okno-cloth-b1')
        favorites.addEventListener('click', function(e) {
                if (this.classList.contains('clicked3')){
                    this.classList.remove('clicked3')
                } else {
                    this.classList.add('clicked3');
                }
                
            });
    });
});