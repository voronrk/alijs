document.addEventListener('DOMContentLoaded', ()=> {
    'use strict';

    //=document.getElementById(''),
    //js-beautify - форматирование кода

    const search=document.querySelector('.search'), 
          cartBtn=document.querySelector('#cart'),
          wishlistBtn=document.getElementById('wishlist'),
          goodsWrapper=document.querySelector('.goods-wrapper'),
          cart=document.querySelector('.cart'),
          category=document.querySelector('.category');


          //fetch - запрос на сервер (почитать)
          //aboun 'promice' too

     

    const createCardGoods = (id, title, price, img) => {
         //create element
        const card = document.createElement('div');
        //add class to element
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3'; 
        card.innerHTML = `<div class="card">
                            <div class="card-img-wrapper">
                                <img class="card-img-top" src="${img}" alt="">
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

    // const renderCard = (items) => {
    //     goodsWrapper.textContent='';
    //     items.forEach((item) => {
    //         const { id, title, price, imgMin } = item;
    //         goodsWrapper.appendChild(createCardGoods(id, title, price, imgMin));
    //     })
    // }

    const renderCard = (items) => {
        goodsWrapper.textContent='';
        items.forEach(({ id, title, price, imgMin }) => {
            //Посмотреть деструктуризацию --^
            goodsWrapper.appendChild(createCardGoods(id, title, price, imgMin));
        })
    }

    goodsWrapper.appendChild(createCardGoods(1, 'Durts', 534, 'archer.jpg')); //append child element (to end)
    goodsWrapper.appendChild(createCardGoods(2, 'Фламинго', 3000, 'flamingo.jpg'));
    goodsWrapper.append(createCardGoods(1, 'Socks', 10000, 'socks.jpg'));

    const closeCart = (event) => {
        const target=event.target;
        if (target === cart || target.classList.contains('cart-close') || event.keyCode==27) {
        cart.style.display='';
        document.removeEventListener('keydown', closeCart);
        //classList.toggle - remove if present, add if no present
    };
    };

    const openCart = (event) => {
        event.preventDefault();
        cart.style.display='flex';
        document.addEventListener('keydown', closeCart);
    };
    

    const getGoods = (handler, filter) => {
        fetch('db/db.json')
            .then(response => response.json())
            .then(filter)
            .then(handler);
        };

    const randomSort = (item) => item.sort(() => Math.random()-0.5);

    const choiceCategory = (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('category-item')) {
            const category = target.dataset.category;
            getGoods(renderCard, (goods) => goods.filter(item => item.category.includes(category)));
            }
    };

    cartBtn.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);
    getGoods(renderCard, randomSort);
    category.addEventListener('click', choiceCategory);

});