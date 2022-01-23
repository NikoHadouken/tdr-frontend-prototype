import React from 'react'
import { useParams } from 'react-router-dom'
import { Alert } from '@mui/material'
import Sins from '@/components/tools/Sins'

const ToolPage = () => {
  const { toolKey = '' } = useParams()

  const components = {
    sins: Sins,
  }
  const toolExists = Object.keys(components).includes(toolKey)
  const Tool = components[toolKey]

  return (
    <div>
      {toolExists ? (
        <Tool />
      ) : (
        <Alert severity="info">Dieses Tool scheint nicht zu existieren</Alert>
      )}
    </div>
  )
}

export default ToolPage
