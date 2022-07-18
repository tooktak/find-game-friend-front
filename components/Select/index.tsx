import { memo, forwardRef, SelectHTMLAttributes } from 'react';
import styles from './index.module.scss';
import cx from '@/styles/cx';

export type SelectOption = {
  value: string;
  description: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  noOutline?: boolean;
  option: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ noOutline = false, option, ...rest }, ref) => {
    const classNames = cx(styles)('select', { noOutline });

    return (
      <select className={classNames} ref={ref} {...rest}>
        {option.map(({ value, description }) => (
          <option key={value} value={value}>
            {description}
          </option>
        ))}
      </select>
    );
  },
);

Select.displayName = 'Select';

export default memo(Select);
