import React from 'react'

export default function GuestInfo() {
  return (
    <div
      id="guestDropdownContainer"
      className=" flex flex-col gap-4 p-4 sm:ml-[35%]"
    >
      <div className="flex flex-col gap-1.5 ">
        <span className="text-[0.9rem] font-bold">Adults</span>
        <span className="text-gray-400">Ages 13 or above</span>
        <div className="flex items-center gap-2">
          <button className="inc_button px-2  border rounded">-</button>
          <span className="count">0</span>
          <button className="inc_button px-2  border rounded">+</button>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-[0.9rem] font-bold">Children</span>
        <span className="text-gray-400">Ages 12 or below</span>
        <div className="flex items-center gap-2">
          <button className="inc_button px-2  border rounded">-</button>
          <span className="count">0</span>
          <button className="inc_button px-2  border rounded">+</button>
        </div>
      </div>
    </div>
  )
}
