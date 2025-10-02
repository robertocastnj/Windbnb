import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const DataContext = createContext()

export default function DataProvide({ children }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isShow, setisShow] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get('/cities.json')
      .then((response) => {
        setIsLoading(false)
        setData(response.data)
        setisShow(true)
      })
      .catch((error) => {
        setIsLoading(false)
        setIsError(true)
        console.error('Error al obtener los datos:', error)
      })
  }, [])

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        isShow,
        setisShow,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  return useContext(DataContext)
}
