import React from "react";
import { useHistory } from "react-router-dom";

export const Page404Screen = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      Parece que no existe ese producto
      <button onClick={handleClick}>volver</button>
    </div>
  );
};
