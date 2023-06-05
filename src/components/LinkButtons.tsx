import React from 'react';
import { Link } from 'react-router-dom';

// * Default button style and props
interface NormalButtonProps {
  children: React.ReactNode;
  className?: string;
}

const NormalButton = ({ children, className }: NormalButtonProps): JSX.Element => {
  return (
    <button className={`hover:text-red-1300 cursor-pointer m-0 p-0 ${className}`}>
      {children}
    </button>
  );
};

// * Anchor for websites from within
interface ToLinkProps {
  page: string;
  children: React.ReactNode;
  className?: string;
  classParent?: string;
}

export const ToLink = ({ page, children, className, classParent }: ToLinkProps): JSX.Element => {
  return (
    <NormalButton className={classParent} >
      <Link className={`m-0 p-0 ${className}`} to={`${page}`}>{children}</Link>
    </NormalButton>
  );
};

// * Anchor for outside sites
interface HrefLinkProps {
  page: string;
  children: React.ReactNode;
  className?: string;
  classParent?: string;
}

export const HrefLink = ({ page, children, className, classParent }: HrefLinkProps): JSX.Element => {
  return (
    <NormalButton className={classParent}>
      <a className={`m-0 p-0 ${className}`} target="_blank" href={`${page}`}>
        {children}
      </a>
    </NormalButton>
  );
};

export default NormalButton;
