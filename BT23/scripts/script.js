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
function GetASingleProduct() {
  axios.get('https://dummyjson.com/products/123?select=title,price')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
function SearchProducts() {
  axios.get('https://dummyjson.com/products/search?name=Chair')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

function LimitAndSkipProducts() {
  axios.get('https://dummyjson.com/products?limit=10&skip=23&select=title,price')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
function GetAllProductsCategories() {
  axios.get('https://dummyjson.com/products/categories')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
function GetProductsOfCategory() {
  axios.get('https://dummyjson.com/products/category/1')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
function AddAProduct() {
  axios.post('https://dummyjson.com/products/add', {
    name: 'Chair',
    price: 20,
    category: 1
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
function UpdateAProduct() {
    axios.put('https://dummyjson.com/products/1', {
        name: 'Chair',
        price: 20,
        category: 1
    })
        .then(response => {
        console.log(response.data);
        })
        .catch(error => {
        console.error(error);
        });
    }
function DeleteAProduct() {
    axios.delete('https://dummyjson.com/products/1')
        .then(response => {
        console.log(response.data);
        })
        .catch(error => {
        console.error(error);
        });
}
const getAllProductsButton = document.getElementById('gap');
getAllProductsButton.addEventListener('click', getAllProducts);

const GetASingleProductButton = document.getElementById('gasp');
GetASingleProductButton.addEventListener('click', GetASingleProduct);

const SearchProductsButton = document.getElementById('sp');
SearchProductsButton.addEventListener('click', SearchProducts);

const LimitAndSkipProductsButton = document.getElementById('lasp');
LimitAndSkipProductsButton.addEventListener('click', LimitAndSkipProducts);

const GetAllProductsCategoriesButton = document.getElementById('gapc');
GetAllProductsCategoriesButton.addEventListener('click', GetAllProductsCategories);

const GetProductsOfCategoryButton = document.getElementById('gpoc');
GetProductsOfCategoryButton.addEventListener('click', GetProductsOfCategory);

const AddAProductButton = document.getElementById('aap');
AddAProductButton.addEventListener('click', AddAProduct);

const UpdateAProductButton = document.getElementById('uap');
UpdateAProductButton.addEventListener('click', UpdateAProduct);

const DeleteAProductButton = document.getElementById('dap');
DeleteAProductButton.addEventListener('click', DeleteAProduct);

