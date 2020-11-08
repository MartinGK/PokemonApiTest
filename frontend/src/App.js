import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Pokemon GB',
    fontSize: "62.5%"
  },
  
  overrides: {
    MuiButton: {
      root: {
        alignSelf: 'center',
        background: "linear-gradient(180deg, rgba(255,28,28,1) 0%, rgba(255,28,28,1) 49%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)",
      },
      label:{
        fontWeight:"bolder",
        color:"black"
      }
    },
  },
});


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
    gridTemplateRows: "1fr 1fr 8fr 1fr",
    gridGap: "16px"
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <Grid container spacing={3} className={classes.app}>
          <PageHeader data-test="page-header" />
          <PokemonsFinder data-test="pokemons-finder" />
          <PokemonsResult data-test="pokemons-result" />
          <PageFooter data-test="page-footer" />
        </Grid>
      </ThemeProvider>
    </Provider >
  );
}

export default App;
