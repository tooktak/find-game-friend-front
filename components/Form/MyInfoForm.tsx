import { Button } from '@/components/Button';
import { TextInput, TextInputProps } from '@/components/Input';
import useFormChange from '@/hooks/useFormChange';
import styles from './MyInfoForm.module.scss';

const MyInfoFormItem = ({
  name,
  placeholder,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <section className={styles.container}>
      <label className={styles.label}>{name}</label>
      <div className={styles.input}>
        <TextInput
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </section>
  );
};

const MyInfoForm = () => {
  const [form, onChange] = useFormChange({
    memberId: '',
    name: '',
    nickname: '',
    email: '',
  });

  const { memberId, name, nickname, email } = form;

  return (
    <form>
      <MyInfoFormItem
        name="memberId"
        placeholder="ID"
        value={memberId}
        onChange={onChange}
      />
      <MyInfoFormItem
        name="name"
        placeholder="이름"
        value={name}
        onChange={onChange}
      />
      <MyInfoFormItem
        name="nickname"
        placeholder="닉네임"
        value={nickname}
        onChange={onChange}
      />
      <MyInfoFormItem
        name="email"
        placeholder="이메일"
        type="email"
        value={email}
        onChange={onChange}
      />
      <div className={styles.btnWrapper}>
        <Button size="large" rounded={false} type="submit" color="main">
          수정
        </Button>
      </div>
    </form>
  );
};

export default MyInfoForm;
