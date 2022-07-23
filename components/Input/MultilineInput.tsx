import { forwardRef, memo } from 'react';
import styles from './MultilineInput.module.scss';

export type Props = {
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const MultilineInput = forwardRef<HTMLTextAreaElement, Props>(
  function MultilineInput({ name, placeholder, value, onChange }, ref) {
    return (
      <div className={styles.container}>
        <textarea
          ref={ref}
          className={styles.input}
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

export default memo(MultilineInput);
