import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [locationState, setLocationState] = useState(false)
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        locationState,
        setLocationState,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}
