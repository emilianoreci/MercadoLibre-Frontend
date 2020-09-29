//  @Package
import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      //cuando se desmonta el componente seteo en false isMounted
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    //este setState es para que me muestre el loading entre cada peticion.
    setState({
      loading: true,
      data: null,
      error: null,
    });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //sin la condicion, si la peticion por ej tarda y el usuario cambia a otro componente, cuando responda el servidor, arrojaria un error. Este seria un ejemplo de uso real de useRef()
        if (isMounted.current) {
          setState({
            //...state,
            loading: false,
            data,
            error: null,
          });
        }
      })
      .catch(() => {
        setState({
          loading: false,
          error: "No se pudo cargar la info",
          data: null,
        });
      });
  }, [url]);

  return state;
};
