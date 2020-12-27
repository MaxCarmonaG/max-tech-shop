import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

import './shopping-bag.styles.scss';

const ShoppingBag = () => (
    <div className="bag-icon__container">
        <ShoppingBagIcon className="bag-icon"/>
    </div>
);

export default ShoppingBag;