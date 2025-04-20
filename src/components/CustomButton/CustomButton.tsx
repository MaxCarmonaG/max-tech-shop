import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router';
import styles from './CustomButton.module.scss';

interface CustomButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
}

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  to,
  ...props
}) =>
  to ? (
    <Link to={to} className={styles.container}>
      {children}
    </Link>
  ) : (
    <button {...props} className={styles.container}>
      {children}
    </button>
  );

export default CustomButton;
