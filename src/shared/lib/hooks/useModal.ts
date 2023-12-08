import React from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const onOpen = React.useCallback(() => setIsOpen(true), [])
  const onClose = React.useCallback(() => setIsOpen(false), [])

  return {
    isOpen,
    onOpen,
    onClose,
  }
}
