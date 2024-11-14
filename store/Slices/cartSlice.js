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
  },
});

export const { addToCart } = cart.actions;

export default cart.reducer;
