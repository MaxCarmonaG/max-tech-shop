import { useState, useEffect } from 'react';

import ItemDetail from '../../components/item-detail/item-detail.component';
import Spinner from '../../components/spinner/spinner.component';

import SHOP_DATA from '../../providers/shop.data';

import './item-detail.container.styles.scss';

const ItemDetailContainer = () => {
    
    const [data, setData] = useState([]);
    
    const getData = new Promise((resolve, reject) => {
        if(SHOP_DATA.length){
            setTimeout(() => resolve(SHOP_DATA),2000);
            return;
        } else {
            reject('No data to display');
            return;
        };
    });

    useEffect(()=>{
        getData.then(res => setData(res)).catch(error => console.warn(error));
        // eslint-disable-next-line
    },[]);

    return (
        data.length ?
        <div className="item-detail-container__container">
            {
                data.map(collection => (
                    <div className="item-detail-container__category" key={collection.id}>    
                        <div className="item-detail-container__title">{collection.title}</div>
                        <div className="item-detail-container__grid">
                            {
                                collection.items.map(item => (
                                    <ItemDetail
                                        key={item.id}
                                        name={item.name}
                                        description={item.description}
                                        imageUrl={item.imageUrl}
                                        price={item.price}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
        :
        <Spinner/>
    )
};

export default ItemDetailContainer;