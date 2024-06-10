function search() {
    const searchTerm = document.getElementById('search-item').value.toLowerCase(); // Get search term in lowercase
    const productList = document.getElementById('product-list');
    const products = productList.querySelectorAll('.product'); // Select all product cards
  
    for (const product of products) {
      const productTitle = product.querySelector('h5').textContent.toLowerCase(); // Get product title in lowercase
  
      if (productTitle.includes(searchTerm)) {
        product.classList.remove('hidden'); // Show matching products
      } else {
        product.classList.add('hidden'); // Hide non-matching products
      }
    }
  }