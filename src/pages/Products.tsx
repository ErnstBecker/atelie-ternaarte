import React from 'react';

const ProductsPage: React.FC = () => {
  return (
    <>
      <span className="color-red-400 fixed top-1/3 left-0 right-0 items-center justify-center align-middle">
        <h1 id="errorMSG" className="text-5xl mb-3">Essa é a página de produtos</h1>
        <h2 id="errorMSG" className="text-3xl mt-3">Brasileiro: R$45,00</h2>
        <h2 id="errorMSG" className="text-3xl mt-3">Gringo: R$250,00</h2>
        <h3 id="errorMSG" className="text-1xl mt-3">Para grindo é mais caro!</h3>
      </span>
    </>
  );
};

export default ProductsPage;
