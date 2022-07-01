import styles from './Button.module.scss';
import cx from '@/styles/cx';
import { forwardRef } from 'react';

type Props = {
  children: string;
  onClick?: () => void;
  size?: 'large' | 'medium' | 'small';
  color?: 'main' | 'sub' | 'tag';
  outline?: boolean;
  disabled?: boolean;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { children, onClick, size = 'medium', color, outline = false, disabled },
    ref,
  ) => {
    const classNames = cx(styles)('button', size, color, { outline, disabled });

    return (
      <button
        className={classNames}
        onClick={onClick}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
