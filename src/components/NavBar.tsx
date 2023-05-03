import { ToLink } from './LinkButtons';
import Logo from './Logo';

interface Navbar{
  name?: string;
}

const Navbar = (): JSX.Element => {
  return (
    <>
      <nav className='relative flex top-10 justify-center  h-20 z-50 align-middle
       border-[4px] border-[#baf5fd] bg-[#fbdeda] text-[#202020] rounded-full '>
        <ul className='relative top-1/3 flex font-normal m-auto gap-32'>
            <li className='pl-2'><ToLink page="/produtos" text='PRODUTOS'/></li>
            <li className=''><ToLink page="/redes" text='REDES'/></li>
            <Logo />
            <li className=''><ToLink page="/contato" text='CONTATO'/></li>
            <li className='pl-2'><ToLink page="/sobre" text='SOBRE'/></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
