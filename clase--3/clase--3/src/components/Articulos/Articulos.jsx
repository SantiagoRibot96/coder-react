import './Articulos.css'

const Articulos = ({img, titulo, children}) => {
  return (
    <article>
        <img src={img} alt={titulo} />
        <h2> {titulo} </h2>
        {children}
        <button> Leer Articulo </button>
    </article>
  )
}

export default Articulos