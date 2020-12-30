import ItemCount from '../item-count/item-count.component';
import './item-detail.styles.scss';

const ItemDetail = ({ name, description, imageUrl, price }) => (
    <div className="item-detail__container">
        <img src={imageUrl} alt={name} className="item-detail__image"/>
        <div className="item-detail__info">
            <h1 className="item-detail__name">{name}</h1>
            <h2 className="item-detail__price">$ {price}</h2>
            <p className="item-detail__description">{description}</p>
            <ItemCount />
        </div>
    </div>
);

export default ItemDetail;