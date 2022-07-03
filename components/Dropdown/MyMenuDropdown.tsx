import useOutsideClick from '@/hooks/useOutsideClick';
import { ReactNode, useRef } from 'react';
import Dropdown from './components';

const MyMenuDropdown = ({
  open,
  menuClose,
  trigger,
  menuItems,
}: {
  open: boolean;
  menuClose: () => void;
  trigger: ReactNode;
  menuItems: MenuLink[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, menuClose);

  return (
    <Dropdown trigger={trigger}>
      <div ref={ref}>
        {open ? (
          <Dropdown.Content>
            <Dropdown.Menu>
              <Dropdown.MenuItem menuItems={menuItems} />
            </Dropdown.Menu>
          </Dropdown.Content>
        ) : null}
      </div>
    </Dropdown>
  );
};

export default MyMenuDropdown;
