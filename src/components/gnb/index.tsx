import React from 'react';
import List from './List';
import { gnb } from "../../mock";

function Gnb () {

  return (
    <div className="flex flex-nowrap items-center justify-start shadow-lg shadow-black-100">
      <p className="px-3 py-2 border-r-[1px] text-sm text-stone-500 font-medium whitespace-nowrap dark:bg-black dark:text-white cursor-pointer hover:text-black">Editorial</p>

      <ul className="flex items-end justify-start overflow-x-auto snap-x relative bottom scrollbar-hide">
        {gnb.map((text) => {
          return <List key={text.id} {...text} />
        })}
      </ul>
    </div>
  )
}

export default Gnb;
