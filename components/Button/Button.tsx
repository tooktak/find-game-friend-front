import { ButtonHTMLAttributes, forwardRef } from 'react';
import cx from '@/styles/cx';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'medium' | 'small';
  color?: 'main' | 'sub' | 'tag';
  rounded?: boolean;
  outline?: boolean;
  disabled?: boolean;
  icon?: JSX.Element;
  children?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'medium',
      color,
      rounded = false,
      outline = false,
      disabled,
      icon,
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
        {icon ? <span className={styles.icon}>{icon}</span> : null}
        <span className={styles.text}>{children}</span>
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
