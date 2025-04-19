import { useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import CartItem from '../../components/cart-item/cart-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { StoreContext } from '../../providers/store.provider';

import './cart.styles.scss';

const Cart = () => {
    
    const { cartItems, cartTotal } = useContext(StoreContext);
    const history = useHistory();
    if(!cartItems.length) return <Redirect to='/'/>
    return (
        <div className="cart__container">
            <div className="cart__grid">
                <div className="cart__block">
                    <span>Product</span>
                    <span>Description</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Remove</span>
                </div>
                {
                    cartItems.length ?
                    cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <div className="cart__empty">NO ITEMS TO DISPLAY</div>
                }
                <div className="cart__total">
                    Total : $ {cartTotal}
                </div>
            </div>
            <div className="cart__button">
                <CustomButton onClick={()=>history.push('/checkout')}>Go to checkout</CustomButton>
            </div>
        </div>
    )
};

export default Cart;