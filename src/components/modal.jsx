import React, { useState } from 'react'
import SrchBtn from './srch-btn'
import LocationInfo from './location-info'
import GuestInfo from './guest-info'

export default function Modal() {
  const [locationState, setLocationState] = useState(false)
  const [guestState, setGuestState] = useState(false)
  console.log('locattion:' + locationState)
  console.log('guests:' + guestState)

  return (
    <div
      id="modal"
      className="fixed w-full h-full bg-black/50 flex items-start"
    >
      <div
        id="modal_in"
        className="bg-white w-full h-[90%] text-black rounded-2xl p-6 flex flex-col gap-6"
      >
        {/* <!-- Modal header --> */}
        <header className="flex flex-row justify-between items-center sm:hidden">
          <span className="text-[0.8rem] font-semibold">Edit your search</span>
          <button id="header_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>
        {/* <!-- Search Menu --> */}
        <div className="flex flex-col justify-center w-full text-[0.8rem] text-[#9A9C9A] sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center shadow-sm rounded-xl w-full h-full sm:flex-row">
            <div className="border-b-1 border-[#DDDDDD] flex flex-col outline-none w-full h-full pl-3 p-2 cursor-pointer sm:border-b-0 sm:border-r-1">
              <label className="text-[0.6rem] font-bold">LOCATION</label>
              <input
                list="opciones"
                id="miInput"
                name="miInput"
                className="outline-none text-[1rem] text-black"
                onClick={() => {
                  setLocationState(true)
                  setGuestState(false)
                }}
              />
            </div>
            <div className="flex flex-col border-[#DDDDDD] outline-none w-full h-full pl-3 p-2 cursor-pointer sm:border-r-1">
              <label className="text-[0.6rem] font-bold">GUESTS</label>
              <input
                id="guestInput"
                className="outline-none w-full"
                placeholder="Add guests"
                onClick={() => {
                  setLocationState(false)
                  setGuestState(true)
                }}
              />
            </div>
            {/* <!-- Search button --> */}
            <div
              id="searchBtn"
              className="w-full hidden items-center justify-center sm:flex"
            >
              <SrchBtn />
            </div>
          </div>
        </div>
        {/* <!-- Location or Guest information --> */}
        {locationState && <LocationInfo />}
        {guestState && <GuestInfo />}
        {/* <!-- Search button --> */}
        <div
          id="searchBtn"
          className="w-full flex items-center justify-center sm:hidden"
        >
          <SrchBtn />
        </div>
      </div>
    </div>
  )
}
