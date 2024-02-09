import React from 'react';
import DisplayBox from '../components/DisplayBox';
import familyImg from '../images/familia.jpeg'

const AboutPage: React.FC = () => {
  return (
    <>
      <DisplayBox>
        <main>
          <h1 className='text-5xl font-semibold mb-10'>Sobre nós</h1>
          <section className='flex align-middle'>
            <img src={familyImg} alt="family-picture" className='terna-arte-gradient rounded-3xl h-96 mr-4'/>
            <span className='text-lg text-left ml-4 indent-12'>
              <p className='mt-2'>Em Junho de 2019 descobri um problema de coluna que limitou meus movimentos, meu trabalho era 90% em pé e isso me afetou profundamente.</p>
              <p className='mt-2'>Mas Deus nunca nos deixa em sofrimento sem que tenha pra nós um caminho melhor, me descobri em uma nova profissão.</p>
              <p className='mt-2'>Ele me trouxe a memória de tudo aquilo que ele é. Puro amor e bondade, e me presenteou com um novo dom, o de ser artesã. E assim comecei, primeiras peças de um curso de bonecas, depois outros cursos e então o ateliê terna arte ganhou notoriedade, encantando clientes e apaixonados pelo artesanato.</p>
              <p className='mt-2'>Hoje, somos uma grife de artes feitas à mão com o objetivo de materializar o seu sonho! ❤️</p>
            </span>
          </section>

        </main>
      </DisplayBox>
    </>
  );
};

export default AboutPage;
