import React from 'react'

export default function SrchBtn() {
  return (
    <button className="w-30 flex flex-row items-center cursor-pointer justify-center gap-2 bg-[#EB5757] text-white text-[0.8rem] p-1.5 rounded-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#FFFF"
        className="size-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <span>Search</span>
    </button>
  )
}
