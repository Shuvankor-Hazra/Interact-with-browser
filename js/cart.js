const addProduct = () => {
  const productName = document.getElementById("product-name");
  const productQuantity = document.getElementById("product-quantity");
  const product = productName.value;
  const quantity = productQuantity.value;
  console.log(product, quantity);
  productName.value = "";
  productQuantity.value = "";

  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity );
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-field");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};


const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart; 
}


const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified);
}


const displayProductFroLocalStorage = () => {
    const savedCart =  getStoredShoppingCart();
    console.log(savedCart);
    for (const product in savedCart) {
        const quantity = savedCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity)
    }
}

displayProductFroLocalStorage();