import Image from 'next/image';

const Thumbnail = ({ src }: { src: string }) => {
  return (
    <div>
      <Image
        src={src}
        alt="image"
        width={800}
        height={300}
        layout="responsive"
      />
    </div>
  );
};

export default Thumbnail;
