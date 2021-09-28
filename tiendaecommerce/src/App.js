import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <ItemListContainer></ItemListContainer>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
