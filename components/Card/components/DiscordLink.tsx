import { SiDiscord } from 'react-icons/si';
import styles from './DiscordLink.module.scss';

const DiscordLink = ({ link }: { link: string }) => {
  return (
    <a className={styles.discordLink} href={link}>
      <SiDiscord />
    </a>
  );
};

export default DiscordLink;
