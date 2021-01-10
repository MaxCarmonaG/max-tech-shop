import { useContext } from 'react';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { StoreContext } from '../../providers/store.provider';

import './shopping-bag.styles.scss';

const ShoppingBag = () => {
    const { totalItems } = useContext(StoreContext);
    return(
        <div className="bag-icon__container">
            <ShoppingBagIcon className="bag-icon"/>
            <span className="bag-icon__value">{totalItems}</span>
        </div>
    );
};

export default ShoppingBag;