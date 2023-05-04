import { memo, forwardRef } from 'react';
import styles from './Select.module.scss';
import cx from '@/styles/cx';

export type SelectOption = {
  value: string | number;
  description: string;
};

type Props = {
  noOutline?: boolean;
  option: SelectOption[];
};

const Select = forwardRef<HTMLSelectElement, Props>(
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
