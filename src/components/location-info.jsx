import { useInfo } from '../context/info-context'
import { useData } from '../context/data-context'
import { useState } from 'react'

export default function LocationInfo() {
  const { location, setLocation } = useInfo()
  const { data, setData } = useData()

  const cities = [...new Set(data.map((dt) => dt.city))]

  const filtered = cities.filter((city) =>
    city.toLowerCase().includes(location.city?.toLowerCase() || '')
  )

  return (
    <div className="w-full">
      <ul className="flex bg-white flex-col rounded-lg mt-2 w-full text-sm max-h-60 overflow-y-auto">
        {filtered.length === 0 ? (
          <p class="text-gray-500 text-lg">No stays found</p>
        ) : (
          filtered.map((city) => (
            <li
              key={city}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setLocation({ ...location, city })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0v10"
                />
              </svg>
              <span>{city}, Finland</span>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
