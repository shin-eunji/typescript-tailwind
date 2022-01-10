import React from 'react';

interface GnbProps {
  id: number;
  name: string;
  subtitle: boolean;
  link: string;
}

function List ({name, subtitle, link = '#'}: GnbProps) {

  return (
    <li className="flex flex-col justify-end items-start snap-center p-4 cursor-pointer relative bottom-0 right-0 left-0">
      <span className="text-xs text-gray-500 whitespace-nowrap dark:bg-black dark:text-white">{subtitle ? 'Featured' : ''}</span>
      <span className="text-sm text-stone-500 font-medium whitespace-nowrap dark:bg-black dark:text-white hover:text-black active:text-black">{name}</span>
    </li>
  )
}

export default List;
