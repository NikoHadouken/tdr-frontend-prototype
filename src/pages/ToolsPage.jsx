import React from 'react'

import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const ToolsPage = () => {
  return (
    <div>
      <h2>Tools</h2>
      <Button
        variant="outlined"
        color="primary"
        component={RouterLink}
        to="/tools/sins"
      >
        SINS
      </Button>
    </div>
  )
}

export default ToolsPage
