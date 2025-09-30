import Header from './components/header'
import CardContainer from './components/card-container'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('/cities.json')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error)
      })
  }, [])

  console.log(data)

  return (
    <div className="font-sans h-full w-full">
      <Header />
      <CardContainer data={data} />
    </div>
  )
}
