import HeaderLogo from './header-logo.tsx';
import HeaderAuthNavigation from './header-auth-navigation.tsx';
import {memo} from 'react';

type HeaderProps = {
  disableAuthNav?: boolean;
  logoActive?: boolean;
}

function Header({disableAuthNav, logoActive}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo isActive={logoActive}/>
          {disableAuthNav ? ' ' : <HeaderAuthNavigation/>}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
