import { useCartStore, useGlobalStore } from "../../src/store";

const AddToCart = (props) => {
 const { title, handle, transformedSrc, amount, variantId } = props
 const { setIsOpenCart } = useGlobalStore((state) => state);
 const { setCart } = useCartStore((state) => state);

 const productToOrder = {
  productImage: transformedSrc,
  productId: variantId,
  name: title,
  price: amount,
  quantity: 1,
  handle
 };

 const addToCart = () => {
  setCart(productToOrder);
  setIsOpenCart(true);
 };

 return (
  <button className="flex items-center justify-center w-full px-6 py-1 mx-auto text-base font-medium text-gray-900 border border-gray-900  divide-x divide-gray-600 rounded-md hover:bg-gray-700 hover:text-white md:text-lg" onClick={addToCart}>
   Agregar al carrito
  </button>
 );
}

export default AddToCart;