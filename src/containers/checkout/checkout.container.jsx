import './checkout.styles.scss';

const Checkout = () => (
    <div className="checkout__container">
        <div className="checkout__grid">
            <div className="checkout__block">
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            <div className="checkout__temp">
                NO ITEMS TO DISPLAY
            </div>
            <div className="checkout__total">
                Total : $ 0
            </div>
        </div>
    </div>
);

export default Checkout;