import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiDiscord } from 'react-icons/si';
import styles from './IconLinks.module.scss';
import cx from '@/styles/cx';
import { ReactNode } from 'react';

// const classNames = cx(styles)('button', size, color, { outline, disabled });

export const IconLinksContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

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
    <IconLinksContainer>
      {kakao && <KakaoLink link={kakao} />}
      {discord && <DiscordLink link={discord} />}
    </IconLinksContainer>
  );
};

export default IconLinks;
