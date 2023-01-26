const btnCart = document.querySelector('.icon-cart')
const containerCartProduct = document.querySelector('.container-cart-product')

btnCart.addEventListener('click', () => {
    containerCartProduct.classList.toggle
    ('hidden-cart')
})

/*-----------------------------------------*/

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

/*Lista de contenedor de producto*/
const productList = document.querySelector('.container-product')

/*Variable de arreglo de productos*/
let allProduct = []



productList.addEventListener('click', e => {

    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement
        console.log(product.querySelector('h2').textContent);
    }
})