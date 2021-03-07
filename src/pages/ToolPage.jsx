import React from 'react'

const ToolPage = ({ match }) => {
  const { slug } = match.params
  return <div>Tool Page {slug}</div>
}

export default ToolPage
