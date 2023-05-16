import type React from 'react';

type Props = React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
