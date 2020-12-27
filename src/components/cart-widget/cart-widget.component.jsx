import CustomButton from '../custom-button/custom-button.component';

import './cart-widget.styles.scss';

const CartWidget = () => (
    <div className="cart-widget__container">
        <div className="cart-widget__items">
            <span className="cart-widget__empty">The cart is empty</span>
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
);

export default CartWidget;