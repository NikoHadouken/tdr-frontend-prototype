import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import Alert from '@material-ui/lab/Alert'

import Sins from '../components/tools/Sins'

const ToolPage = () => {
  const {
    params: { slug },
  } = useRouteMatch()

  /*
  const { slug } = match.params
  */
  const components = {
    sins: Sins,
  }
  const toolExists = Object.keys(components).includes(slug)
  const Tool = components[slug]

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
