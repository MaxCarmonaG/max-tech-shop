import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

import './cart-widget.styles.scss';

const CartWidget = () => (
    <div className="bag-icon__container">
        <ShoppingBagIcon className="bag-icon"/>
    </div>
);

export default CartWidget;