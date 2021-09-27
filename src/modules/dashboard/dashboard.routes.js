import {
  Switch,
  Route,
} from "react-router-dom";

const DashboardRoutes = ({match: {url}}) => {
    return (
        <Switch>
            <Route path={`${url}/`} component={() => <>Dashboard sub</>} />
        </Switch>
    );
}

export default DashboardRoutes;