import styles from './Text.module.scss';
import cx from '@/styles/cx';

const Text = ({ size = 'medium' }: { size?: string }) => {
  const classNames = cx(styles)('text', size);
  return <span className={classNames} />;
};

export default Text;
