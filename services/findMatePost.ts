import fetcher from '@/libs/fetcher';

const findAll = async () => {
  const response = await fetcher.get<FindMatePost[]>('/findMatePost');
  return response.data;
};

const findById = async (id: string) => {
  const response = await fetcher.get<FindMatePost>(`/findMatePost/${id}`);
  return response.data;
};

const create = async ({
  title,
  contents,
  hashtag,
  kakaoLink,
  discordLink,
  memberId,
  gameId,
}: FindMatePost) => {
  const response = await fetcher.post<string>('/findMatePost', {
    title,
    contents,
    hashtag,
    kakaoLink,
    discordLink,
    memberId,
    gameId,
  });
  return response.data;
};

const update = async (
  id: string,
  { title, contents, hashtag, kakaoLink, discordLink, gameId }: FindMatePost,
) => {
  const response = await fetcher.put<string>(`/findMatePost/${id}`, {
    title,
    contents,
    hashtag,
    kakaoLink,
    discordLink,
    gameId,
  });
  return response.data;
};

const remove = async (id: string) => {
  const response = await fetcher.delete<string>(`/findMatePost/${id}`);
  return response.data;
};

const findMatePostService = {
  findAll,
  findById,
  create,
  update,
  remove,
};

export default findMatePostService;
