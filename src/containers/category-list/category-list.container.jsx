import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CategoryDetail from '../category-detail/category-detail.container';
import Spinner from '../../components/spinner/spinner.component';

import SHOP_DATA from '../../providers/shop.data';

import './category-list.styles.scss';

const CategoryList = () => {
    
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

    const { categoryName } = useParams();
    const category = categoryName ? data.filter(({ routeName }) => categoryName === routeName ) : data;

    return (
        category.length ?
        <div className="category-list__container">
            {
                category.map(({ id, ...props }) => (
                    <CategoryDetail key={id} {...props}/>        
                ))
            }
        </div>
        :
        <Spinner/>
    )
};

export default CategoryList;