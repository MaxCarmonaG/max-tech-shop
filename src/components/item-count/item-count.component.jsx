import { useState } from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { addItem, removeItem } from '../../providers/utils';

import './item-count.styles.scss';


const ItemCount = ({ title }) => {
    const [itemCount, setItemCount] = useState(
        {
            current: 0,
            stock: 5
        }
    );

    return (
        <div className="item-count__container">
            <div className="item-count__header">
                <span className="item-count__title">{title}</span>
                <div className="item-count__counter">
                    <button
                        className="item-count__control"
                        onClick={()=> setItemCount(removeItem(itemCount))}
                        disabled={!itemCount.current}
                    >
                        &#8722;
                    </button>
                    <span>{itemCount.current}</span>
                    <button
                        className="item-count__control"
                        onClick={()=>setItemCount(addItem(itemCount))}
                        disabled={itemCount.current === itemCount.stock}
                    >
                        +
                    </button>
                </div>
            </div>
            <CustomButton
                onClick={() => alert(`Added ${ itemCount.current>1 ? itemCount.current + ' items' : 'an item' } to cart`)}
                disabled={!itemCount.current}
            >
                Add to cart
            </CustomButton>
        </div>
    );
};

export default ItemCount;