import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ id: 1 });
};

export default handler;
