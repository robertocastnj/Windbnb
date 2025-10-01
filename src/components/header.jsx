import React from 'react'

export default function Header({ isOpen, setIsOpen }) {
  return (
    <header className="p-4 flex flex-col gap-4 items-center justify-between w-full h-[20%] sm:h-[15%] sm:flex-row sm:p-6">
      <div className="-950 h-[25%] w-full sm:h-full sm:flex items-center">
        <img
          src="/images/icons/logo-f7862584.svg"
          alt=""
          className="h-full object-cover sm:h-[40%]"
        />
      </div>

      {/* <!-- Search Bar --> */}
      <div className="flex justify-center w-full h-full text-[0.8rem] text-[#9A9C9A] sm:h-[90%]">
        <div
          className="flex items-center shadow-md rounded-xl w-[100%] h-full"
          onClick={() => setIsOpen(true)}
        >
          <button
            id="add_location"
            className="search-bar-button border-r-1 border-[#DDDDDD] outline-none w-[40%] h-full pl-1 cursor-pointer"
          >
            Add location
          </button>
          <button
            id="add_guest"
            className="search-bar-button border-r-1 border-[#DDDDDD] outline-none w-[40%] h-full pl-1 cursor-pointer"
          >
            Add guests
          </button>
          <button className="search-bar-button w-[20%] h-full flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#EB5757"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
