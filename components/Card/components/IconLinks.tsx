import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiDiscord } from 'react-icons/si';
import styles from './IconLinks.module.scss';
import cx from '@/styles/cx';

// const classNames = cx(styles)('button', size, color, { outline, disabled });

const DiscordLink = ({ link }: { link: string }) => {
  const className = cx(styles)('linkContainer', 'discord');
  return (
    <a className={className} href={link}>
      <div>
        <SiDiscord />
      </div>
    </a>
  );
};

const KakaoLink = ({ link }: { link: string }) => {
  const className = cx(styles)('linkContainer', 'kakao');
  return (
    <a className={className} href={link}>
      <div>
        <RiKakaoTalkFill />
      </div>
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
