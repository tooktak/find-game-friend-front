import { memo } from 'react';
import styles from './TextInput.module.scss';

export type TextInputProps = {
  placeholder?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  name,
  placeholder,
  type,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label className={styles.label}>{placeholder}</label>
    </div>
  );
};

export default memo(TextInput);
