import { memo } from 'react';
import { RiImageAddLine } from 'react-icons/ri';

import styles from './FileInput.module.scss';

type FileInputProps = {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput = ({ name, label, value, onChange }: FileInputProps) => {
  return (
    <div className={styles.container}>
      <input
        type="file"
        name={name}
        className={styles.input}
        onChange={onChange}
      />
      <RiImageAddLine />
      {value ? value : label}
    </div>
  );
};

export default memo(FileInput);
