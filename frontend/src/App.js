import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from 'store/reducers';
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import './App.css';
import PokemonsFinder from 'components/PokemonsFinder';
import PageHeader from 'components/PageHeader';
import PageFooter from 'components/PageFooter';
import PokemonsResult from 'components/PokemonsResult';

const store = createStore(
  allReducers,
  Boolean(window.__REDUX_DEVTOOLS_EXTENSION__)
    ?
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        serialize: true,
        trace: true,
        traceLimit: 25
      })
    ) : applyMiddleware(thunkMiddleware)
);

const useStyles = makeStyles((theme) => ({
  app: {
    padding: "1rem 3rem",
    height: '100vh',
    display: 'grid',
    gridTemplateRows:"1fr 1fr 8fr 1fr"
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store} >
      <Grid container spacing={3} className={classes.app}>
        <PageHeader data-test="page-header" />
        <PokemonsFinder data-test="pokemons-finder" />
        <PokemonsResult data-test="pokemons-result" />
        <PageFooter data-test="page-footer" />
      </Grid>
    </Provider >
  );
}

export default App;
