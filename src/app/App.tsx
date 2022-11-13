import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as ROUTES from './routes';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Navigation from './Navigation';
import Register from '../views/Register';
import PasswordForget from '../views/Reset';
import Account from '../views/Account';
import Admin from '../views/Admin';

const App = () => (
  <BrowserRouter>
    <Navigation />

    <hr />

    <Routes>
      <Route index element={<Login />} />
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
