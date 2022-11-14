import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard } from 'auth/Dashboard';
import { Login } from 'auth/Login';
import { Register } from 'auth/Register';
import { Reset } from 'auth/Reset';
import { Todos } from 'todos/Todos';

import * as ROUTES from './routes';
import { Navigation } from './Navigation';

export const App = () => (
  <BrowserRouter>
    <Navigation />

    <Routes>
      <Route index element={<Login />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.RESET} element={<Reset />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.TODOS} element={<Todos />} />
    </Routes>
  </BrowserRouter>
);
