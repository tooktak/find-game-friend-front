type FindMatePost = {
  id: string;
  title: string;
  contents: string;
  hashtag: string[];
  kakaoLink: string;
  discordLink: string;
  latestPullUpDateTime: string;
  memberId: string;
  gameId: string;
  game?: {
    id: string;
    title: string;
    thumbnailURL: string;
  };
};

type AddFindMatePost = Omit<
  FindMatePost,
  'id' | 'latestPullUpDateTime' | 'game'
>;

type SearchCategory = 'gameId' | 'game' | 'title' | 'hashtag' | 'contents';

type Member = {
  id: string;
  memberId: string;
  password: string;
  email: string;
  nickname: string;
  pictureURL: string;

  name: string;
  address: string;
  gender: string;
  age: string;
};

type MenuLink = {
  title: string;
  href: string;
  onClick?: () => void;
};

type Game = {
  id: string;
  title: string;
  thumbnailURL: string;
};

type MyInfo = {
  memberId: string;
  name: string;
  nickname: string;
  email: string;
};
