import { Button } from '@/components/Button';

const TestLayout = () => {
  const test = () => {
    console.log('test');
  };
  return (
    <>
      <div>
        <Button onClick={test} disabled>
          테스트
        </Button>
        <Button color="main" onClick={test} disabled>
          테스트
        </Button>
        <Button color="tag" onClick={test} disabled>
          테스트
        </Button>
        <Button outline onClick={test} disabled>
          테스트
        </Button>
        <Button color="main" outline onClick={test} disabled>
          테스트
        </Button>
        <Button color="tag" outline onClick={test} disabled>
          테스트
        </Button>
      </div>
      <div>
        <Button size="small" onClick={test}>
          테스트
        </Button>
        <Button size="small" color="main" onClick={test}>
          테스트
        </Button>
        <Button size="small" color="tag" onClick={test}>
          테스트
        </Button>
        <Button size="small" outline onClick={test}>
          테스트
        </Button>
        <Button size="small" color="main" outline onClick={test}>
          테스트
        </Button>
        <Button size="small" color="tag" outline onClick={test}>
          테스트
        </Button>
      </div>
      <div>
        <Button onClick={test}>테스트</Button>
        <Button color="main" onClick={test}>
          테스트
        </Button>
        <Button color="tag" onClick={test}>
          테스트
        </Button>
        <Button outline onClick={test}>
          테스트
        </Button>
        <Button color="main" outline onClick={test}>
          테스트
        </Button>
        <Button color="tag" outline onClick={test}>
          테스트
        </Button>
      </div>
      <div>
        <Button size="large" onClick={test}>
          테스트
        </Button>
        <Button size="large" color="main" onClick={test}>
          테스트
        </Button>
        <Button size="large" color="tag" onClick={test}>
          테스트
        </Button>
        <Button size="large" outline onClick={test}>
          테스트
        </Button>
        <Button size="large" color="main" outline onClick={test}>
          테스트
        </Button>
        <Button size="large" color="tag" outline onClick={test}>
          테스트
        </Button>
      </div>
    </>
  );
};

export default TestLayout;
