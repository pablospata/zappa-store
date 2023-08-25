import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import './main.css';

const App = () => {
  return (
    <>      
      <NavBar/>
      <ItemListContainer greetings={"Bienvenidos a la mejor Tiende de Zapatos y Zapatillas"}/>
    </>
  )
}

export default App