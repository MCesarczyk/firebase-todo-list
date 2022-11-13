import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Account from '../Account';
import Admin from '../Admin';
import Dashboard from '../Dashboard';
import Landing from '../Landing';
import Login from '../Login';
import Navigation from '../Navigation';
import PasswordForget from '../PasswordForget';
import Register from '../Register';

const App = () => (
  <BrowserRouter>
    <Navigation />

    <hr />

    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.RESET} element={<PasswordForget />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.ACCOUNT} element={<Account />} />
      <Route path={ROUTES.ADMIN} element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default App;