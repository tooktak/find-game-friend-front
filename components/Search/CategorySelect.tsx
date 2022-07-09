import { ChangeEvent } from 'react';
import styles from './CategorySelect.module.scss';

export type Option = { value: string; description: string };

type CategorySelectProps = {
  name: string;
  value: string;
  option: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const CategorySelect = ({
  name,
  value,
  option,
  onChange,
}: CategorySelectProps) => {
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

export default CategorySelect;
