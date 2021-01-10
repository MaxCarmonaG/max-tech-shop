import { useContext } from 'react';

import CategoryDetail from '../../containers/category-detail/category-detail.container';
import Spinner from '../../components/spinner/spinner.component';

import { StoreContext } from '../../providers/store.provider';

import './category-list.styles.scss';

const CategoryList = () => {
    
    const { data } = useContext(StoreContext);

    return (
        data.length ?
            <div className="category-list__container">
                {
                    data.map(({ id, ...props }) => (
                        <CategoryDetail key={id} {...props}/>        
                    ))
                }
            </div>
        : <Spinner/>
    );
};

export default CategoryList;