import { createContext, useContext, useState } from 'react'

const InfoContext = createContext()

export default function InfoProvider({ children }) {
  const [guests, setGuests] = useState(0)
  const [adults, setAdults] = useState(0)
  const [child, setChild] = useState(0)
  const [location, setLocation] = useState({ city: '' })

  const addGuest = (type) => {
    if (type === 'adults') {
      setAdults((prev) => prev + 1)
      setGuests((prev) => prev + 1)
    }
    if (type === 'children') {
      setChild((prev) => prev + 1)
      setGuests((prev) => prev + 1)
    }
  }

  const dimGuest = (type) => {
    if (type === 'adults' && adults > 0) {
      setAdults((prev) => prev - 1)
      setGuests((prev) => prev - 1)
    }
    if (type === 'children' && child > 0) {
      setChild((prev) => prev - 1)
      setGuests((prev) => prev - 1)
    }
  }

  return (
    <InfoContext.Provider
      value={{
        adults,
        guests,
        child,
        location,
        setLocation,
        addGuest,
        dimGuest,
      }}
    >
      {children}
    </InfoContext.Provider>
  )
}

export function useInfo() {
  return useContext(InfoContext)
}
