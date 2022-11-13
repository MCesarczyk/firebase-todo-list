import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Account from '../Account';
import Admin from '../Admin';
import Home from '../Home';
import Landing from '../Landing';
import Navigation from '../Navigation';
import PasswordForget from '../PasswordForget';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const App = () => (
  <BrowserRouter>
    <Navigation />

    <hr />

    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForget />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ACCOUNT} element={<Account />} />
      <Route path={ROUTES.ADMIN} element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default App;