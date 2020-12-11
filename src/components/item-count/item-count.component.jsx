import { useState } from 'react';

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
                    <span className="item-count__control" onClick={()=> setItemCount(removeItem(itemCount))}>&#8722;</span>
                    <span>{itemCount.current}</span>
                    <span className="item-count__control" onClick={()=>setItemCount(addItem(itemCount))}>+</span>
                </div>
            </div>
            <button className="item-count__button">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;