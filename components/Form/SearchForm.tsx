import { FormEvent, memo } from 'react';
import Select from '../Select';
import { SearchInput } from '../Input';
import { RiSearchLine } from 'react-icons/ri';

import styles from './SearchForm.module.scss';
import { useFindMatePostSearchContext } from '@/context/FindMatePost';

const SearchForm = () => {
  const { searchCategory, form, onChange, handleSearch } =
    useFindMatePostSearchContext();

  const { q, category } = form;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.container}>
        <Select
          name="category"
          value={category}
          option={searchCategory}
          onChange={onChange}
        />
        <hr className={styles.divide} />
        <SearchInput
          placeholder="search..."
          name="q"
          value={q}
          onChange={onChange}
        />
        <div className={styles.icon} onClick={handleSearch}>
          <RiSearchLine />
        </div>
      </div>
    </form>
  );
};

export default memo(SearchForm);
