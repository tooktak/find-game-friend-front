import Header from '@/components/Header';
import LoginMenu from '@/components/LoginMenu';
import Logo from '@/components/Logo';
import Search from '@/components/Search';

const HeaderLayout = () => {
  return <Header left={<Logo />} center={<Search />} right={<LoginMenu />} />;
};

export default HeaderLayout;
