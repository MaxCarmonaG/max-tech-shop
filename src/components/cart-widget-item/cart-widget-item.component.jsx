import './cart-widget-item.styles.scss';

const CartWidgetItem = ({ name, qty, imageUrl }) => (
    <div className="cart-widget-item__container">
        <img className="cart-widget-item__img" src={imageUrl} alt={name}/>
        <span className="cart-widget-item__item">{name}</span>
        <span className="cart-widget-item__item">x  {qty}</span>
    </div>
);

export default CartWidgetItem;