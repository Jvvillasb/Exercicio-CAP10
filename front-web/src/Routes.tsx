import { Route, Router, Switch } from 'react-router-dom'
import NavBar from './core/components/NavBar';
import history from './core/utils/history';
import Login from './pages/Login'
import Movies from './pages/Movies';
import MoviewDetails from './pages/Movies/Components/MovieDetails';


const Routes = () => {
    return (
        <Router history={history}>
            <NavBar/>
            <Switch>
            <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/movies" exact>
                <Movies/>
            </Route>
            <Route path="/movies/:movieId">
                <MoviewDetails />
            </Route>
        </Switch>
        </Router>
        
    )
}

export default Routes;