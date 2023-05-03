import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <>
      <span className="color-red-400 fixed top-1/3 left-0 right-0 items-center justify-center align-middle">
        <h1 id="errorMSG" className="text-5xl mb-3">Essa é a página de contato</h1>
        <h2 id="errorMSG" className="text-3xl mt-3">Instagram: @atelierternaarte</h2>
        <h2 id="errorMSG" className="text-3xl mt-3">Whatsapp: +55 (11) 94228-5121</h2>
      </span>
    </>
  );
};

export default ContactPage;
