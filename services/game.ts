import fetcher from '@/libs/fetcher';

const findAll = async () => {
  const response = await fetcher.get<Game[]>('/game');
  return response.data;
};

const findOne = async () => {
  const response = await fetcher.get<Game['thumbnailURL']>('/game');
  return response.data;
};

const create = async ({ title, thumbnailURL }: Game) => {
  const response = await fetcher.post<string>('/game', {
    title,
    thumbnailURL,
  });
  return response.data;
};

const update = async (id: string, { title, thumbnailURL }: Game) => {
  const response = await fetcher.put<string>(`/game/${id}`, {
    title,
    thumbnailURL,
  });
  return response.data;
};

const remove = async (id: string) => {
  const response = await fetcher.delete<string>(`/game/${id}`);
  return response.data;
};

const findMatePost = {
  findAll,
  create,
  update,
  remove,
  findOne,
};

export default findMatePost;
