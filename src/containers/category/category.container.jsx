import { useContext } from 'react';

import { useParams } from 'react-router-dom';

import CategoryDetail from '../../containers/category-detail/category-detail.container';
import Spinner from '../../components/spinner/spinner.component';
import NoMatchPage from '../../components/no-match-page/no-match-page.component';

import { StoreContext } from '../../providers/store.provider';

import './category.styles.scss';

const Category = () => {
    
    const { data } = useContext(StoreContext);
    const { item } = useParams();
    const category = data.find(({ routeName }) => item === routeName);
    
    if(category === undefined && data.length !== 0) return <NoMatchPage/>;

    return (
        category ?
            <div className="category__container">
                <CategoryDetail
                    key={category.id}
                    routeName={category.routeName}
                    title={category.title}
                    items={category.items}
                />   
            </div>
        : <Spinner/>
    );
};

export default Category;