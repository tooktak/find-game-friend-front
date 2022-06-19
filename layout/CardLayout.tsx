import FindMatePostCard from '@/components/FindMatePostCard';
import GridLayout from '@/components/GridLayout';

const CardLayout = () => {
  return (
    <main>
      <GridLayout>
        <FindMatePostCard
          thumbnail="/google-extention-architecture.png"
          title="titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..."
          kakaoLink="http://google.com"
          discordLink="http://google.com"
          content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          hashtags={['aaa', 'bbb']}
        />
        <FindMatePostCard
          thumbnail="/test.jpg"
          title="title..."
          kakaoLink="http://google.com"
          discordLink="http://google.com"
          content="content..."
          hashtags={['aaa', 'bbb']}
        />
        <FindMatePostCard
          thumbnail="/logo.jpg"
          title="title..."
          kakaoLink="http://google.com"
          discordLink="http://google.com"
          content="content..."
          hashtags={['aaa', 'bbb']}
        />
        <FindMatePostCard
          thumbnail="/test1.png"
          title="title..."
          kakaoLink="http://google.com"
          discordLink="http://google.com"
          content="content..."
          hashtags={['aaa', 'bbb']}
        />
        <FindMatePostCard
          thumbnail="/test.jpg"
          title="title..."
          kakaoLink="http://google.com"
          discordLink="http://google.com"
          content="content..."
          hashtags={['aaa', 'bbb']}
        />
        <FindMatePostCard
          thumbnail="/test.jpg"
          title="title..."
          kakaoLink="http://google.com"
          discordLink="http://google.com"
          content="content..."
          hashtags={['aaa', 'bbb']}
        />
        <FindMatePostCard
          thumbnail="/test.jpg"
          title="title..."
          kakaoLink="http://google.com"
          discordLink="http://google.com"
          content="content..."
          hashtags={['aaa', 'bbb']}
        />
      </GridLayout>
    </main>
  );
};

export default CardLayout;
