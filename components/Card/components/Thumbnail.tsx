import Image from 'next/image';

const Thumbnail = ({ src }: { src: string }) => {
  return (
    <Image src={src} alt="image" width={800} height={300} layout="responsive" />
  );
};

export default Thumbnail;
