// import React from "react";

// type Props = {
//   btnText: string;
// };

// const Button = (props: Props) => {
//   const { btnText } = props;
//   return <button>{btnText}</button>;
// };

// export default Button;

// Interface Type Props

import React from "react";

interface ButtonProps {
  btnText: string;
  //   onClick?: () => void;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { btnText, onClick } = props;
  return <button onClick={onClick}>{btnText}</button>;
};

export default Button;
