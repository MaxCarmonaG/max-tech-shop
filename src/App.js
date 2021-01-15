//import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import StoreProvider from './providers/store.provider';

import NavBar from './components/navbar/navbar.component';
import Home from './containers/home/home.container';
import CategoryList from './containers/category-list/category-list.container';
import Category from './containers/category/category.container';
import NoMatchPage from './components/no-match-page/no-match-page.component';
import Cart from './containers/cart/cart.container';
//import { addCollectionsAndDocuments } from './firebase/firebase.utils';
//import { ITEMS_DATA } from './providers/shop.data';
import './App.css';

function App() {
  
  /*useEffect(() => {
    addCollectionsAndDocuments('items', ITEMS_DATA);
  }, [])*/
  
  return (
    <BrowserRouter>
      <StoreProvider>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/categories" component={CategoryList}/>
          <Route exact path="/cart" component={Cart}/>
          <Route path="/:item" component={Category}/>
          <Route path="*" component={NoMatchPage}/>
        </Switch>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;