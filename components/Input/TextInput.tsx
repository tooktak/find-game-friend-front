import cx from '@/styles/cx';
import { forwardRef, InputHTMLAttributes, memo } from 'react';
import styles from './TextInput.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  bold?: boolean;
  placeholder?: string;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, bold, ...rest }, ref) => {
    const className = cx(styles)('input', { bold });
    return (
      <div className={styles.container}>
        <input
          ref={ref}
          className={className}
          placeholder={placeholder}
          {...rest}
        />
        <label className={styles.label}>{placeholder}</label>
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';

export default memo(TextInput);
