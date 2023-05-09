import React from 'react';
import { Link } from 'react-router-dom';

interface NormalButtonProps {
  children: React.ReactNode;
  className?: string; // optional className prop
}

const NormalButton = ({ children, className }: NormalButtonProps): JSX.Element => {
  return (
    <button className={`hover:text-red-1300 cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

interface ToLinkProps {
  page: string;
  text: string;
  className?: string; // optional className prop
  classParent?: string; // optional className for parent
}

export const ToLink = ({ page, text, className, classParent }: ToLinkProps): JSX.Element => {
  return (
    <NormalButton className={classParent} >
      <Link className={className} to={`${page}`}>{text}</Link>
    </NormalButton>
  );
};

interface HrefLinkProps {
  page: string;
  text: string;
  className?: string; // optional className prop
  classParent?: string; // optional className for parent
}

export const HrefLink = ({ page, text, className, classParent }: HrefLinkProps): JSX.Element => {
  return (
    <NormalButton className={classParent}>
      <a className={className} href={`${page}`}>{text}</a>
    </NormalButton>
  );
};

export default NormalButton;
