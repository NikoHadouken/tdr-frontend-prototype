import React from 'react'

import Sins from '../components/tools/Sins'

const ToolPage = ({ match }) => {
  const { slug } = match.params
  return (
    <>
      <Sins />
    </>
  )
}

export default ToolPage
