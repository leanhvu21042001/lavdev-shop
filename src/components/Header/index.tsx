import React from 'react';
import { useMediaQueryLargerTablet } from 'src/hooks/useMediaQuery';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => {
  const isLargerThanTablet = useMediaQueryLargerTablet();

  return <>{isLargerThanTablet ? <HeaderDesktop /> : <HeaderMobile />}</>;
};

export default Header;
