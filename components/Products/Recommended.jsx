import Link from "next/link";
import Product from "./Product";

const Recommended = ({ products }) => {
 return (
  <section className="max-w-2xl py-10 px-4 pb-16 mx-auto sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-6">
   <div className="flex gap-2 items-center w-full justify-between">
    <h2 className="text-xl text-start font-bold ">Productos relacionados</h2>
    <Link href="/#catalog" passHref><a>Ver todos →</a></Link>
   </div>
   <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4">
    {products ? (
     products.map((item) => {
      const id = item.node.id;
      const product = item.node;
      return <Product key={id} product={product} />;
     })
    ) : (
     <div>No se pudo fetchear</div>
    )}
   </div>
  </section>
 );
}

export default Recommended;