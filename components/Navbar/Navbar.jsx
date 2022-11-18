import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import menuItems from "../../src/menus/menu";
import { useEffect } from "react";
import logo from "../../src/images/konbini-otaku-logo.svg";
import { GrMenu } from "react-icons/gr"
import CartIcon from "../MiniCart/CartIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full  z-30">
      <nav className="flex justify-between px-4 py-4 items-center text-sm md:text-base mx-auto container  ">
        <Link href="/" passHref>
          <div className="w-[70px] h-[50px]">
            <figure style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                layout="fill"
                objectFit="contain"
                className="object-cover object-center "
                src={logo}
                alt={`Logo de konbini otaku`}
              />
            </figure>
          </div>
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/" passHref><a className="text-lg font-medium hover:font-semibold transition-all">Home</a></Link>
          <CartIcon className="hover:text-gray-400" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
