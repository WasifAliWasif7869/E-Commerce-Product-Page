const { createSlice } = require("@reduxjs/toolkit");

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const exists = state.find(
        (product) => product.productID == action.payload.productID,
      );
      if (exists) {
        state.map((product, index) => {
          if (product.productID == exists.productID) {
            state[index] = {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            };
          } else {
            return product;
          }
        });
      } else {
        state.push({ ...action.payload });
      }
    },
    removeFromCart(state, action) {
      console.log(action.payload);
      return state.filter((product) => {
        return product.productID !== action.payload
      }); 
    },
  },
});

export const { addToCart, removeFromCart } = cart.actions;

export default cart.reducer;
