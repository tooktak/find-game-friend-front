import fetcher from '@/libs/fetcher';

const getUrlByType = (category: SearchCategory) => {
  switch (category) {
    case 'gameId':
      return '/post/by-id-page';
    case 'game':
      return '/post/by-game-page';
    case 'title':
      return '/find-mate-post/by-title-page';
    case 'contents':
      return '/post/by-contents-page';
  }
};

const findAll = async () => {
  const response = await fetcher.get<FindMatePost[]>('/find-mate-post/post');
  return response.data;
};

const search = async ({
  category,
  q,
  page,
  size,
}: {
  category: SearchCategory;
  q: string;
  page: string;
  size: string;
}) => {
  const url = getUrlByType(category);
  const params = {
    q,
    page,
    size,
  };
  const response = await fetcher.get<FindMatePost[]>(url, { params });
  return response.data;
};

const findById = async (id: string) => {
  const response = await fetcher.get<FindMatePost>(`/find-mate-post/${id}`);
  return response.data;
};

const create = async ({
  title,
  contents,
  kakaoLink,
  discordLink,
  memberId,
  gameId,
}: FindMatePost) => {
  const response = await fetcher.post<string>('/find-mate-post', {
    title,
    contents,
    kakaoLink,
    discordLink,
    memberId,
    gameId,
  });
  return response.data;
};

const update = async (
  id: string,
  { title, contents, kakaoLink, discordLink, gameId }: FindMatePost,
) => {
  const response = await fetcher.put<string>(`/find-mate-post/${id}`, {
    title,
    contents,
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
  search,
  findById,
  create,
  update,
  remove,
};

export default findMatePost;
