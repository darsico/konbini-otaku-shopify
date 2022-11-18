import { GrClose } from 'react-icons/gr';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCartStore, useGlobalStore } from '../../src/store';
import { MdOutlineDeleteOutline } from "react-icons/md"
import CheckoutButton from '../Buttons/CheckoutButton';

const MiniCart = () => {

 const { isOpenCart, setIsOpenCart } = useGlobalStore((state) => state);
 const { cart, decreaseOne, increaseOne, removeCart, getSubtotal, clearCart } = useCartStore((state) => state) || [];

 const handleClearCart = () => {
  setIsOpenCart(false)
  clearCart()
 }
 return (
  <AnimatePresence>
   {isOpenCart && (
    <motion.section
     className={`z-50 fixed right-0 top-0 h-full w-screen md:w-[70%] lg:w-[40%]  bg-gray-100 box-border md:p-5 pt-5 pb-1  `}
     initial={{ x: '100%', boxShadow: '0 0 0 0px' }}
     animate={{ x: 0, boxShadow: '0 0 0 3000px rgba(0, 0, 0, 0.5)' }}
     exit={{ x: '100%', boxShadow: '0 0 0 0px' }}
     transition={{ duration: 0.3 }}
    >
     <div className="absolute top-0 left-0 flex flex-wrap content-center justify-between w-full p-5 text-3xl px-10 md:px-5 md:pb-5">
      <h2 className="font-medium text-2xl">Tu Carrito</h2>
      <GrClose onClick={() => setIsOpenCart(false)} className="hover:cursor-pointer text-2xl" />
     </div>
     <div className="relative mt-10 lg:mt-20 h-[50vh] overflow-auto py-8 px-10 md:p-0 ">
      <ul className="flex flex-col gap-2 ">
       {cart && cart.length > 0 ? (
        cart.map((item) => {
         const { productId, name, price, quantity, productImage, handle } = item;
         return (
          <motion.li key={productId} className="grid gap-3 md:gap-5 grid-cols-[1fr_3fr_0.5fr]  bg-white p-3 rounded-md h-fit" initial={{ y: '50%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '50%', opacity: 0 }} transition={{ duration: 0.6 }}>
           <Link href={`/products/${handle}`} passHref>
            <a>
             <figure className="w-28 hover:opacity-70">
              <img src={productImage} alt="" className="object-cover" />
             </figure>
            </a>
           </Link>
           <div className="flex flex-col justify-between gap-2 px-2 h-fit md:h-full">
            <Link href={`/products/${handle}`} passHref>
             <a>
              <div className="flex flex-col gap-1 group ">
               <p className="text-lg font-semibold group-hover:text-gray-500">
                {name} {quantity === 1 ? '' : `x ${quantity}`}
               </p>
               {/* <p className="mb-auto text-sm font-medium text-gray-400">
               </p> */}
               <p className="block font-medium md:self-end md:text-xl md:font-semibold md:hidden group-hover:text-gray-500">S/.{(price * quantity).toFixed(2)}</p>
              </div>
             </a>
            </Link>
            <div className="flex items-center">
             <button className="px-2 text-base transition-all bg-gray-100 hover:bg-gray-300" onClick={() => decreaseOne(productId)}>
              -
             </button>
             <p className="px-5 text-lg">{quantity}</p>
             <button className="px-2 text-base transition-all bg-gray-100 hover:bg-gray-300" onClick={() => increaseOne(productId)}>
              +
             </button>
            </div>
           </div>
           <div className='flex flex-col items-end justify-end  '>
            <MdOutlineDeleteOutline className='text-2xl  text-gray-300 transition-all hover:cursor-pointer hover:text-gray-500' onClick={() => removeCart(productId)} />
            <p className="hidden font-medium self-end md:text-xl md:font-semibold md:block mt-auto">S/.{(price * quantity).toFixed(2)}</p>
           </div>
          </motion.li>
         );
        })
       ) : (
        <p className="p-20 text-lg font-medium text-center text-gray-400 bg-white rounded-md ">Tu carrito es vacío.</p>
       )}
      </ul>
     </div>
     {cart && cart.length > 0 && (
      <div className="absolute bottom-0 left-0 w-full px-10 pt-2 pb-5 bg-gray-100 md:p-5 ">
       <button className=' text-gray-500 hover:text-gray-900' onClick={handleClearCart}>Limpiar carrito</button>
       <div className="flex items-center justify-between py-4">
        <h3 className="text-xl">Subtotal</h3>
        <p className="text-2xl font-semibold">S/.{getSubtotal()}</p>
       </div>
       {/* <Link href="/checkout"> */}
       <CheckoutButton />
       {/* </Link> */}
       <p className="pt-2 leading-5 ">*Los impuestos y el envío serán calculados al momento del pago</p>
      </div>
     )}
    </motion.section>
   )}
  </AnimatePresence>
 );
};

export default MiniCart;