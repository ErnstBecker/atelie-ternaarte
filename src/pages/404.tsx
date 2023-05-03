// import error from '../images/error_img.png';

const NotFoundPage: React.FC = () => {
  return (
    <>
    <span className="flex items-center justify-center align-middle h-screen bg-bgMissing" style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}>
      <div className='text-red-1300'>
        {/* <img className="w-96 animate-bounce" src={error} alt="imagem"/> */}
        <h1 id="errorMSG" className="text-5xl mb-3">Erro 404</h1>
        <h1 id="errorMSG" className="text-5xl mb-3">Erro 404</h1>
        <h2 id="errorMSG" className="text-5xl mt-3">Página não encontrada</h2>
      </div>
    </span>
    </>
  );
};

export default NotFoundPage;
