import styles from './Image.module.scss';
import cx from '@/styles/cx';

const Image = ({ type }: { type: 'thumbnail' }) => {
  const classNames = cx(styles)('image', type);
  return <span className={classNames} />;
};

export default Image;
