import { FC } from 'react';
import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router';

const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.redirect} onClick={() => navigate('/')}>
        <h1>SORRY</h1>
        <h2>We couldn't find that page or product.</h2>
        <h3>Please go back to home page.</h3>
      </div>
    </div>
  );
};

export default NotFound;
