import ColorButton from '../components/ColorButton/ColorButton';
import { MainPageProps } from './interfaces';
import { MainPageContent, BackgroundImg, Moon, Stars } from './styles';

const MainPage = ({ setSelectedTheme }: MainPageProps) => {
  return (
    <MainPageContent>
      <Stars />
      <Moon />
      <BackgroundImg></BackgroundImg>
    </MainPageContent>
  );
};

export default MainPage;
