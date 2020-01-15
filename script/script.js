document.addEventListener('DOMContentLoaded', ()=> {
    'use strict';

    //=document.getElementById(''),
    //js-beautify - форматирование кода

    const search=document.querySelector('.search'), 
          cartBtn=document.querySelector('#cart'),
          wishlistBtn=document.getElementById('wishlist'),
          goodsWrapper=document.querySelector('.goods-wrapper'),
          cart=document.querySelector('.cart');

    const createCardGoods = (id, title, price, img) => {
         //create element
        const card = document.createElement('div');
        //add class to element
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3'; 
        card.innerHTML = `<div class="card">
                            <div class="card-img-wrapper">
                                <img class="card-img-top" src="img/${img}" alt="">
                                <button class="card-add-wishlist"
                                data-goods-id="${id}"></button>
                            </div>
                            <div class="card-body justify-content-between">
                                <a href="#" class="card-title">${title}</a>
                                <div class="card-price">${price} ₽</div>
                                <div>
                                    <button class="card-add-cart
                                    data-goods-id="${id}">Добавить в корзину</button>
                                </div>
                            </div>
                        </div>`; 
                        
        return card;
    };
    goodsWrapper.appendChild(createCardGoods(1, 'Durts', 534, 'temp/archer.jpg')); //append child element (go end)
    goodsWrapper.appendChild(createCardGoods(2, 'Фламинго', 3000, 'temp/flamingo.jpg'));
    goodsWrapper.append(createCardGoods(1, 'Socks', 10000, 'temp/socks.jpg'));

    const closeCart = (event) => {
        const target=event.target;
        console.log(target);

        if (target === cart || target.classList.contains('cart-close')) {
        cart.style.display='';
        //classList.toggle - remove if present, add if no present
    };
    };

    const openCart = () => {
         cart.style.display='flex';
    };
    
    cartBtn.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);
});