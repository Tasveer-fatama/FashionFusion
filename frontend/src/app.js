function search() {
    const searchTerm = document.getElementById('search-item').value.toLowerCase(); 
    const productList = document.getElementById('product-list');
    const products = productList.querySelectorAll('.product'); 
  
    for (const product of products) {
      const productTitle = product.querySelector('h5').textContent.toLowerCase(); 
  
      if (productTitle.includes(searchTerm)) {
        product.classList.remove('hidden'); 
      } else {
        product.classList.add('hidden'); 
      }
    }
  }