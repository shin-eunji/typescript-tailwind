import React from 'react';
import Input from '../input'

function Visual () {

  return (
    <div className="flex items-center justify-center x-screen h-100 relative">
      <div className="flex items-center justify-center animate-slider">
        <img className="relative top-0 bottom-0 x-screen w-full h-full after:content-[''] after:absolute after:top-0 after:bottom-0 after:bg-gray-800/50 after:w-full after:h-full"
             src="https://images.unsplash.com/photo-1639402479478-f5e7881c0ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=1&auto=format%2Ccompress&fit=crop&w=3199&h=594%201x,%20https://images.unsplash.com/photo-1639402479478-f5e7881c0ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=3199&h=594%202x"
             alt="background"
        />
        <img className="relative top-0 bottom-0 x-screen w-full h-full after:content-[''] after:absolute after:top-0 after:bottom-0 after:bg-gray-800/50 after:w-full after:h-full"
             src="https://images.unsplash.com/photo-1639402479478-f5e7881c0ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=1&auto=format%2Ccompress&fit=crop&w=3199&h=594%201x,%20https://images.unsplash.com/photo-1639402479478-f5e7881c0ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=3199&h=594%202x"
             alt="background"
        />
        <img className="relative top-0 bottom-0 x-screen w-full h-full after:content-[''] after:absolute after:top-0 after:bottom-0 after:bg-gray-800/50 after:w-full after:h-full"
             src="https://images.unsplash.com/photo-1639402479478-f5e7881c0ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=1&auto=format%2Ccompress&fit=crop&w=3199&h=594%201x,%20https://images.unsplash.com/photo-1639402479478-f5e7881c0ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=3199&h=594%202x"
             alt="background"
        />
        <img className="relative top-0 bottom-0 x-screen w-full h-full after:content-[''] after:absolute after:top-0 after:bottom-0 after:bg-gray-800/50 after:w-full after:h-full"
             src="https://images.unsplash.com/photo-1639402479478-f5e7881c0ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=1&auto=format%2Ccompress&fit=crop&w=3199&h=594%201x,%20https://images.unsplash.com/photo-1639402479478-f5e7881c0ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=3199&h=594%202x"
             alt="background"
        />
      </div>
      <div className="absolute top-0 w-3/4 h-full flex flex-col justify-center items-start">
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-white mb-4">Unsplash</h2>
          <p className="text-lg text-white">The internet’s source of <span className="underline underline-offset-3 decoration-pink-500 text-white/75 hover:text-white cursor-pointer">freely-usable images.</span><br/>
             Powered by creators everywhere.
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <form className="w-7/12 flex-shrink flex-1 bg-white rounded px-2 py-4 box-border my-4 z-100">
            <Input />
          </form>
        </div>
        <div className="flex items-start justify-start">
          <span className="text-white">Trending: </span>
          <ul className="flex items-start justify-start">
            <li className="cursor-pointer text-white/75 hover:text-white">flower</li>
            <li className="cursor-pointer text-white/75 hover:text-white before:content-[','] after:content-[' ']">wallpapers</li>
            <li className="cursor-pointer text-white/75 hover:text-white before:content-[','] after:content-[' ']">backgrounds</li>
            <li className="cursor-pointer text-white/75 hover:text-white before:content-[','] after:content-[' ']">happy</li>
            <li className="cursor-pointer text-white/75 hover:text-white before:content-[','] after:content-[' ']">love</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Visual;
