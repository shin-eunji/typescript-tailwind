import React from 'react';
import { FiMenu } from 'react-icons/fi';

function Nav () {

  const toggleMode = () => {
    if(localStorage.theme === undefined) {
      localStorage.theme = 'dark';
    }
    localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light';

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <nav className="flex items-center">
      <ul className="flex items-center md:hidden sm:hidden lg:flex">
        <li className="text">Explore</li>
        <li className="text">Advertise</li>
        <li className="text">Blog</li>
      </ul>

      <div className="flex items-center">
        <a className="ml-6 text-sm text-stone-500 font-medium md:hidden sm:hidden lg:flex cursor-pointer hover:text-black dark:bg-black dark:text-white" href="/">Log in</a>
        <button onClick={toggleMode} className="ml-6 border rounded px-2 py-1 border-stone-300 text-sm text-stone-600 md:hidden sm:hidden lg:flex cursor-pointer dark:bg-black dark:text-white dark:border-white outline-none hover:shadow hover:shadow-md hover:shadow-stone-100">Toggle Dark Mode</button>
        <span className="text-xl text-stone-600 font-medium cursor-pointer hover:text-black lg:ml-6 sm:m-0 hover:motion-reduce:hidden hover:animate-spin dark:bg-black dark:text-white">
          <FiMenu />
        </span>
      </div>
    </nav>
  )
}

export default Nav;
