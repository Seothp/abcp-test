import React from "react";

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ onClick }: IButtonProps): JSX.Element {
  return (
    <button type="button" onClick={onClick}>
      get random user
    </button>
  );
}
