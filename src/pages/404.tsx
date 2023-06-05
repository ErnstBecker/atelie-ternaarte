import DisplayBox from "../components/DisplayBox";
import ErrorIMG from '../images/cuteError.png'
import { ToLink } from "../components/LinkButtons";

const NotFoundPage: React.FC = () => {
  return (
    <>
    <DisplayBox className="flex flex-col items-center justify-center ">
      <h1 className="text-5xl"><b>Erro 404</b></h1>
      <img src={ErrorIMG} alt="Cute Error Image" className="my-4 mx-auto w-60"/>
      <p className="text-3xl"><b>Página não encontrada.</b></p>
      <p className="text-2xl mt-2">Ops! Parece que você se perdeu.</p>
      <p className="text-2xl">Volte para a segurança do nosso site&nbsp;
        <ToLink className="text-blue-400 underline" page="/">clicando aqui.</ToLink>
      </p>
    </DisplayBox>
    </>
  );
};

export default NotFoundPage;
