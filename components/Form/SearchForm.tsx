import { FormEvent } from 'react';
import { useRouter } from 'next/router';
import { SearchInput } from '../Input';
import useFormChange from '@/hooks/useFormChange';

const SearchForm = () => {
  const router = useRouter();
  const [form, onChange] = useFormChange({ keyword: '' });
  const { keyword } = form;

  const handleSearchRouter = () => {
    if (keyword) {
      router.push({
        pathname: '/',
        query: {
          keyword,
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
      <SearchInput
        name="keyword"
        placeholder="search..."
        value={keyword}
        onChange={onChange}
        onClickIcon={handleSearchRouter}
      />
    </form>
  );
};

export default SearchForm;
