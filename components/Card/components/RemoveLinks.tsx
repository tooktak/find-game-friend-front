import styles from './RemoveLinks.module.scss';
import cx from '@/styles/cx';
import { ReactNode } from 'react';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';

export const RemoveIconContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

const RemoveLink = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleDelete = () => {
    const isCheck = confirm('정말 삭제하시겠습니까?');
    if (isCheck && id !== undefined) {
      axios
        .delete('https://api.aribomy.com/find-mate-post/delete/' + id, {
          withCredentials: true,
        })
        .then(() => {
          router.push('/mypost');
          //성공적으로 데이터 전송
        })
        .catch(error => {
          console.log(error);
          //데이터 전송 실패
        });
    }
  };

  const className = cx(styles)('linkContainer', 'remove');
  return (
    <div className={className} onClick={handleDelete}>
      <MdDelete />
    </div>
  );
};

/*const RemoveLink = ({ id }: { id: string }) => {
  const className = cx(styles)('linkContainer', 'remove');
  return (
    <a
      className={className}
      href={'http://localhost:8080/find-mate-post/remove' + id}
    >
      <div>
        <MdDelete />
      </div>
    </a>
  );
};*/

const RemoveLinks = ({ remove }: { remove: string }) => {
  return (
    <RemoveIconContainer>
      {remove && <RemoveLink id={remove} />}
    </RemoveIconContainer>
  );
};

export default RemoveLinks;
