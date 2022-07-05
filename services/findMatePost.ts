import fetcher from '@/libs/fetcher';

const findAll = async () => {
  const response = await fetcher.get<FindMatePost[]>('/find-mate-post');
  return response.data;
};

const findById = async (id: string) => {
  const response = await fetcher.get<FindMatePost>(`/find-mate-post/${id}`);
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
  const response = await fetcher.post<string>('/find-mate-post', {
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
  const response = await fetcher.put<string>(`/find-mate-post/${id}`, {
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
  const response = await fetcher.delete<string>(`/find-mate-post/${id}`);
  return response.data;
};

const findMatePost = {
  findAll,
  findById,
  create,
  update,
  remove,
};

export default findMatePost;
