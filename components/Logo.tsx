import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className={styles.logo}>
        <h1 className={styles.logoText}>FindGameFriends</h1>
      </div>
    </Link>
  );
};

export default Logo;
