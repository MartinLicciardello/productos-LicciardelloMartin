import './App.css';

// import Item from './components/CardListComponent/Item';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

// const blueColor = "blue";


function App() {
  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer/>
      {/* <Item/> */}
    </div>
  );
}

export default App;
