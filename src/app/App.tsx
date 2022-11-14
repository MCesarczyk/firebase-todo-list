import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as ROUTES from './routes';
import Navigation from './Navigation';
import Dashboard from '../auth/Dashboard';
import Login from '../auth/Login';
import Register from '../auth/Register';
import PasswordForget from '../auth/Reset';
import Todos from '../todos/Todos';

const App = () => (
  <BrowserRouter>
    <Navigation />

    <Routes>
      <Route index element={<Login />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.RESET} element={<PasswordForget />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.TODOS} element={<Todos />} />
    </Routes>
  </BrowserRouter>
);

export default App;
