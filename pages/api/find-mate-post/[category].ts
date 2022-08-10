import { NextApiRequest, NextApiResponse } from 'next';
import testData from '@/data/testData';

type SearchUrl =
  | 'by-id-page'
  | 'by-game-page'
  | 'by-hashtag-page'
  | 'by-contents-page'
  | 'by-title-page';

type SearchQuery = {
  q: string;
  page?: number;
  size?: number;
};

const searchFindMatePosts = {
  byGameId: (findMatePosts: FindMatePost[], { q }: SearchQuery) => {
    const filteredFindMatePosts = findMatePosts.filter(
      findMatePost => findMatePost.gameId === q,
    );
    return filteredFindMatePosts;
  },
  byGame: async (findMatePosts: FindMatePost[], { q }: SearchQuery) => {
    const games = await testData.getGames();

    if (typeof games === 'undefined') return;

    const filteredGames = games.filter(game => game.title.indexOf(q) > -1);
    const filteredGameIds = filteredGames.map(game => game.id);
    const filteredFindMatePosts = findMatePosts.filter(post =>
      filteredGameIds.includes(post.gameId),
    );
    return filteredFindMatePosts;
  },
  byHashtag: (findMatePosts: FindMatePost[], { q }: SearchQuery) => {
    const filteredFindMatePosts = findMatePosts.filter(post =>
      post.hashtag.includes(q),
    );
    return filteredFindMatePosts;
  },
  byContents: (findMatePosts: FindMatePost[], { q }: SearchQuery) => {
    const filteredFindMatePosts = findMatePosts.filter(post =>
      post.contents.includes(q),
    );
    return filteredFindMatePosts;
  },
  byTitle: (findMatePosts: FindMatePost[], { q }: SearchQuery) => {
    const filteredFindMatePosts = findMatePosts.filter(post =>
      post.title.includes(q),
    );
    return filteredFindMatePosts;
  },
};

const getFilteredFindMatePosts = ({
  category,
  findMatePosts,
  query,
}: {
  category: SearchUrl;
  findMatePosts: FindMatePost[];
  query: SearchQuery;
}) => {
  switch (category) {
    case 'by-id-page':
      return searchFindMatePosts.byGameId(findMatePosts, query);
    case 'by-game-page':
      return searchFindMatePosts.byGame(findMatePosts, query);
    case 'by-hashtag-page':
      return searchFindMatePosts.byHashtag(findMatePosts, query);
    case 'by-contents-page':
      return searchFindMatePosts.byContents(findMatePosts, query);
    case 'by-title-page':
      return searchFindMatePosts.byTitle(findMatePosts, query);
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { q, category } = req.query as { q: string; category: SearchUrl };
  const findMatePosts = await testData.getFindMatePosts();
  const query = { q };

  if (typeof findMatePosts === 'undefined') return;

  const filteredFindMatePosts = await getFilteredFindMatePosts({
    category,
    findMatePosts,
    query,
  });
  res.status(200).json(filteredFindMatePosts);
};

export default handler;
