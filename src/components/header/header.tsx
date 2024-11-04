import LogoHeaderLeft from '../logo/logo-header-left.tsx';
import HeaderNavigation from './header-navigation.tsx';

type HeaderProps = {
  disableNav?: boolean;
}

function Header({disableNav}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <LogoHeaderLeft/>
          {disableNav ? ' ' : <HeaderNavigation/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
