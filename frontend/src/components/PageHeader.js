import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function PageHeader() {
    return (
        <Grid container component="header" spacing={3} xs style={{
            padding: "20px 0px"
        }}>
            <Grid item xs={12} >
                <Typography variant="h2" component="h1" data-test="page-title">
                    Pokemon Finder
  </Typography>
                <Typography variant="h5" component="h3" data-test="page-subtitle">
                    El que quiere Pokemons, que los busque.
    </Typography>
            </Grid>
        </Grid>
    )
}
