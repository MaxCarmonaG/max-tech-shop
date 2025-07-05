import { Routes, Route } from 'react-router';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import Categories from '@/pages/Categories';
import Category from '@/pages/Category';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import NotFound from '@/components/NotFound';
import ItemDetail from '@/pages/ItemDetail';
import Layout from './ui/Layout/Layout';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path="cart" element={<Cart />} />
          <Route path="categories" element={<Categories />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path=":category" element={<Category />}>
            <Route path=":id" element={<ItemDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
