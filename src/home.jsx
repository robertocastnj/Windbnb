import { useModal } from './context/modal-context'
import Modal from './components/modal'
import Header from './components/header'
import CardContainer from './components/card-container'
import { useData } from './context/data-context'
import { useInfo } from './context/info-context'
import { createContext, useContext, useState, useEffect } from 'react'

export default function Home() {
  const { isOpen } = useModal()
  const { location, guests } = useInfo()
  const { data, setIsLoading, setisShow } = useData()
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    if (!data) return

    let result = [...data]
    setIsLoading(true)
    setisShow(false)
    if (location && location.city.trim() !== '') {
      result = result.filter(
        (item) => item.city.toLowerCase() === location.city.toLowerCase()
      )
    }

    if (guests && guests > 0) {
      result = result.filter((item) => item.maxGuests >= guests)
    }
    setIsLoading(false)
    setFiltered(result)
    setisShow(true)
  }, [data, location, guests])

  return (
    <>
      {isOpen && <Modal />}
      <Header />
      <CardContainer data={filtered} />
    </>
  )
}
