import { Button as ReactButton } from "react-aria-components";

interface IButton {
  text: string;
}

export const Button = ({ text }: IButton) => {
  return <>{text && <ReactButton>{text}</ReactButton>}</>;
};
