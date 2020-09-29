//  @Package
import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
//  @Own
import { useFetch } from "../../hooks/useFetch";
import { ItemList } from "../ItemList";
import { Spinner } from "../Spinner/index";
import { URL_ML_API } from "../../assets/constants";
import "./style.css";

export const ProductsListScreen = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  document.title = `${q.charAt(0).toUpperCase() + q.slice(1)} en Mercado Libre`;

  let url = null;
  //console.log(!!q);
  !!q ? (url = `${URL_ML_API}?search=${q}`) : (url = `${URL_ML_API}`);

  //const url = `${URL_ML_API}?search=${q}`;
  const { loading, data } = useFetch(url);

  let { items, author } = !!data && data;
  localStorage.setItem("author", JSON.stringify(author));

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container-itemList">
          {items.map(({ id, picture, title, price }) => (
            <ItemList
              key={id}
              picture={picture}
              title={title}
              price={price}
              id={id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
