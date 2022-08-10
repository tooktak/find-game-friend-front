import fsPromises from 'fs/promises';
import path from 'path';

const getJsonData = async <T>(file: string) => {
  try {
    const filePath = path.join(process.cwd(), `data/test/${file}`);
    const jsonData = await fsPromises.readFile(filePath);
    const data = JSON.parse(jsonData.toString()) as T;
    return data;
  } catch (err) {
    console.error(err);
  }
};

const setJsonData = <T>(file: string, data: T) => {
  try {
    const filePath = path.join(process.cwd(), `data/test/${file}`);
    return fsPromises.writeFile(filePath, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
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
  setMembers: (data: Member[]) => {
    return setJsonData('member.json', data);
  },
  setFindMatePosts: (data: FindMatePost[]) => {
    return setJsonData('find-mate-post.json', data);
  },
  setGames: (data: Game[]) => {
    return setJsonData('game.json', data);
  },
};

export default testData;
