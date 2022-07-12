import fsPromises from 'fs/promises';
import path from 'path';

const getJsonData = async <T>(file: string) => {
  const filePath = path.join(process.cwd(), `data/test/${file}`);
  const jsonData = await fsPromises.readFile(filePath);
  const members = JSON.parse(jsonData.toString()) as T;
  return members;
};

const testData = {
  getMembers: async () => {
    const data = await getJsonData<Member[]>('member.json');
    return data;
  },
  getFindMatePosts: async () => {
    const data = await getJsonData<FindMatePost[]>('find-mate-post.json');
    return data;
  },
  getGames: async () => {
    const data = await getJsonData<Game[]>('game.json');
    return data;
  },
};

export default testData;
