import { useCallback } from 'react';
import { useRouter } from 'next/router';
import styles from './Logo.module.css';

const Logo = () => {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <div className={styles.logo} onClick={onClick}>
      <h1 className={styles.logoText}>FindGameMeta</h1>
    </div>
  );
};

export default Logo;
