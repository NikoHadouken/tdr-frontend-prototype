import React, { useState } from 'react'

import copy from 'clipboard-copy'

import { makeStyles } from '@material-ui/core/styles'

import Snackbar from '@material-ui/core/Snackbar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
import CloseIcon from '@material-ui/icons/Close'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((_theme) => ({
  title: {
    flexGrow: 1,
  },
}))

const CopyTextBox = ({ title = '', text }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    copy(text)
    setOpen(true)
  }

  const handleClose = (_e, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <Toolbar>
        <h3 className={classes.title}>{title}</h3>
        <Tooltip title="Text kopieren">
          <IconButton
            aria-label="copy to clipboard"
            className={classes.copyButton}
            onClick={handleClick}
          >
            <FileCopyOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Card variant="outlined">
        <CardContent>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{text}</pre>
        </CardContent>
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Text in die Zwischenablage kopiert"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  )
}

export default CopyTextBox
