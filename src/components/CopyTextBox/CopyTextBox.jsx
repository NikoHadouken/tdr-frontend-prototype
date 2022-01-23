import React, { useState } from 'react'
import copy from 'clipboard-copy'
import {
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'

const CopyTextBox = ({ title = '', text }) => {
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
        <Typography
          variant="h3"
          sx={{
            flexGrow: 1,
          }}
        >
          {title}
        </Typography>
        <Tooltip title="Text kopieren">
          <IconButton aria-label="copy to clipboard" onClick={handleClick}>
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
