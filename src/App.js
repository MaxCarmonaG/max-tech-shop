import NavBar from './components/navbar/navbar.component';
import ItemList from './containers/item-list/item-list.container';
import ItemDetailContainer from './containers/item-detail/item-detail.container';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemList/>
      <ItemDetailContainer/>
    </div>
  );
};

export default App;