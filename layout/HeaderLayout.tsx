import Header from '@/components/Header';
import LoginMenu from '@/components/LoginMenu';
import Logo from '@/components/Logo';
import SearchForm from '@/components/Form/SearchForm';

const HeaderLayout = () => {
  return (
    <Header left={<Logo />} center={<SearchForm />} right={<LoginMenu />} />
  );
};

export default HeaderLayout;
