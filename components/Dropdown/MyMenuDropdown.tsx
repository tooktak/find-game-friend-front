import { ReactNode } from 'react';
import Dropdown from './components';

const MyMenuDropdown = ({
  open,
  trigger,
  menuItems,
}: {
  open: boolean;
  trigger: ReactNode;
  menuItems: MenuLink[];
}) => {
  return (
    <Dropdown trigger={trigger}>
      {open ? (
        <Dropdown.Content>
          <Dropdown.Menu>
            <Dropdown.MenuItem menuItems={menuItems} />
          </Dropdown.Menu>
        </Dropdown.Content>
      ) : null}
    </Dropdown>
  );
};

export default MyMenuDropdown;
