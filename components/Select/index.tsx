import { ChangeEvent } from 'react';
import styles from './index.module.scss';

export type Option = { value: string; description: string };

type SelectProps = {
  name: string;
  value: string;
  option: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ name, value, option, onChange }: SelectProps) => {
  return (
    <select
      className={styles.select}
      name={name}
      value={value}
      onChange={onChange}
    >
      {option.map(({ value, description }) => (
        <option key={value} value={value}>
          {description}
        </option>
      ))}
    </select>
  );
};

export default Select;
