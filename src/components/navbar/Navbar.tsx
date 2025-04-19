import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/max-tech-shop-icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg';

import ShoppingBag from '../shopping-bag/shopping-bag.component';
import CartWidget from '../cart-widget/cart-widget.component';

import { StoreContext } from '../../providers/StoreProvider';

import './navbar.styles.scss';

const NavBar = () => {
  const { display, toggleDisplay, cartItems } = useContext(StoreContext);

  return (
    <nav className="nav-bar__container">
      <Link to="/" className="nav-bar__brand-container">
        <Logo className="logo" />
      </Link>
      <div className="nav-bar__items-container">
        <div
          className="nav-bar__cart-widget"
          onClick={() => !!cartItems.length && toggleDisplay()}
        >
          <ShoppingBag />
          {display && <CartWidget />}
        </div>
        <div className="nav-bar__categories-container">
          <Link to="/categories" className="nav-bar__categories-menu">
            Categories
          </Link>
          <ul className="nav-bar__categories-options">
            <li>
              <Link to="/gaming">Video Games</Link>
            </li>
            <li>
              <Link to="/computers">Computers</Link>
            </li>
            <li>
              <Link to="/peripherals">Peripherals</Link>
            </li>
            <li>
              <Link to="/audioTv">Audio & TV</Link>
            </li>
          </ul>
          <div className="nav-bar__menu-icon">
            <MenuIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
