import { MouseEvent, ReactNode } from 'react';
import styles from './index.module.scss';

import IconButton from './IconButton';
import Text from './Text';
import cx from '@/styles/cx';

type Props = {
  children: ReactNode;
  id: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};

const Chip = ({ children, id, leftIcon, rightIcon, onClick }: Props) => {
  const classNames = cx(styles)('chip', { leftIcon, rightIcon });
  return (
    <div id={id} onClick={onClick} className={classNames}>
      {children}
    </div>
  );
};

Chip.Text = Text;
Chip.IconButton = IconButton;

export default Chip;
