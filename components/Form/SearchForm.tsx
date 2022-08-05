import { memo, useCallback } from 'react';
import { Select } from '../Select';
import { SearchInput } from '../Input';
import { RiSearchLine } from 'react-icons/ri';

import styles from './SearchForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

type Search = {
  q: string;
  category: string;
};

const Divide = () => <hr className={styles.divide} />;

const SearchButton = ({ onClick }: { onClick: () => void }) => (
  <div className={styles.icon} onClick={onClick}>
    <RiSearchLine />
  </div>
);

const searchCategorys = [
  { value: 'title', description: '제목' },
  { value: 'game', description: '게임' },
  { value: 'hashtag', description: '태그' },
  { value: 'contents', description: '내용' },
];

const SearchForm = () => {
  const { register, handleSubmit, watch } = useForm<Search>();
  const router = useRouter();

  const { q, category } = watch();

  const handleSearch = useCallback(() => {
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
  }, [category, q, router]);

  const onSubmit: SubmitHandler<Search> = useCallback(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className={styles.select}>
          <Select
            {...register('category')}
            option={searchCategorys}
            noOutline
          />
        </div>
        <Divide />
        <SearchInput placeholder="search..." {...register('q')} />
        <SearchButton onClick={handleSearch} />
      </div>
    </form>
  );
};

export default memo(SearchForm);
