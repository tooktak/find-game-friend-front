import { memo } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { SearchInput } from '../Input';
import CategorySelect, { Option } from './CategorySelect';
import styles from './index.module.scss';

export type SearchProps = {
  searchCategory: Option[];
  category: string;
  keyword: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onClickIcon: () => void;
};

const Search = ({
  searchCategory,
  category,
  keyword,
  onChange,
  onClickIcon,
}: SearchProps) => {
  return (
    <div className={styles.container}>
      <CategorySelect
        name="category"
        value={category}
        option={searchCategory}
        onChange={onChange}
      />
      <hr className={styles.divide} />
      <SearchInput
        placeholder="search..."
        name="keyword"
        value={keyword}
        onChange={onChange}
      />
      <div className={styles.icon} onClick={onClickIcon}>
        <RiSearchLine />
      </div>
    </div>
  );
};

export default memo(Search);
