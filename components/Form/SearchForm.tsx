import { FormEvent, memo } from 'react';
import { Select } from '../Select';
import { SearchInput } from '../Input';
import { RiSearchLine } from 'react-icons/ri';

import styles from './SearchForm.module.scss';
import { useFindMatePostSearchContext } from '@/context/FindMatePost';

const Divide = () => <hr className={styles.divide} />;

const SearchButton = ({ onClick }: { onClick: () => void }) => (
  <div className={styles.icon} onClick={onClick}>
    <RiSearchLine />
  </div>
);

const SearchForm = () => {
  const { searchCategory, form, onChange, handleSearch } =
    useFindMatePostSearchContext();

  const { q, category } = form;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.container}>
        <div className={styles.select}>
          <Select
            name="category"
            value={category}
            option={searchCategory}
            onChange={onChange}
            noOutline
          />
        </div>
        <Divide />
        <SearchInput
          placeholder="search..."
          name="q"
          value={q}
          onChange={onChange}
        />
        <SearchButton onClick={handleSearch} />
      </div>
    </form>
  );
};

export default memo(SearchForm);
