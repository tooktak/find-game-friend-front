import { NextApiRequest, NextApiResponse } from 'next';

const members = [
  {
    id: '1',
    memberId: 'asdfasdgasdgsadg',
    password: '0000',
    email: 'asdfg32145@google.com',
    name: '이름1',
    nickname: 'aaasdfsadfg',
    pictureURL: 'C:\\fakepath\\test.jpg',
  },
  {
    id: '2',
    memberId: 'asdfg2',
    password: '00000',
    email: 'asdfg32146@google.com',
    name: '이름2',
    nickname: 'aaasdfsadfg2',
    pictureURL: '/test1.jpg',
  },
];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
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
