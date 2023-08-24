import { useState } from "react";
import ComponenteA from "./components/ComponenteA";

const App = () => {

  const [nombre, setNombre] = useState('Coder')
  const [contador, setContador] = useState(0)

  const curso = 'React';
  const comision = 55750;

  const coder = () => {
    console.log('Coderhouse')
  }

  const tomarValor = (valor) => {
    console.log(valor);
  }

  return (
    <>
      <h3>{nombre}</h3>
      <button onClick={() => setNombre('House')} >Cambiar estado</button>

      <h2>{contador}</h2>
      <button onClick={() => { setContador(contador + 1) }}>Contar</button>
      <ComponenteA
        curso={curso}
        comision={comision}
        coder={coder}
        tomarValor={tomarValor}
      />
    </>
  )
}

export default App