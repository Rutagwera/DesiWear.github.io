const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart. This is a demo website, so no actual cart functionality is implemented.');
    });
});
