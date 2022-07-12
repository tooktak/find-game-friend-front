import { NextApiRequest, NextApiResponse } from 'next';
import testData from 'utils/testData';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const members = await testData.getMembers();

  if (req.method === 'PUT') {
    const body = req.body;
    const { email, memberId, nickname } = body;
    if (!email || !memberId || !nickname) throw 'id is too short';
    const targetIdx = members.findIndex(member => member.id === id);
    const newMember = {
      ...members[targetIdx],
      ...body,
    };
    members.splice(targetIdx, 1, newMember);
    res.status(200).json(newMember);
  } else {
    const member = members.find(member => member.id === id);
    res.status(200).json(member);
  }
};

export default handler;
