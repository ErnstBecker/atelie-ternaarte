import { ToLink } from './LinkButtons';
import Logo from './Logo';

const Navbar = (): JSX.Element => {
  return (
    // TODO: Delete this
    <>
    {/* <nav className='fixed flex top-10 justify-center h-20  z-50 align-middle
      terna-arte-gradient rounded-full'>
      <ul className='relative top-1/3 flex font-semibold gap-32'>
          <li className='pl-2 ml-4 navbarListsHover'><ToLink page="/galeria">GALERIA</ToLink></li>
          <li className=''><ToLink page="/redes"><p>REDES</p></ToLink></li>
          <Logo />
          <li className=''><ToLink page="/contato">CONTATO</ToLink></li>
          <li className='pr-2 mr-4'><ToLink page="/sobre">SOBRE</ToLink></li>
      </ul>
    </nav> */}

    <nav className='fixed flex top-16 justify-center h-20 w-[1222.5px] z-50 terna-arte-gradient rounded-full'>
      <ul className='relative top-1/3 flex font-semibold gap-32'>
          <li className='pl-2 ml-4'><ToLink page="/galeria">GALERIA</ToLink></li>
          <li className=''><ToLink page="/faq"><p>FAQ</p></ToLink></li>
          <Logo />
          <li className=''><ToLink page="/contato">CONTATO</ToLink></li>
          <li className='pr-2 mr-4'><ToLink page="/sobre">SOBRE</ToLink></li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
