import { useContext } from 'react';
import { Link } from 'react-router';

import Logo from '@/assets/max-tech-shop-icon.svg?react';
import MenuIcon from '@/assets/menu-icon.svg?react';

import ShoppingBag from '@/components/ShoppingBag';
import CartWidget from '@/components/CartWidget';

import { StoreContext } from '@/providers';

import styles from './Header.module.scss';
import Container from '@/ui/Container';

const Header = () => {
  const { display, toggleDisplay, cartItems } = useContext(StoreContext);

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <div
            className={styles.cart}
            onClick={() => !!cartItems.length && toggleDisplay()}
          >
            <ShoppingBag />
            {display && <CartWidget />}
          </div>
          <div className={styles.menu}>
            <Link to="/categories" className={styles.categories}>
              Categories
            </Link>
            <ul className={styles.links}>
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
            <div className={styles.hamburger}>
              <MenuIcon />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
