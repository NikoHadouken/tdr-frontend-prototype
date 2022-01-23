import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'

const ToolsPage = () => {
  const tools = [
    {
      key: 'sins',
      title: 'SINS',
      subtitle: 'Spinal Instability Neoplastic Score',
      path: '/tools/sins',
    },
  ]

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography
          variant="h6"
          sx={{
            margin: [4, 0, 2, 0],
          }}
        >
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
  )
}

export default ToolsPage
