import axios from 'axios';
// API with axios
function getAllProducts() {
  axios.get('https://dummyjson.com/products')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

const getAllProductsButton = document.getElementById('gap');
getAllProductsButton.addEventListener('click', getAllProducts);

