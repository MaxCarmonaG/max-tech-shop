import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/navbar/navbar.component';
import Home from './containers/home/home.container';
import CategoryList from './containers/category-list/category-list.container';
import NoMatchPage from './components/no-match-page/no-match-page.component';
import Checkout from './containers/checkout/checkout.container';

import './App.css';

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/categories" component={CategoryList}/>
          <Route path="/categories/:categoryName" component={CategoryList}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="*" component={NoMatchPage}/>
        </Switch>
    </BrowserRouter>
  );
};

export default App;