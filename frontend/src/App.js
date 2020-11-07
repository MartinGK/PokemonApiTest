import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import './App.css'

const useStyles = makeStyles((theme) => ({
  app: {
    padding: "1rem 3rem"
  },
  pokemonInput: {
    '& div input': {
      padding: "8px 14px"
    }
  },
  searchInputButton: {
    alignSelf: 'center'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" data-test="page-title">
            Pokemon Finder
  </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h3" data-test="page-subtitle">
            El que quiere Pokemons, que los busque.
    </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="pokemonInput"
            value={null}
            type="text"
            placeholder="Ingrese el nombre a buscar"
            variant="outlined"
            fullWidth
            data-test="search-input"
            className={classes.pokemonInput}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.searchInputButton}
            data-test="search-button">
            Buscar
      </Button>
        </Grid>

        <Grid item xs={12}>
          <Container data-test="search-result-container" component="div">
            {/* TODO: SEARCH RESULT */}
            <Typography variant="h3" component="h2" >
              Resultados de la Busqueda
  </Typography>
            <Grid item xs={12} style={{ height: "100%" }}>
              pokemones
        </Grid>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container data-test="page-footer" component="div">
            {/* TODO: FOOTER */}
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={7}>
              Hecho por MartinGK
        </Grid>
            <Grid item xs={5}>
              <Button variant="contained" color="primary" fullWidth>
                Link a mi repo
      </Button>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
