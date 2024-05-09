import create from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  setCartItems: (items) => set({ cartItems: items }),
  addCartItem: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeCartItem: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.cart_item_id !== itemId),
    })),
}));

export default useCartStore;
