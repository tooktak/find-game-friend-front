import { FormEvent, memo } from 'react';
import { useRouter } from 'next/router';
import useFormChange from '@/hooks/useFormChange';
import Select from '../Select';
import { SearchInput } from '../Input';
import { RiSearchLine } from 'react-icons/ri';

import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const searchCategory = [
    { value: 'title', description: '제목' },
    { value: 'game', description: '게임' },
    { value: 'hashtag', description: '태그' },
    { value: 'contents', description: '내용' },
  ];

  const router = useRouter();
  const [form, onChange] = useFormChange({
    q: '',
    category: searchCategory[0].value,
  });
  const { q, category } = form;

  const handleSearchRouter = () => {
    if (q) {
      router.push({
        pathname: '/search',
        query: {
          category,
          q,
        },
      });
      return;
    }
    router.push('/');
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearchRouter();
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
        <div className={styles.icon} onClick={handleSearchRouter}>
          <RiSearchLine />
        </div>
      </div>
    </form>
  );
};

export default memo(SearchForm);
