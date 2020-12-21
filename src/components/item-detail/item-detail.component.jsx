import ItemCount from '../item-count/item-count.component';
import './item-detail.styles.scss';

const ItemDetail = ({ name, description, imageUrl, price }) => (
    <div className="item-detail__container">
        <div className="item-detail__image-container">
            <img src={imageUrl} alt={name} className="item-detail__image"/>
        </div>
        <div className="item-detail__description-container">
            <div className="item-detail__info">
                <span className="item-detail__name">{name}</span>
                <span className="item-detail__description">{description}</span>
            </div>
            <div className="item-detail__price">$ {price}</div>
        </div>
        <ItemCount/>
    </div>
);

export default ItemDetail; 