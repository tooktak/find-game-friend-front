import Image from 'next/image';
import styles from './Thumbnail.module.scss';
import Skeleton from '@/components/Skeleton/components';

const Thumbnail = ({ src }: { src?: string }) => {
  return (
    <div className={styles.container}>
      {src ? (
        <Image
          src={src}
          alt="image"
          width="1000"
          height="400"
          layout="intrinsic"
        />
      ) : (
        <Skeleton.Image type="thumbnail" />
      )}
    </div>
  );
};

export default Thumbnail;
