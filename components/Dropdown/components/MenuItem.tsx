import Link from 'next/link';
import styles from './MenuItem.module.scss';

const MenuItem = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link href={href} passHref>
      <li>{children}</li>
    </Link>
  );
};

const MenuItems = ({ menuItems }: { menuItems: MenuLink[] }) => {
  return (
    <ul className={styles.menuItem}>
      {menuItems.map(menuItem => {
        const { title, href } = menuItem;
        return (
          <MenuItem key={title} href={href}>
            {title}
          </MenuItem>
        );
      })}
    </ul>
  );
};

export default MenuItems;
