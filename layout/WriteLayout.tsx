import { FindMatePostCard } from '@/components/Card';
import { TextInput } from '@/components/Input';
import { SplitLayout } from '@/components/Layout';
import { useForm, Controller } from 'react-hook-form';
import Main from '@/components/Main';
import { useState } from 'react';

const defaultValues = {
  thumbnail: '',
  title: '',
  content: '',
  game: '',
  hashtags: [],
  kakaoLink: 'https://open.kakao.com/o/',
  discordLink: 'https://discord.gg/',
};

const WriteLayout = () => {
  const { control, handleSubmit, watch } = useForm({ defaultValues });
  const { title, content, kakaoLink, discordLink } = watch();
  const [thumbnail] = useState('');

  const onSubmit = (data: object) => {
    alert(JSON.stringify(data));
  };

  return (
    <Main>
      <SplitLayout
        left={
          <FindMatePostCard
            thumbnail={thumbnail}
            title={title}
            content={content}
            hashtags={['a', 'b', 'c']}
            kakaoLink={kakaoLink}
            discordLink={discordLink}
          />
        }
        right={
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => <TextInput {...field} />}
            />
            <Controller
              name="content"
              control={control}
              render={({ field }) => <TextInput {...field} />}
            />
            <Controller
              name="kakaoLink"
              control={control}
              render={({ field }) => <TextInput {...field} />}
            />
            <Controller
              name="discordLink"
              control={control}
              render={({ field }) => <TextInput {...field} />}
            />
          </form>
        }
      />
    </Main>
  );
};

export default WriteLayout;
