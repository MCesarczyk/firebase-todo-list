import { HashRouter, Route, Routes } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "services/firebase";

import { Dashboard } from 'auth/Dashboard';
import { Login } from 'auth/Login';
import { Register } from 'auth/Register';
import { Reset } from 'auth/Reset';
import { Todos } from 'todos/Todos';

import * as ROUTES from 'app/routes';
import { ProtectedRoute } from 'auth/ProtectedRoute';
import { Navigation } from 'components';

export const App = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <HashRouter>
      <Navigation
        routes={[
          {
            path: ROUTES.DASHBOARD,
            label: "Dashboard",
          },
          {
            path: ROUTES.TODOS,
            label: "Todos",
          },
        ]}
      />
      <Routes>
        <Route index element={<Login />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.RESET} element={<Reset />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard user={user} loading={loading} error={error} />} />
          <Route path={ROUTES.TODOS} element={<Todos />} />
        </Route>
      </Routes>
    </HashRouter>
  )
};
