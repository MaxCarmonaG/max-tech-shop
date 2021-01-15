import { useEffect, useState, useContext } from 'react'

import CategoryDetail from '../../containers/category-detail/category-detail.container';
import Spinner from '../../components/spinner/spinner.component';
import { StoreContext } from '../../providers/store.provider';
import { firestore, converSnapshotToMap } from '../../firebase/firebase.utils';

import './category-list.styles.scss';

const CategoryList = () => {
    const { data: category } = useContext(StoreContext);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const itemCollection = firestore.collection('items');
        itemCollection.get()
        .then(querySnapshot => querySnapshot.size === 0 ?
            console.log('No Results')
            : setItems(converSnapshotToMap(querySnapshot)))
        .catch(error=> console.log(error))
    }, [])

    return (
        category.length ?
            <div className="category-list__container">
                {
                    category.map(({ id, title, routeName }) => {
                        const cateogryItems = items.filter(({ category }) => category === routeName);
                        return <CategoryDetail
                            key={id}
                            title={title}
                            routeName={routeName}
                            items={cateogryItems}
                        />        
                    })
                }
            </div>
        : <Spinner/>
    );
};

export default CategoryList;