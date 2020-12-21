import { useState, useEffect } from 'react';

import Category from '../../components/category/category.component';
import Spinner from '../../components/spinner/spinner.component';

import SHOP_DATA from '../../providers/shop.data';

import './item-list.styles.scss';

const ItemList = () => {
    
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
        <div className="item-list__container">
            <div className="item-list__grid">
                {
                    data.map(collection => (
                        <Category key={ collection.id } imageUrl={ collection.imageUrl } title={ collection.title }/>
                    ))
                }
            </div>
        </div>
        :
        <Spinner/>
    )
};

export default ItemList;