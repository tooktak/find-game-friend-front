type FindMatePost = {
  id: string;
  title: string;
  contents: string;
  kakaoLink: string;
  discordLink: string;
  latestPullUpDateTime: string;
  memberId: string;
  gameId: string;
};

type AddFindMatePost = Omit<FindMatePost, 'id' | 'latestPullUpDateTime'>;

type SearchCategory = 'gameId' | 'game' | 'title' | 'contents';

type Member = {
  sub: string;
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
  id: number;
  title: string;
  thumbnailURL: string;
};

type MyInfo = {
  memberId: string;
  name: string;
  nickname: string;
  email: string;
};
