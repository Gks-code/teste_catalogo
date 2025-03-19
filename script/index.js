function filterProducts() {
    var input, filter, products, product, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    products = document.getElementById('productList').getElementsByClassName('produto');
    
    for (i = 0; i < products.length; i++) {
        product = products[i];
        txtValue = product.getAttribute('data-name');
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    }
}
