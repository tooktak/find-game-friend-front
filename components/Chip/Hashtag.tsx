import { MouseEvent } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import Chip from './components';

type Props = {
  children: string;
  id: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

const Hashtag = ({ children, id, onClick }: Props) => {
  return (
    <Chip leftIcon id={id} onClick={onClick}>
      <Chip.IconButton id={id} onClick={onClick} icon={<RiCloseFill />} />
      <Chip.Text>{children}</Chip.Text>
    </Chip>
  );
};

export default Hashtag;
