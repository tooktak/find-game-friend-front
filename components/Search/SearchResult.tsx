import styles from './SearchResult.module.scss';

type SearchResultProps = {
  data: FindMatePost[];
};

const SearchResult = ({ data }: SearchResultProps) => {
  return (
    <p className={styles.result}>
      총 <strong>{data.length} 개</strong> 검색 결과
    </p>
  );
};

export default SearchResult;
