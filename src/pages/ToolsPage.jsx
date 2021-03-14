import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import FolderIcon from '@material-ui/icons/Folder'

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))

const ToolsPage = () => {
  const classes = useStyles()
  const tools = [
    {
      key: 'sins',
      title: 'SINS',
      subtitle: 'Spinal Instability Neoplastic Score',
      path: '/tools/sins',
    },
  ]

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Tools
          </Typography>
          <List>
            {tools.map(({ key, title, subtitle, path }) => (
              <ListItem key={key} component={RouterLink} to={path}>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={title} secondary={subtitle} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  )
}

export default ToolsPage
