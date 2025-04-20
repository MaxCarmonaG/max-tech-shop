import { Routes, Route } from 'react-router';
import NavBar from '@/components/Navbar/Navbar';
import Home from '@/pages/Home';
import Categories from './pages/Categories';
import Category from './pages/Category/Category';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout/Checkout';
//import { addCollectionsAndDocuments } from './firebase/firebase.utils';
//import { ITEMS_DATA } from './providers/shop.data';
import NotFound from '@/components/NotFound';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/:category" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
