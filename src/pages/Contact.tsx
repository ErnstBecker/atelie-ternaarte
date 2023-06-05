import React from 'react';
import DisplayBox from '../components/DisplayBox';
import {InstagramIcon, FacebookIcon, WhatsAppIcon} from '../components/SocialIcon'

const ContactPage: React.FC = () => {
  return (
    <>
    <DisplayBox>
      <h1 className="text-5xl mb-6">Você pode entrar em contato comigo:</h1>
      <h2 className="text-3xl mt-6 mb-4"><b>Redes Sociais</b></h2>
      <ul className='flex gap-24 justify-center mb-6'>
        <li>
          <h3 className="text-2xl mt-3">Instagram:</h3>
          <p className='text-xl'><b>@atelieternaarte</b></p>
        </li>
        <li>
          <h3 className="text-2xl mt-3">Facebook:</h3>
          <p className='text-xl'><b>@atelieternaarte</b></p>
        </li>
        <li>
          <h3 className="text-2xl mt-3">WhatsApp:</h3>
          <p className='text-xl'><b>+55 (11) 94228-5121</b></p>
          </li>
      </ul>
      <h2 className='text-3xl mt-6'>Ou clique nos <b>ícones</b> abaixo para acessar de maneira mais rápida</h2>
      <div className='space-x-20 mt-10'>
        <InstagramIcon></InstagramIcon>
        <FacebookIcon></FacebookIcon>
        <WhatsAppIcon></WhatsAppIcon>
      </div>
    </DisplayBox>
    </>
  );
};

export default ContactPage;
