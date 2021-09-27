import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";

const NoMathRoutes = ({match: {url}}) => {
    let location = useLocation();
  
    return (
        <Switch>
            <Route path={`${url}/`} >
                <div>
                    <h1>SORRY! (._.")</h1>
                    <h3>
                        A página "<code>{location.pathname}</code>" não foi encontrada!
                    </h3>
                </div>
            </Route>
        </Switch>
    );
}

export default NoMathRoutes;