import cx from '@/styles/cx';
import { forwardRef, InputHTMLAttributes, memo } from 'react';
import styles from './TextInput.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  bold?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ name, bold, ...rest }, ref) => {
    const className = cx(styles)('input', { bold });
    return (
      <div className={styles.container}>
        <input ref={ref} className={className} {...rest} />
        <label className={styles.label}>{name}</label>
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';

export default memo(TextInput);
