import { useState, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import firebase, { firestore } from '../../firebase/firebase.utils';
import { StoreContext } from '../../providers/store.provider';
import CustomButton from '../../components/custom-button/custom-button.component';
import CartWidgetItem from '../../components/cart-widget-item/cart-widget-item.component';
import './checkout.styles.scss';

const Checkout = () => {
    const history = useHistory();

    const { cartItems, cartTotal, clearCart } = useContext(StoreContext);

    const initialState = {
        name: '',
        adress: '',
        phone: '',
        email: '',
        confirmEmail: ''
    };

    const [formData, setFormData] = useState(initialState);

    const [validation, setValidation] = useState({
        name: false,
        adress: false,
        phone: false,
        email: false,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        return setFormData({ ...formData, [name]: value });        
    };

    const handleBlur = e => {
        const { name, value } = e.target;
        switch(name) {
            case 'name':
                return setValidation({
                    ...validation, name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(value)
                });
            case 'adress':
                return setValidation({
                    ...validation, adress: /^[a-zA-Z0-9\s]{3,40}$/.test(value)
                });
            case 'email':
                return setValidation({
                    ...validation, email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
                });
            case 'phone':
                return setValidation({
                    ...validation, phone: /^\d{7,14}$/.test(value)
                });
            default: return;
        };
    };

    const [orderId, setOrderId] = useState('');

    const purchase = {
        user: formData,
        items: cartItems,
        totalPrice: cartTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date())
    };

    const handleSubmit = e => {
        e.preventDefault();
       
        for(let x in validation){
            if(!validation[x]) return alert(`${x} field is invalid`);
        };
        
        if(formData.email === formData.confirmEmail) {
            firestore.collection('orders').add(purchase)
            .then(({id}) => setOrderId(id))
            .catch(error => console.log(error))
            .finally(() => clearCart())
        }else{
            alert('Invalid Email confirmation')
        };
    };

    if(!cartItems.length && !orderId) return <Redirect to='/'/>;

    return (
        !orderId ?
            <div className="checkout__container">
                <form className="checkout__form" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="checkout__info">
                        <span className="checkout__title">billing information</span>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={e => handleChange(e)}
                            onBlur={e => handleBlur(e)}
                            required
                        />
                        <label htmlFor="adress">Adress</label>
                        <input
                            type="text"
                            id="adress"
                            name="adress"
                            value={formData.adress}
                            onChange={e => handleChange(e)}
                            onBlur={e => handleBlur(e)}
                            required
                        />
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={e => handleChange(e)}
                            onBlur={e => handleBlur(e)}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={e => handleChange(e)}
                            onBlur={e => handleBlur(e)}
                            required
                        />
                        <label htmlFor="confirmEmail">Confirm Email</label>
                        <input
                            type="email"
                            id="confirmEmail"
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={e => handleChange(e)}
                            required
                        />
                    </div>
                    <div className="checkout__cart">
                        <div className="checkout__title">Your products</div>
                        <div className="checkout__items">
                            {
                                cartItems.map(({ id, ...props }) => <CartWidgetItem key={id} { ...props }/>)
                            }
                        </div>
                        <div className="checkout__total">
                            Total order $ {cartTotal}
                        </div>
                        <div className="checkout__button">
                            <CustomButton type="submit">Place order</CustomButton>
                        </div>
                    </div>
                </form>
            </div>
        :
            <div className="checkout__purchase">
                <span className="checkout__title">Purchase successful</span>
                <span>Your order number is # {orderId}</span>
                <div className="checkout__button">
                    <CustomButton onClick={() => history.push('/')}>Return to home</CustomButton>
                </div>
            </div> 
    );
};

export default Checkout;