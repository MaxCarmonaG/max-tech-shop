import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import { StoreContext } from '../../providers/store.provider';

import './item-count.styles.scss';


const ItemCount = ({ stock, item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { addToCart, cartItems } = useContext(StoreContext);
    const history = useHistory();
    
    return (
        <div className="item-count__container">
            <div className="item-count__header">
                <div className="item-count__counter">
                    <button
                        className="item-count__control"
                        onClick={()=> setItemCount(itemCount - 1)}
                        disabled={!itemCount}
                    >
                        &#8722;
                    </button>
                    <span>{itemCount}</span>
                    <button
                        className="item-count__control"
                        onClick={()=>setItemCount(itemCount + 1)}
                        disabled={itemCount === stock}
                    >
                        +
                    </button>
                </div>
            </div>
            <CustomButton
                onClick={() => {
                    alert(`Added ${ itemCount>1 ? itemCount + ' items' : 'an item' } to cart`);
                    return addToCart({ ...item, qty: itemCount });
                }}
                disabled={!itemCount}
            >
                Add to cart
            </CustomButton>
            <CustomButton onClick={()=>history.push('/cart')} disabled={!cartItems.length}>
                Go to cart
            </CustomButton>
        </div>
    );
};

export default ItemCount;