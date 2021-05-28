
import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from '../Components/AppBar';
import Container from '../Components/Container/Container';
import { authOperations } from '../Redux/Auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomeView = lazy(() => import('../Views/HomeView'));
const RegisterView = lazy(() => import('../Views/RegisterView'));
const LoginView = lazy(() => import('../Views/LoginView'));
const ContactsView = lazy(() => import('../Views/ContactsView'));

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute path="/register" restricted
            redirectTo="/contacts" component={RegisterView} />
          <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView} />
          <PrivateRoute path="/contacts" redirectTo="/login" component={ContactsView} />
        </Switch>
      </Suspense>
    </Container>
  );
};


/* class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute path="/register" restricted
              redirectTo="/contacts" component={RegisterView} />
            <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView} />
            <PrivateRoute path="/contacts" redirectTo="/login" component={ContactsView} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App); */