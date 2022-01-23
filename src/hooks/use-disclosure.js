import React from 'react'

export const useDisclosure = () => {
  const [isOpen, setOpen] = React.useState(undefined)
  return {
    isOpen,
    close() {
      setOpen(false)
    },
    open() {
      setOpen(true)
    },
    toggle() {
      setOpen((open) => !open)
    },
  }
}
