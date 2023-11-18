// agregar o eliminar productos

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=> {
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=> {
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

// Boton agregar al carrito

const addToCartBtn = document.querySelector('.details__button');
let cartNofitication = document.querySelector('.header__cart--notification');
let lastValue =  parseInt(cartNofitication.innerText);

addToCartBtn.addEventListener('click', ()=>{
    lastValue = lastValue + userInputNumber;

    cartNofitication.innerText = lastValue;
    cartNofitication.style.display = 'block';
    drawProductModal();

});


// Modal con detalles del carrito

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
//let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__chekout-container');


cartIconBtn.addEventListener('click', ()=> {
    cartModal.classList.toggle('show');

    if(lastValue === 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    }else{
        drawProductModal();
    }
    

});

// eleminar elementos del carrito

function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');

    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastValue = 0;
        cartNofitication.innerText = lastValue;
    });
}

// Cambiar imagenes cuando se presionen los botones flecha

const imageContainer = document.querySelector('.gallery__image-container');
const previousGalleryBtn = document.querySelector('.gallery__previous');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
});

previousGalleryBtn.addEventListener('click', ()=>{
    changePreviousImage(imageContainer);
});




// Mostrar modal de imagen cuando se hace click

const imageModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', ()=>{
    imageModal.style.display = 'grid';
});

closeModalBtn.addEventListener('click', ()=>{
    imageModal.style.display = 'none';

});


// Cambio de imagenes principales desde los thumnails

let thumnails = document.querySelectorAll('.gallery__thumnail');
thumnails = [...thumnails]

thumnails.forEach(thumnail => {
    thumnail.addEventListener('click', event=>{
        event.target.id
    imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
    })
})

// Cambio de imagenes principales desde los thumnails en el modal

let modalThumnails = document.querySelectorAll('.modal-gallery__thumnail');
const modalImageConatiner = document.querySelector('.modal-gallery__image-container');

modalThumnails = [...modalThumnails]

modalThumnails.forEach(modalThumnail => {
    modalThumnail.addEventListener('click', event=>{
        event.target.id.slice(-1)
        modalImageConatiner.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
    })
})


// cambiar imagen principal de modal con los botones

const previousModalBtn = document.querySelector('.modal-gallery__previous');
const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageConatiner);
});

previousModalBtn.addEventListener('click', ()=>{
    changePreviousImage(modalImageConatiner);
});




// Mostar el navbar cuando presiono el menu de hamburguesa

// const menuHamburguesa = document.querySelector('.header__menu');
// const itemsMenuHamburguesa = document.querySelectorAll('.navbar__items');

// menuHamburguesa.addEventListener('click', ()=>{
//     itemsMenuHamburguesa.toggle = 'block';
// });

/// Funciones

function drawProductModal(){
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="thumnail">
        <div>
            <p class="cart-modal__product">Autumn Limited Edition...</p>
            <p class="cart-modal__price">$125 x3 <span>$375.00</span></p>
        </div>
        <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
    </div>
    <button class="cart-modal__checkout">Checkout</button>`
deleteProduct()
let priceModal = document.querySelector('.cart-modal__price');
priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`;

}

function changeNextImage(imgContainer){
    if(imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}

function changePreviousImage(imgContainer){
    if(imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`

}