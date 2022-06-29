import { ReactNode } from 'react';
import styles from './index.module.scss';

import Text from './Text';
import Image from './Image';
import Icon from './Icon';

const Skeleton = ({ children }: { children: ReactNode }) => {
  return <div className={styles.skeleton}>{children}</div>;
};

Skeleton.Text = Text;
Skeleton.Image = Image;
Skeleton.Icon = Icon;

export default Skeleton;
