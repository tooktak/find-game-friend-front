import { ReactNode } from 'react';
import styles from './index.module.scss';

import Text from './Text';
import Image from './Image';

const Skeleton = ({ children }: { children: ReactNode }) => {
  return <div className={styles.skeleton}>{children}</div>;
};

Skeleton.Text = Text;
Skeleton.Image = Image;

export default Skeleton;
