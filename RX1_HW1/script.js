import { createStore } from "https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs";
import cartReducer from "./cartReducer.js";
import { addToCart, removeFromCart, calculateTotal } from "./actions.js";

const store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  console.log(store.getState());
  renderProducts();
  updateCart();
});

const productList = document.querySelector("#productList");
const cartList = document.querySelector("#cartList");
const totalAmount = document.querySelector("#totalAmount");

window.addToCartHandler = (id) => {
  const state = store.getState();
  const product = state.products.find((prod) => prod.id === id);
  if (product) {
    store.dispatch(addToCart(product));
    store.dispatch(calculateTotal());
  }
};

window.removeFromCartHandler = (id) => {
  store.dispatch(removeFromCart(id));
  store.dispatch(calculateTotal());
};

window.calculateTotal = () => {
  store.dispatch(calculateTotal());
};

const renderProducts = () => {
  const state = store.getState();
  productList.innerHTML = state.products
    .map((prod) => {
      return `<li>${prod.name} - RS. ${prod.price}<button onClick="addToCartHandler(${prod.id})">Add to Cart</button></li>`;
    })
    .join("");
};

renderProducts();

const updateCart = () => {
  const state = store.getState();
  cartList.innerHTML = state.cartItems
    .map((prod) => {
      return `<li>${prod.name} - RS. ${prod.price} - Quantity: ${prod.quantity}<button onClick="removeFromCartHandler(${prod.id})">Remove</button></li>`;
    })
    .join("");
  totalAmount.textContent = `RS.${state.totalAmount}`;
};

updateCart();
