import Link from 'next/link';
import styles from './MenuItem.module.scss';

const MenuItem = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: () => void;
  children: string;
}) => {
  return (
    <Link href={href} passHref>
      <li onClick={onClick}>{children}</li>
    </Link>
  );
};

const MenuItems = ({ menuItems }: { menuItems: MenuLink[] }) => {
  return (
    <ul className={styles.menuItem}>
      {menuItems.map(menuItem => {
        const { title, href, onClick } = menuItem;
        return (
          <MenuItem key={title} href={href} onClick={onClick}>
            {title}
          </MenuItem>
        );
      })}
    </ul>
  );
};

export default MenuItems;
