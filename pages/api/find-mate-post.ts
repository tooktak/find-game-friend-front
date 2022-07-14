import { NextApiRequest, NextApiResponse } from 'next';
import testData from '@/data/testData';

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const members = await testData.getFindMatePosts();
  res.status(200).json(members);
};

export default handler;
