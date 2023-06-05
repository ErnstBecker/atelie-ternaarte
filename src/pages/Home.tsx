import React from 'react';
import DisplayBox from '../components/DisplayBox';

const HomePage: React.FC = () => {
  return (
    <>
    <DisplayBox>
      <h1 className="text-5xl mb-3">Sejam todos muito bem-vindos ao <b className=''>Ateliê Terna Arte</b>!</h1>
      <br />
      <div>
        <p className='text-lg'>Um universo encantado de criatividade e amor! Aqui, no nosso cantinho especial, queremos compartilhar com vocês o que mais nos inspira: a criação de peças únicas e cheias de significado.</p>
        <p className='text-lg'>Navegue pelo nosso site e encante-se com a variedade de produtos artesanais que temos a oferecer. Aqui estamos prontos para transformar suas expectativas em realidade.</p>
        <p className='text-lg'>Aqui no nosso cantinho, cada detalhe é feito com amor, e cada peça carrega consigo uma história única. Junte-se a nós nessa jornada mágica e descubra o prazer de ter um artesanato que ultrapassa o comum e faz parte de momentos especiais.</p>
        <p className='text-lg'>Estamos ansiosos para encantar você!</p>
        <p className='text-lg'>Com carinho, Ateliê Terna Arte &#10084;&#65039;</p>
      </div>
    </DisplayBox>
    </>
  );
};

export default HomePage;
