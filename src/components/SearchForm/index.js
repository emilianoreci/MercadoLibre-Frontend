//  @Package
import React from "react";
import { useHistory } from "react-router-dom";
//  @Own
import { useForm } from "../../hooks/useForm";
import "./style.css";

export const SearchForm = () => {
  const [formLoginValues, handleSearchInputChange, reset] = useForm({
    inputText: "",
  });

  //const dispatch = useDispatch();
  const { inputText } = formLoginValues;
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.length < 2) {
      return alert("escribi en buscador");
    }
    history.push(`/items?q=${inputText}`);
    //const url = `https://mercadolibre-backend.herokuapp.com/items?search=${inputText}`;
    //const { loading, data } = useFetch(url);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="containerInput">
      <input
        type="text"
        name="inputText"
        className="form-control col-sm-6 inputText"
        placeholder="Nunca dejes de buscar"
        value={inputText}
        onChange={handleSearchInputChange}
      />
      <button className="btn btn-light">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};
