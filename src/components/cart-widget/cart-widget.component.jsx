import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import { StoreContext } from '../../providers/store.provider';
import CartWidgetItem from '../cart-widget-item/cart-widget-item.component';

import './cart-widget.styles.scss';

const CartWidget = () => {
    
    const history = useHistory();
    const { cartItems } = useContext(StoreContext);

    return(
        <div className="cart-widget__container">
            <div className="cart-widget__items">
                {
                    cartItems.map(({ id, ...props }) => <CartWidgetItem key={id} { ...props }/>)
                }
            </div>
            <CustomButton onClick={() => history.push('/cart')}>
                Go to cart
            </CustomButton>
        </div>
    )
};

export default CartWidget;