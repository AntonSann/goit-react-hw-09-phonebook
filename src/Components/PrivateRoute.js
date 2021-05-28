import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../Redux/Auth';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */

export default function PrivateRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {

const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};