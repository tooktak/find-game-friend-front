import styles from './Text.module.scss';
import cx from '@/styles/cx';

const Text = ({
  size = 'medium',
  width = 'full',
}: {
  size?: 'small' | 'medium' | 'large' | 'searchResult';
  width?: 'full' | 'threeQuarter' | 'half' | 'quarter';
}) => {
  const classNames = cx(styles)('text', size, width);
  return <span className={classNames} />;
};

export default Text;
