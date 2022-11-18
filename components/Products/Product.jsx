import Link from "next/link";
import Image from "next/image";
import AddToCart from "../Buttons/AddToCart";

const Product = ({ product }) => {
  const { title, handle, images, priceRange, variants } = product;
  const { transformedSrc, altText } = images.edges[0].node;
  const variantId = variants.edges[0].node.id
  const amount = priceRange.minVariantPrice.amount.slice(0, -2);

  const productProps = {
    title, handle, transformedSrc, amount, variantId
  }
  return (
    <div className="flex flex-col gap-4">
      <Link href={`/products/${handle}`}>
        <a className="group">
          <div className="w-full aspect-[4/3]   rounded-lg  group-hover:opacity-75 shadow">
            <figure style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                layout="fill"
                objectFit="contain"
                className="object-cover object-center group-hover:opacity-75"
                src={transformedSrc}
                alt={`Foto de ${title}`}
                title={title}
              />
            </figure>
          </div>
          <h3 className="mt-4 text-sm text-gray-700"></h3>
          <div className="flex justify-between items-center">
            <p className="mt-1 text-lg font-medium text-gray-900 leading-5">{title}</p>
            <p className=" text-base font-medium text-gray-600 pl-2">S/.{amount}</p>
          </div>
        </a>
      </Link>
      <AddToCart {...productProps} />
    </div>
  );
};

export default Product;
