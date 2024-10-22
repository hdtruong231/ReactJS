function getAllProducts() {
  fetch('https://dummyjson.com/products')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}
const getAllProductsButton = document.getElementById('gap');
getAllProductsButton.addEventListener('click', getAllProducts);



