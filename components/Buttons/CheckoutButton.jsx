import { useState } from "react";
import { useCartStore, useGlobalStore } from "../../src/store";
import { storeFront } from "../../utils";
import Loader from "../Loader";

const CheckoutButton = () => {
 const { cart, clearCart } = useCartStore(state => state)
 const { setIsOpenCart } = useGlobalStore(state => state)
 const [isLoading, setIsLoading] = useState(false)

 const variables = {
  input: {
   lineItems: cart?.map(item => ({ variantId: item.productId, quantity: item.quantity }))
  }
 }

 const checkoutMutation = `
    mutation CheckoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          webUrl
        }
      }
    }
  `;


 const handleCheckoutBtn = async () => {
  setIsLoading(true)
  const { data } = await storeFront(checkoutMutation, variables);
  const { webUrl } = await data.checkoutCreate.checkout;
  setIsOpenCart(false)
  clearCart()
  window.location.href = webUrl

 }

 return (
  <button className="flex items-center justify-center w-full gap-8 p-5 text-2xl text-white  bg-gray-900  divide-gray-600 rounded-md hover:bg-gray-700" onClick={handleCheckoutBtn}>
   {isLoading && (
    <Loader />
   )}
   Pagar Ahora
  </button>
 );
}

export default CheckoutButton;