import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../Redux/Auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return(
  <header style={styles.header}>
  <Navigation />
  {isAuthenticated ? <UserMenu /> : <AuthNav />}
</header>
);
};