const products = document.querySelectorAll('.product');
const totalPrice = document.getElementById('total-price');

products.forEach((product, i) => {
    const productCard = product.querySelector('.product-card');
    const productExpand = product.querySelector('.product-content');
    const price = product.querySelector('.price').innerHTML;

    product.addEventListener('click', () => {
        productCard.classList.add('hide');

        if (productCard.classList.contains('hide')) {
            productExpand.classList.remove('hide');
            totalPrice.innerText = `Total: ${price}`;
        } else {
            productExpand.classList.add('hide');
        }

        hideAll(i);
    });
});

function hideAll(index) {
    products.forEach((product, i) => {
        if (i !== index) {
            const productCard = product.querySelector('.product-card');
            const productExpand = product.querySelector('.product-content');
            productCard.classList.remove('hide');
            productExpand.classList.add('hide');
        }
    });
}
