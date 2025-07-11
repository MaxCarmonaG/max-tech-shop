import {
  useState,
  useContext,
  ChangeEvent,
  FocusEvent,
  FormEvent,
} from 'react';
import { StoreContext } from '@/providers';
import CustomButton from '@/components/CustomButton';
import CartWidgetItem from '@/components/CartWidgetItem';
import styles from './Checkout.module.scss';
import { Navigate } from 'react-router';
import { addOrder } from '@/libs/firebase';
import Container from '@/ui/Container';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useContext(StoreContext);

  const initialState = {
    name: '',
    address: '',
    phone: '',
    email: '',
    confirmEmail: '',
  };

  const [formData, setFormData] = useState(initialState);

  const [validation, setValidation] = useState({
    name: false,
    address: false,
    phone: false,
    email: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    return setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setValidation({
          ...validation,
          name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(value),
        });
      case 'address':
        return setValidation({
          ...validation,
          address: /^[a-zA-Z0-9\s]{3,40}$/.test(value),
        });
      case 'email':
        return setValidation({
          ...validation,
          email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
        });
      case 'phone':
        return setValidation({
          ...validation,
          phone: /^\d{7,14}$/.test(value),
        });
      default:
        return;
    }
  };

  const [orderId, setOrderId] = useState('');

  const purchase = {
    user: formData,
    items: cartItems,
    totalPrice: cartTotal,
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(validation)) {
      if (!value) return alert(`${key} field is invalid`);
    }

    if (formData.email === formData.confirmEmail) {
      addOrder(purchase).then((id) => {
        if (id) {
          setOrderId(id);
          clearCart();
        }
      });
    } else {
      alert('Invalid Email confirmation');
    }
  };

  if (!cartItems.length && !orderId) return <Navigate to="/" />;

  return (
    <section className={styles.section}>
      <Container>
        {!orderId ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.info}>
              <span className={styles.title}>billing information</span>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="address">address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="confirmEmail">Confirm Email</label>
              <input
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.cart}>
              <div className={styles.title}>Your products</div>
              <div className={styles.items}>
                {cartItems.map(({ id, ...props }) => (
                  <CartWidgetItem key={id} {...props} />
                ))}
              </div>
              <div className={styles.total}>Total order $ {cartTotal}</div>
              <CustomButton className={styles.button} type="submit">
                Place order
              </CustomButton>
            </div>
          </form>
        ) : (
          <div className={styles.purchase}>
            <span className={styles.title}>Purchase successful</span>
            <span>Your order number is # {orderId}</span>
            <CustomButton to="/" className={styles.button}>
              Return to home
            </CustomButton>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Checkout;
