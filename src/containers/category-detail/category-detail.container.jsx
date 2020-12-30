import { Switch, Link, Route, useRouteMatch, useHistory } from 'react-router-dom';

import CategoryItem from '../../components/category-item/category-item.component';
import ItemOverview from '../item-overview/item-overview.container';

import './category-detail.styles.scss';

const CategoryDetail = ({ routeName, title, items }) => {
    const match = useRouteMatch();
    const { params: {categoryName}, url } = match;
    const history = useHistory();
    
    const handleLink = id => categoryName === routeName ? history.push(`${url}/${id}`) : history.push(`${url}/${routeName}/${id}`);
    
    return (
        <Switch>
            <Route exact path={`${url}`}>
                <div className="category-detail__category">    
                    <div className="category-detail__title">
                        {
                            categoryName === routeName
                            ? title
                            : <Link to={`${url}/${routeName}`}>{title}</Link>
                        }
                    </div>
                    <div className="category-detail__grid">
                        {
                            items.map(({ id, ...props }) => (
                                <CategoryItem key={id} {...props} onClick={()=>handleLink(id)}/>
                            ))
                        }
                    </div>
                </div>
            </Route>
            <Route path={`${url}/:itemId`}>
                <ItemOverview items={items}/>
            </Route>
        </Switch>
    )
};

export default CategoryDetail;