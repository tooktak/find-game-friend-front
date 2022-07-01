import styles from './Icon.module.scss';
import cx from '@/styles/cx';

const Icon = ({ type = 'iconLink' }: { type?: 'iconLink' }) => {
  const classNames = cx(styles)('icon', type);
  return <span className={classNames} />;
};

export default Icon;
