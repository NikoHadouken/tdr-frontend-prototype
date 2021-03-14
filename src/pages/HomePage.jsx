import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  sinsCardImg: {
    backgroundPosition: 'calc(50% - 50px) calc(50% - 10px)',
  },
})

const HomePage = () => {
  const classes = useStyles()
  return (
    <>
      <h2>Title</h2>
      <Grid container>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea component={RouterLink} to="/tools/sins">
              <CardMedia
                component="img"
                alt="SINS"
                height="160"
                image="/tdr-frontend-prototype/img/cards/pexels-anna-shvets-4226258.jpg"
                title="SINS"
                className={classes.sinsCardImg}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  SINS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The Spinal Instability Neoplastic Score (SINS) was developed
                  for assessing patients with spinal neoplasia. It identifies
                  patients who may benefit from surgical consultation or
                  intervention. It also acts as a prognostic tool for surgical
                  decision making.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
