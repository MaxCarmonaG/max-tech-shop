import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router';
import styles from './CustomButton.module.scss';

interface CustomButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  className?: string;
  variant?: 'default' | 'outline';
}

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  to,
  className = '',
  variant = 'default',
  disabled = false,
  ...props
}) => {
  const classes =
    `${styles.btn} ${disabled ? styles.disabled : styles[variant]} ${className}`.trim();
  return to && !disabled ? (
    <Link to={to} className={classes}>
      {children}
    </Link>
  ) : (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default CustomButton;
