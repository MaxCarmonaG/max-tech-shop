import NavBar from './components/navbar/navbar.component';
import Directory from './components/directory/directory.component';

import SHOP_DATA from './providers/shop.data';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <Directory collections={ SHOP_DATA }/>
    </div>
  );
};

export default App;