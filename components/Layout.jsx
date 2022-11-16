import Head from "next/head";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer.jsx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Layout = ({ children, title, description }) => {
  const pageTitle = title ? `${title} | Konbini otaku` : "Konbini Otaku";
  const pageDescription = description || "La tienda Oficial de Estación Otaku";
  const [showBar, setShowBar] = useState(true)
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <meta name="description" content={pageDescription}></meta>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {showBar && <div className="fixed bottom-0 left-0 w-full px-8 py-4 bg-indigo-800 text-white flex justify-between items-center"><p>This project was made by <span className="font-bold">Diego Huaman</span> with Shopify StoreFront API, GraphQL and Next.js</p> <AiOutlineClose className="cursor-pointer text-2xl" onClick={() => setShowBar(false)} /> </div>}
    </>
  );
};

export default Layout;
