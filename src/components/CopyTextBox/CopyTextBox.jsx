import React, { useState } from 'react'

import copy from 'clipboard-copy'

import Button from '@material-ui/core/Button'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Tooltip from '@material-ui/core/Tooltip'

const CopyTextBox = ({ title = '', text }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const onClick = () => {
    copy(text)
    setShowTooltip(true)
  }

  return (
    <Card>
      <CardHeader
        action={
          <Tooltip
            open={showTooltip}
            title="in die Zwischenablage kopiert"
            leaveDelay={1500}
            onClose={() => setShowTooltip(false)}
          >
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              startIcon={<FileCopyOutlinedIcon />}
              onClick={onClick}
            >
              Kopieren
            </Button>
          </Tooltip>
        }
        subheader={title}
      />
      <CardContent>
        <pre>{text}</pre>
      </CardContent>
    </Card>
  )
}

export default CopyTextBox
