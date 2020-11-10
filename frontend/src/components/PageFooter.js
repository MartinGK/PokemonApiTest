import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    anchor:{
        color:"inherit",
        "&:hover":{
            textDecoration:"none"
        }
    }
})

export default function PageFooter() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} component="div" >
            <Grid item xs={12}>
                <Divider data-test="divider" />
            </Grid>
            <Grid item xs={7}>
                <Typography data-test="copyright">
                    Hecho por MartinGK
                </Typography>
            </Grid>
            <Grid item xs={4} >
                <Button variant="contained" color="primary" fullWidth data-test="repo-button" >
                    <Link className={classes.anchor} href='https://github.com/MartinGK/PokemonApiTest'>
                        Link a mi repo
                    </Link>
                </Button>
            </Grid>
        </Grid>
    )
}
