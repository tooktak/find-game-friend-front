import { RiKakaoTalkFill } from 'react-icons/ri';
import styles from './KakaoLink.module.scss';

const KakaoLink = ({ link }: { link: string }) => {
  return (
    <a className={styles.kakaoLink} href={link}>
      <RiKakaoTalkFill />
    </a>
  );
};

export default KakaoLink;
