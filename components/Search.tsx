import styles from './Search.module.scss';

const Search = () => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search Keyword..."
    />
  );
};

export default Search;
