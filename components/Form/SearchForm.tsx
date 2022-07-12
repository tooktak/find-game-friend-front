import { FormEvent } from 'react';
import { useRouter } from 'next/router';
import useFormChange from '@/hooks/useFormChange';
import Search from '@/components/Search';

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
      <Search
        category={category}
        searchCategory={searchCategory}
        q={q}
        onChange={onChange}
        onClickIcon={handleSearchRouter}
      />
    </form>
  );
};

export default SearchForm;
