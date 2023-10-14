import { useContador } from "../../CustomHooks/useContador"
import { useFetch } from "../../CustomHooks/useFetch";

const Hooks = () => {

    const {contador, incrementar, decrementar} = useContador(1, 10);

    const data = useFetch("https://jsonplaceholder.typicode.com/users");



    return (
    <>
        <h2>Contador con CustomHooks</h2>
        <button onClick={incrementar}> + </button>
        <p> {contador} </p>
        <button onClick={decrementar}> - </button>

        {data && data.map(item => <p key={item.id}>Nombre: {item.name} </p>)}
    </>
  )
}

export default Hooks