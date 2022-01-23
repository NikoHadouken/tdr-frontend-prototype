import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'

const HomePage = () => {
  return (
    <>
      <h2>Title</h2>
      <Grid container>
        <Grid item>
          <Card
            sx={{
              maxWidth: 345,
            }}
          >
            <CardActionArea component={RouterLink} to="/tools/sins">
              <CardMedia
                component="img"
                alt="SINS"
                height="160"
                image="/tdr-frontend-prototype/img/cards/pexels-anna-shvets-4226258.jpg"
                title="SINS"
                sx={{
                  backgroundPosition: 'calc(50% - 50px) calc(50% - 10px)',
                }}
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
