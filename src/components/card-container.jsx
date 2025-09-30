import React from 'react'
import Cards from './cards'

export default function CardContainer({ data }) {
  return (
    <>
      <div className="flex justify-between items-center px-4 mt-6 sm:p-6 sm:mt-0">
        <h2 className="text-xl font-bold">Stays in Finland</h2>
        <span id="staysCount" className="text-gray-500">
          12+ stays
        </span>
      </div>
      <div
        className="p-4 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:pl-6 pr-6 pt-0 sm:gap-6 md:grid-cols-3"
        id="cardsContainer"
      >
        {data.map((stay, index) => (
          <Cards
            key={index}
            beds={stay.beds}
            city={stay.city}
            country={stay.country}
            maxGuests={stay.maxGuests}
            photo={stay.photo}
            rating={stay.rating}
            superHost={stay.superHost}
            title={stay.title}
            type={stay.type}
          />
        ))}
      </div>
    </>
  )
}
