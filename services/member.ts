import fetcher from '@/libs/fetcher';

const login = async ({
  memberId,
  password,
}: {
  memberId: string;
  password: string;
}) => {
  const response = await fetcher.post<Member>('/login', {
    memberId,
    password,
  });
  return response.data;
};

const member = { login };

export default member;
