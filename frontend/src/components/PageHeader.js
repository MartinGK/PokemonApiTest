import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        padding: "20px 0px 0px 0px",
    },
    pageTitle: {
        fontFamily: "Pokemon",
        fontSize: "4.5rem",
        color: "#FCCB05",
        textShadow: "0 1px 0px #3A57A5,1px 0 0px #3A57A5,1px 2px 1px #3A57A5,2px 1px 1px #3A57A5,2px 3px 2px #3A57A5,3px 2px 2px #3A57A5,3px 4px 2px #3A57A5,4px 3px 3px #3A57A5,4px 5px 3px #3A57A5,5px 4px 2px #3A57A5,5px 6px 2px #3A57A5,6px 5px 2px #3A57A5,6px 7px 1px #3A57A5,7px 6px 1px #3A57A5,7px 8px 0px #3A57A5,8px 7px 0px #3A57A5",
        // textShadow: "5px 5px #3A57A5"
    },
    pageSubtitle: {
        fontFamily: "Pokemon GB",
        fontSize:"1rem",
        padding: "10px 0px"
    }
})

export default function PageHeader() {
    const classes = useStyles();

    return (
        <Grid container component="header" spacing={3} className={classes.header}>
            <Grid item xs={12} >
                <Typography variant="h2" component="h1" data-test="page-title" className={classes.pageTitle}>
                    Pokemon Finder
  </Typography>
                <Typography variant="h5" component="h3" data-test="page-subtitle" className={classes.pageSubtitle}>
                    El que quiere Pokemons, que los busque.
    </Typography>
            </Grid>
        </Grid>
    )
}
