import Category from '../../components/category/category.component';

import SHOP_DATA from '../../providers/shop.data';

import './item-list.styles.scss';

const ItemList = () => (
    <div className="item-list__container">
        <div className="item-list__grid">
            {
                SHOP_DATA.map(collection => (
                    <Category key={ collection.id } imageUrl={ collection.imageUrl } title={collection.title}/>
                ))
            }
        </div>
    </div>
);

export default ItemList;