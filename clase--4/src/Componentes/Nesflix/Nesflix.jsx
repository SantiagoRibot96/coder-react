import { useState, useEffect } from 'react';
import './Nesflix.css'

const Nesflix = () => {
  const [peliculas, setPeliculas] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  const MI_KEY = "c9f04fa4";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
      .then(respuesta => respuesta.json())
      .then(data => setPeliculas(data.Search))
      .catch(error => console.log("Vamos a morir! " + error))
  }, [busqueda]);

  const handlerSubmit = (event) => {
    event.preventDefault();
    setBusqueda(event.target.busqueda.value);
    event.target.busqueda.value = "";
  }

  return (
    <>
      <h1>Nesflix</h1>

      <form onSubmit={handlerSubmit}>
        <input type="text" name="busqueda"/>
        <button type="submit">Buscar</button>
      </form>

      <ul>
        {
          peliculas === undefined
            ? <h2>La pelicula no esta disponible en nuestra base de datos</h2>
            : peliculas.map(item => (
                <li key={item.imdbID}>
                  <img src={item.Poster}/>
                  <p> {item.Title} </p>
                </li>
              ))
        }
      </ul>
    </>
  )
}

export default Nesflix