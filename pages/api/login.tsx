import { NextApiRequest, NextApiResponse } from 'next';

const getFindMatePost = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ id: 1 });
};

export default getFindMatePost;
