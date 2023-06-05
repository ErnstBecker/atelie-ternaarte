import { HrefLink } from "./LinkButtons";
// import NormalButton from "./LinkButtons";
import whatsappIcon from "../images/whatsapp.png"
import facebookIcon from "../images/facebook.png"
import instagramIcon from "../images/instagram.png"

interface SocialIconProps{
  children?: React.ReactNode;
  className?: string;
}

const SocialIcon = ({children}:SocialIconProps) : JSX.Element => {
  return (
    <>
      {children}
    </>
  );
};

export const InstagramIcon = () : JSX.Element => {
  return (
    <>
      <HrefLink page="https://www.instagram.com/atelieternaarte/">
        <img src={instagramIcon} alt="" className="h-20 black-lines instagram"/>
      </HrefLink>
    </>
  );
};

export const FacebookIcon = () : JSX.Element => {
  return (
    <>
      <HrefLink page="https://www.facebook.com/atelieternaarte/">
        <img src={facebookIcon} alt="" className="h-20 black-lines facebook" />
      </HrefLink>
    </>
  );
};


export const WhatsAppIcon = () : JSX.Element => {
  return (
    <>
      <HrefLink page="https://api.whatsapp.com/send?1=pt_BR&phone=5511942285121">
        <img src={whatsappIcon} alt="" className="h-20 black-lines whatsapp"/>
      </HrefLink>
    </>
  );
};

export default SocialIcon;
