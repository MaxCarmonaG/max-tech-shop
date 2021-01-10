import { useContext } from 'react';

import { StoreContext } from '../../providers/store.provider';

import './cart-item.styles.scss';

const CartItem = ({ item }) => {
    const { name, description, imageUrl, qty, price } = item;
    const { add, remove, clear } = useContext(StoreContext);
    return (
        <div className="cart-item__container">
            <div className="cart-item__product">
                <img className="cart-item__img" src={imageUrl} alt={name}/>
                <span>{name}</span>
            </div>
            <span className="cart-item__description">{description}</span>
            <div className="cart-item__quantity">
                <div className="cart-item__control" onClick={()=>remove(item)}>&#10094;</div>
                <span>{qty}</span>
                <div className="cart-item__control" onClick={()=>add(item)}>&#10095;</div>
            </div>
            <span>$ {price}</span>
            <div className="cart-item__clear" onClick={()=>clear(item)}>&#10005;</div>
        </div>
    );
};
export default CartItem;