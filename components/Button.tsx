import styles from './Button.module.scss';

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
  return (
    <button
      className={`${styles.button} ${styles[size]} ${
        color ? styles[color] : ''
      } ${outline ? styles.outline : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
