import { forwardRef, memo } from 'react';
import styles from './MultilineInput.module.scss';

export type Props = {
  placeholder?: string;
};

const MultilineInput = forwardRef<HTMLTextAreaElement, Props>(
  function MultilineInput({ placeholder, ...rest }, ref) {
    return (
      <div className={styles.container}>
        <textarea
          ref={ref}
          placeholder={placeholder}
          className={styles.input}
          {...rest}
        />
        <label className={styles.label}>{placeholder}</label>
      </div>
    );
  },
);

export default memo(MultilineInput);
