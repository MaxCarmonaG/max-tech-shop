import { ReactComponent as Logo } from '../../assets/max-tech-shop-icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg';

import CartWidget from '../cart-widget/cart-widget.component';

import './navbar.styles.scss';

const NavBar = () => (
    <nav className="nav-bar__container">
        <div className="nav-bar__brand-container">
            <Logo className="logo"/>
        </div>
        <div className="nav-bar__items-container">
            <CartWidget/>
            <div className="nav-bar__categories-container">
                <span className="nav-bar__categories-menu">Categories</span>
                <ul className="nav-bar__categories-options">
                    <li><a href="/">Video Games</a></li>
                    <li><a href="/">Computers</a></li>
                    <li><a href="/">Peripherals</a></li>
                    <li><a href="/">Audio & TV</a></li>
                </ul>
                <div className="nav-bar__menu-icon">
                    <MenuIcon/>
                </div>
            </div>
        </div>
    </nav>
);

export default NavBar;