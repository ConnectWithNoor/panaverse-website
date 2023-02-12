import React, { Children } from 'react';

type Props = {
  children: React.ReactNode;
  className: string;
};

function Button({ children, className }: Props) {
  return <a className={className}>{children}</a>;
}

export default Button;
