import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useCartStore = create(
  devtools(

    persist(

      (set, get) => ({

        cart: [],

        setCart: (data) =>
          set((state) => {
            const doesProductExist = state.cart.filter((item) => item.productId === data.productId);
            return doesProductExist.length > 0
              ? {
                ...state,
                cart: state.cart.reverse().map((item) => (item.productId === data.productId ? { ...item, quantity: item.quantity + 1 } : item)),
              }
              : { ...state, cart: [...state.cart, data] };
          }),

        removeCart: (id) => set((state) => ({ ...state, cart: state.cart.filter((element) => element.productId !== id) })),

        clearCart: () => set(() => ({ cart: [] })),

        getSubtotal: () => {
          const cart = get().cart;
          let subTotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0) || 0;
          return subTotal;
        },

        decreaseOne: (id) =>
          set((state) => {
            let itemToDelete = state.cart.find((item) => item.productId === id); // get the item to delete
            return itemToDelete.quantity > 1
              ? {
                ...state,
                cart: state.cart.map((item) => (item.productId === id ? { ...item, quantity: item.quantity - 1 } : item)),
              }
              : { ...state, cart: state.cart.filter((item) => item.productId !== id) };
          }),

        increaseOne: (id) =>
          set((state) => {
            return {
              ...state,
              cart: state.cart.map((item) => (item.productId === id ? { ...item, quantity: item.quantity + 1 } : item)),
            };
          }),
      })
    )
  )
)


export const useGlobalStore = create(
  devtools((set) => ({
    showBanner: true,
    setShowBanner: () => set((state) => ({ ...state, showBanner: false })),
    isOpenCart: false,
    setIsOpenCart: (data) => set({ isOpenCart: data }),
  })));
