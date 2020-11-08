import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


export default function PageFooter() {
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
                    Link a mi repo
      </Button>
            </Grid>
        </Grid>
    )
}
