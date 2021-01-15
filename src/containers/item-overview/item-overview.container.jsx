import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/item-detail/item-detail.component';
import NoMatchPage from '../../components/no-match-page/no-match-page.component';

const ItemOverview = ({ items }) => {
    const { id } = useParams();
    const item = items.find(item => item.id === id);
    
    if (item) {
        return <ItemDetail item={item}/>
    };
    return <NoMatchPage/>
};

export default ItemOverview;