import { ButtonHTMLAttributes, forwardRef } from 'react';
import cx from '@/styles/cx';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'medium' | 'small';
  color?: 'main' | 'sub' | 'tag';
  rounded?: boolean;
  outline?: boolean;
  disabled?: boolean;
  children: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'medium',
      color,
      rounded = false,
      outline = false,
      disabled,
      children,
      ...rest
    },
    ref,
  ) => {
    const classNames = cx(styles)('button', size, color, {
      rounded,
      outline,
      disabled,
    });

    return (
      <button
        type="button"
        className={classNames}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
