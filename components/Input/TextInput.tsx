import { forwardRef, memo } from 'react';
import styles from './TextInput.module.scss';

export type TextInputProps = {
  type?: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ name, placeholder, type, value, onChange }, ref) {
    return (
      <div className={styles.container}>
        <input
          ref={ref}
          className={styles.input}
          type={type}
          placeholder={placeholder ? placeholder : name}
          name={name}
          value={value}
          onChange={onChange}
        />
        <label className={styles.label}>{name}</label>
      </div>
    );
  },
);

export default memo(TextInput);
