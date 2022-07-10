import fetcher from '@/libs/fetcher';

const findById = async (id: string) => {
  const response = await fetcher.get<Member>(`/member/${id}`);
  return response.data;
};

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

const update = async ({
  id,
  memberId,
  email,
  nickname,
}: {
  id: string;
  memberId: string;
  email: string;
  nickname: string;
}) => {
  const response = await fetcher.put<string>(`/member/${id}`, {
    memberId,
    email,
    nickname,
  });
  return response.data;
};

const updatePicture = async ({
  id,
  pictureURL,
}: {
  id: string;
  pictureURL: string;
}) => {
  const response = await fetcher.put<string>(`/member/${id}`, { pictureURL });
  return response.data;
};

const member = { findById, login, update, updatePicture };

export default member;
