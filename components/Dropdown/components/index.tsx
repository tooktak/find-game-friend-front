import { ReactNode } from 'react';
import styles from './index.module.scss';

import Content from './Content';
import Menu from './Menu';
import MenuItem from './MenuItem';

const Dropdown = ({
  trigger,
  children,
}: {
  trigger: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className={styles.dropdown}>
      {trigger}
      {children}
    </div>
  );
};

Dropdown.Content = Content;
Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;

export default Dropdown;
