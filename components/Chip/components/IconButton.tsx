import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './IconButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
}

const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ icon, ...rest }, ref) => {
    return (
      <button className={styles.button} type="button" ref={ref} {...rest}>
        {icon}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
