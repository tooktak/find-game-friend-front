import { useCallback } from 'react';
import { useRouter } from 'next/router';
import styles from './Button.module.css';

const Button = () => {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push('/login');
  }, [router]);
  return (
    <button className={styles.button} onClick={onClick}>
      로그인
    </button>
  );
};

export default Button;
