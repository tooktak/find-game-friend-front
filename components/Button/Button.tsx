import styles from './Button.module.scss';
import cx from '@/styles/cx';
import { forwardRef } from 'react';

type Props = {
  children: string;
  onClick?: () => void;
  type?: 'submit';
  size?: 'large' | 'medium' | 'small';
  color?: 'main' | 'sub' | 'tag';
  rounded?: boolean;
  outline?: boolean;
  disabled?: boolean;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      onClick,
      type,
      size = 'medium',
      color,
      rounded = false,
      outline = false,
      disabled,
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
        type={type}
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
