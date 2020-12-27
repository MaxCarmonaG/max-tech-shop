import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/navbar/navbar.component';
import Home from './containers/home/home.container';
import CategoryList from './containers/category-list/category-list.container';

import './App.css';

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/categories" component={CategoryList}/>
          <Route path="/categories/:categoryName" component={CategoryList}/>
        </Switch>
    </BrowserRouter>
  );
};

export default App;