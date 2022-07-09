import { memo } from 'react';
import styles from './SearchInput.module.scss';

export type SearchInputProps = {
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({
  name,
  placeholder,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default memo(SearchInput);
