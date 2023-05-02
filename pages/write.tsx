import WriteLayout from '@/layout/WriteLayout';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = parseCookies(context);
  const token = cookies.userInfo;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // If the token exists, you could also validate it with your backend here

  return {
    props: {}, // will be passed to the page component as props
  };
};
const Write = () => {
  return <WriteLayout />;
};

export default Write;
