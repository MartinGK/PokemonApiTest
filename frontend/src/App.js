import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import './App.css'

const useStyles = makeStyles((theme) => ({
  app: {
    padding: "1rem 3rem"
  },
  pokemonInput:{
    padding: "8px 14px"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Pokemon Finder
  </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h3">
            El que quiere Pokemons, que los busque.
    </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="pokemonInput"
            // label=""
            type="text"
            placeholder="Ingrese el nombre a buscar"
            variant="outlined"
            fullWidth
            className={classes.pokemonInput}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" fullWidth style={{alignSelf: 'center'}}>
            Primary
      </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3" component="h2">
            Resultados de la Busqueda
  </Typography>
        </Grid>
        <Grid item xs={12}  style={{height: "100%"}}>
          pokemones
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={7}>
          Hecho por MartinGK
        </Grid>
        <Grid item xs={5}>
          <Button variant="contained" color="primary" fullWidth>
            button al repo
      </Button>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
