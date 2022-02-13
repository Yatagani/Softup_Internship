import React, { FC } from 'react';
import Header from './Header';

const Layout: FC<unknown> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
