import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import CategoryDetail from '../../containers/category-detail/category-detail.container';
import Spinner from '../../components/spinner/spinner.component';
import NoMatchPage from '../../components/no-match-page/no-match-page.component';

import { StoreContext } from '../../providers/store.provider';
import { firestore, converSnapshotToMap } from '../../firebase/firebase.utils';

import './category.styles.scss';

const Category = () => {
    
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { item: category } = useParams();
    const { data } = useContext(StoreContext);
    const categoryName = data.find(({ routeName }) => routeName ===  category);

    useEffect(()=>{
        const categoryItems = firestore.collection('items').where('category', '==', category);
        categoryItems.get()
        .then(querySnapshot => querySnapshot.size === 0 ?
            setItems(null)
            : setItems(converSnapshotToMap(querySnapshot)))
        .catch(error=> console.log(error))
        .finally(() => setIsLoading(false))
    }, [category])

    if(!items) return <NoMatchPage/>;

    return (
        isLoading ? 
            <Spinner/>
            : 
            <div className="category__container">
                <CategoryDetail
                    routeName={category}
                    title={categoryName.title}
                    items={items}
                />   
            </div>
    );
};

export default Category;