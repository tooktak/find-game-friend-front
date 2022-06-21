import Header from '@/components/Header';
import HeaderRight from '@/components/HeaderRight';
import Logo from '@/components/Logo';
import Search from '@/components/Search';

const HeaderLayout = () => {
  return <Header left={<Logo />} center={<Search />} right={<HeaderRight />} />;
};

export default HeaderLayout;
