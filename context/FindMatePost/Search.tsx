import { ChangeEvent, createContext, ReactNode } from 'react';
import { useRouter } from 'next/dist/client/router';

import useFormChange from '@/hooks/useFormChange';
import { SelectOption } from '@/components/Select';

type SearchForm = {
  q: string;
  category: string;
};

type SearchContextType = {
  searchCategory: SelectOption[];
  form: SearchForm;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSearch: () => void;
};

export const SearchContext = createContext<SearchContextType | null>(null);

const Search = ({ children }: { children: ReactNode }) => {
  const searchCategory = [
    { value: 'title', description: '제목' },
    { value: 'game', description: '게임' },
    { value: 'contents', description: '내용' },
  ];

  const router = useRouter();
  const [form, onChange] = useFormChange({
    q: '',
    category: searchCategory[0].value,
  });

  const { q, category } = form;

  const handleSearch = () => {
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

  return (
    <SearchContext.Provider
      value={{
        searchCategory,
        form,
        onChange,
        handleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default Search;
