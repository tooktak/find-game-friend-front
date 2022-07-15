import { useContext } from 'react';
import SearchProvider, { SearchContext } from './Search';

const useFindMatePostSearchContext = () => {
  const state = useContext(SearchContext);
  if (!state) throw new Error('Cannot find Provider');
  return state;
};

export { useFindMatePostSearchContext };
export default SearchProvider;
