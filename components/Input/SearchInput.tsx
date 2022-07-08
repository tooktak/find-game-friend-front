import { memo } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import styles from './SearchInput.module.scss';

export type SearchInputProps = {
  placeholder?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon: () => void;
};

const SearchInput = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  onClickIcon,
}: SearchInputProps) => {
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
      <div className={styles.icon} onClick={onClickIcon}>
        <RiSearchLine />
      </div>
    </div>
  );
};

export default memo(SearchInput);
