import React from 'react'

export default function Cards({
  beds,
  city,
  country,
  maxGuests,
  photo,
  rating,
  superHost,
  title,
  type,
}) {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={photo}
        className="w-full object-cover rounded-2xl hover:scale-105 sm:h-50 md:h-60 "
      />
      <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
        <div className="flex gap-2 text-[0.8rem]">
          {superHost && (
            <span className=" border-2 font-bold w-min h-min pl-2 pr-2 rounded-2xl">
              SUPERHOST
            </span>
          )}
          <span className="text-[1rem] sm:text-[0.9rem]">
            {type} • {beds} beds
          </span>
        </div>

        <div className="flex flex-row gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#EB5757"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#EB5757"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <span className="flex items-center space-x-1 font-semibold">
            {rating}
          </span>
        </div>
      </div>
      <h3 className="mt-1 font-semibold">{title}</h3>
    </div>
  )
}
