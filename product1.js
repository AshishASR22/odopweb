document.querySelectorAll('.like').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});

document.querySelectorAll('.fas.fa-cart-plus').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Product added to cart!');
    });
});

document.querySelectorAll('.fas.fa-exchange-alt').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Product added to compare list!');
    });
});
