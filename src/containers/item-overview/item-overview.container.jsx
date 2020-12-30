import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/item-detail/item-detail.component';
import NoMatchPage from '../../components/no-match-page/no-match-page.component';

const ItemOverview = ({ items }) => {
    const { itemId } = useParams();
    const item = items.find(({ id }) => id === itemId * 1);
    
    if (item) {
        const { ...itemProps } = item;
        return <ItemDetail { ...itemProps }/>
    };
    return <NoMatchPage/>
};

export default ItemOverview;