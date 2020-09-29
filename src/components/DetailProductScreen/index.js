//  @Package
import React from "react";
import { useParams } from "react-router-dom";
//  @Own
import { useFetch } from "../../hooks/useFetch";
import { Spinner } from "../Spinner/index";
import { URL_ML_API } from "../../assets/constants";

export const DetailProductScreen = () => {
  // Leer el id del producto de la url
  const { productId } = useParams();
  const url = `${URL_ML_API}${productId}`;
  const { loading, data } = useFetch(url);

  let { item, description } = !!data && data;
  let { title, price, picture, condition, free_shipping, sold_quantity } =
    !!item && item;

  document.title = !title ? "Loading..." : title;

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <img src={picture} alt="product" />
          <p>{price.amount}</p>
          <button>COMPRAR</button>
          <p>{description}</p>
          {(title, price, picture, condition, free_shipping, sold_quantity)}
        </div>
      )}
    </div>
  );
};
