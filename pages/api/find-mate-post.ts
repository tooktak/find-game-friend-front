import { NextApiRequest, NextApiResponse } from 'next';
import testData from '@/data/testData';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const findMatePosts = await testData.getFindMatePosts();
  if (typeof findMatePosts === 'undefined') return;

  if (req.method === 'POST') {
    const newFindMatePost = req.body as AddFindMatePost;
    const lastIdx =
      findMatePosts.length === 0 ? 0 : Number(findMatePosts[0].id);
    // if (!email || !memberId || !nickname) throw 'id is too short';
    findMatePosts.unshift({
      id: (lastIdx + 1).toString(),
      latestPullUpDateTime: Date.now().toString(),
      ...newFindMatePost,
    });
    testData.setFindMatePosts(findMatePosts);
    res.status(200).json({
      id: (lastIdx + 1).toString(),
      latestPullUpDateTime: Date.now().toString(),
      ...newFindMatePost,
    });
  } else {
    const games = await testData.getGames();
    const newFindMatePosts = findMatePosts.map(findMatePost => {
      const { gameId } = findMatePost;
      const myThumbnailURL = games?.find(e => e.id === gameId);
      return { ...findMatePost, game: myThumbnailURL };
    });
    res.status(200).json(newFindMatePosts);
  }
};

export default handler;
