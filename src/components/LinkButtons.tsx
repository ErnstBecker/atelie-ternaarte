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
  classAdd?: string;
}

export const ToLink = ({ page, text, className, classAdd }: ToLinkProps): JSX.Element => {
  return (
    <NormalButton className={classAdd} >
      <Link className={className} to={`${page}`}>{text}</Link>
    </NormalButton>
  );
};

interface HrefLinkProps {
  page: string;
  text: string;
  className?: string; // optional className prop
}

export const HrefLink = ({ page, text, className }: HrefLinkProps): JSX.Element => {
  return (
    <NormalButton >
      <a className={className} href={`${page}`}>{text}</a>
    </NormalButton>
  );
};

export default NormalButton;
