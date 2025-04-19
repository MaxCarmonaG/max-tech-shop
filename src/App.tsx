import { Routes, Route } from 'react-router';
import NavBar from '@/components/Navbar/Navbar';
import Home from '@/pages/Home';
import CategoryList from './pages/Categories/Categories';
import Category from './pages/category/category.container';
import NoMatchPage from './components/no-match-page/no-match-page.component';
import Cart from './pages/cart/cart.container';
import Checkout from './pages/checkout/checkout.container';
//import { addCollectionsAndDocuments } from './firebase/firebase.utils';
//import { ITEMS_DATA } from './providers/shop.data';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/:item" element={<Category />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </>
  );
}

export default App;
