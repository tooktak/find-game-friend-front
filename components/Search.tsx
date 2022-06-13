import styles from './Search.module.css';

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
