import styles from './Button.module.scss';
import cx from '@/styles/cx';

type Props = {
  children: string;
  onClick?: () => void;
  size?: 'large' | 'medium' | 'small';
  color?: 'main' | 'sub' | 'tag';
  outline?: boolean;
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  size = 'medium',
  color,
  outline = false,
  disabled,
}: Props) => {
  const classNames = cx(styles)('button', size, color, { outline, disabled });

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
