import styles from './SearchNotFound.module.scss';

const SearchNotFound = () => {
  return (
    <div className={styles.container}>
      <span className={styles.emoticon}> (´。＿。｀)</span>
      <span className={styles.comment}>검색 결과가 없어요.......</span>
    </div>
  );
};

export default SearchNotFound;
