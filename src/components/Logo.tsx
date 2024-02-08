import LogoImg from '../assets/ternaarte.png'

const Logo = () : JSX.Element => {
  return (
    <>
      <a href='/' className='relative -top-16 '>
        <img className="w-40 logo" src={LogoImg} alt="LogoImage" />
      </a>
    </>
  );
};

export default Logo;
