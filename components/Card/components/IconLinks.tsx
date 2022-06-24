import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiDiscord } from 'react-icons/si';
import styles from './IconLinks.module.scss';

const DiscordLink = ({ link }: { link: string }) => {
  return (
    <a className={styles.discordLink} href={link}>
      <SiDiscord />
    </a>
  );
};

const KakaoLink = ({ link }: { link: string }) => {
  return (
    <a className={styles.kakaoLink} href={link}>
      <RiKakaoTalkFill />
    </a>
  );
};

const IconLinks = ({ kakao, discord }: { kakao: string; discord: string }) => {
  return (
    <div className={styles.container}>
      {kakao && <KakaoLink link={kakao} />}
      {discord && <DiscordLink link={discord} />}
    </div>
  );
};

export default IconLinks;
