import LogoHeader from '../logo/logo-header.tsx';
import HeaderNavigation from './header-navigation.tsx';

type HeaderProps = {
  disableNav?: boolean;
  isLogoActive?: boolean;
}

function Header({disableNav, isLogoActive}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <LogoHeader isActive={isLogoActive}/>
          {disableNav ? ' ' : <HeaderNavigation/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
