import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CategoryItem from '../../components/category-item/category-item.component';
import Spinner from '../../components/spinner/spinner.component';

import { firestore, converSnapshotToMap } from '../../firebase/firebase.utils';
import './featured.styles.scss';

const Featured = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(()=>{
        const fetaturedItems = firestore.collection('items').where('featured', '==', true);
        fetaturedItems.get()
        .then(querySnapshot => querySnapshot.size === 0 ?
            console.log('No Results')
            : setItems(converSnapshotToMap(querySnapshot)))
        .catch(error=> console.log(error))
        .finally(() => setIsLoading(false))
    }, [])
    
    return (
        isLoading ? 
            <Spinner/>
            : 
            <div>
                <div className="featured__title">featured</div>
                <div className="featured__grid">
                    {
                       items.map( ({id, category, ...props}) => <CategoryItem key={id} {...props} onClick={()=>history.push(`/${category}/${id}`)}/>) 
                    }   
                </div>
            </div>
    );
};

export default Featured;