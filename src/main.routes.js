import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import DashboardRoutes from "modules/dashboard/dashboard.routes";
import UsersRoutes from "modules/users/users.routes";
import TasksRoutes from "modules/tasks/tasks.routes";
import NoMathRoutes from "modules/nomath/404.routes";

const MainRoutes = () => {
    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/usuario">Usuários</Link>
                </li>
                <li>
                  <Link to="/tarefas">Tarefas</Link>
                </li>
              </ul>
            </nav>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/dashboard" component={DashboardRoutes} />
              <Route path="/usuario" component={UsersRoutes} />
              <Route path="/tarefas" component={TasksRoutes} />
              <Route path="*" component={NoMathRoutes} />
              <Redirect to="/dashboard" />
            </Switch>
          </div>
        </Router>
      );
}

export default MainRoutes;