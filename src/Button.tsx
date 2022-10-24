import { FC } from "react";
type ButtonProos = {
  onClick: () => void;
};
const Button: FC<ButtonProos> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} type="button">
        loadMore
      </button>
    </>
  );
};

export { Button };
