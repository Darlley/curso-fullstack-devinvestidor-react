import {
  Switch,
  Route,
} from "react-router-dom";

const TasksRoutes = ({match: {url}}) => {
    return (
        <Switch>
            <Route path={`${url}/`} component={() => <>Tasks sub</>} />
        </Switch>
    );
}

export default TasksRoutes;