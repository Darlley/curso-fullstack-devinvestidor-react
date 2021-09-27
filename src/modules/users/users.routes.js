import {
  Switch,
  Route,
} from "react-router-dom";

const UsersRoutes = ({match: {url}}) => {
    return (
        <Switch>
            <Route path={`${url}/`} component={() => <>Users sub</>} />
        </Switch>
    );
}

export default UsersRoutes;