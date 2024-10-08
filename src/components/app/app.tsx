import MainPage, {MainPageProps} from '../../pages/main-page/main-page.tsx';

type AppProps = {
  mainPageProps: MainPageProps;
}

function App({ mainPageProps } : AppProps): JSX.Element {
  return (
    <MainPage rentOffersCount={mainPageProps.rentOffersCount}
      favoriteCount={mainPageProps.favoriteCount}
      userName={mainPageProps.userName}
    />
  );
}

export default App;
