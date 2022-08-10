import { NextApiRequest, NextApiResponse } from 'next';
import testData from '@/data/testData';

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const games = await testData.getGames();
  res.status(200).json(games);
};

export default handler;
