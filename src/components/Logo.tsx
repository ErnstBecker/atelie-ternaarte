import LogoImg from '../assets/ternaarte.png'

interface LogoProps {
  // children?: React.ReactNode;
  classAdd?: string;
}

const Logo = ({classAdd}:LogoProps) : JSX.Element => {
  return (
    <>
      <a href='/' className='relative -top-16 {classAdd}'>
        <img className="border-[4px] rounded-full border-[#baf5fd] w-40" src={LogoImg} alt="LogoImage" />
      </a>
    </>
  );
};

export default Logo;
