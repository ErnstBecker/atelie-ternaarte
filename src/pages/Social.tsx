import React from 'react';

const SocialPage: React.FC = () => {
  return (
    <>
     <span className="color-red-400 fixed top-1/3 left-0 right-0 items-center justify-center align-middle">
        <h1 className="text-5xl mb-3">Essa é a página de redes</h1>
        <h2 className="text-4xl mt-3">Coisa que não sei oq colocar</h2>
        <span className='align-middle justify-center flex rotate-90'>
          <p className='text-6xl mt-20 animate-[bounce_4s_linear_infinite]'>:</p>
          <p className='text-6xl mt-20 animate-[spin_8s_ease-in-out_infinite]'>)</p>
        </span>
    </span>
    </>
  );
};

export default SocialPage;
