import React from 'react';
import {HiOutlineSearch} from "react-icons/hi";

function Input () {

  return (
    <label className="block flex items-center justify-start ">
        <span className="mr-4">
          <HiOutlineSearch className="text-xl text-gray-500 stroke-1" />
        </span>
      <input type="text"
             placeholder="search free high-resolution photos"
             className="w-full h-100 bg-inherit border text-sm text-black border-none placeholder-gray-400 outline-none"
      />
    </label>
  )
}

export default Input;
