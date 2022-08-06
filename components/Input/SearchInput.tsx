import { forwardRef, memo } from 'react';
import styles from './SearchInput.module.scss';

type Props = {
  placeholder?: string;
};

const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={styles.input}
        placeholder={placeholder}
        {...rest}
      />
    );
  },
);

SearchInput.displayName = 'SearchInput';

export default memo(SearchInput);
