import { Link } from "react-router-dom";

import * as ROUTES from './routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.DASHBOARD}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;