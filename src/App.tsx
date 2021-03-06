import React from 'react';
import Header from "./components/header";
import Gnb from "./components/gnb";
import Visual from "./components/visual";
import Card from "./components/card";

function App () {

  return (
    <div className="App h-screen bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <header className="w-screen bg-white dark:bg-black fixed top-0 z-50">
        <Header />
        <Gnb />
      </header>

      <main className="w-screen bg-white mt-32 dark:bg-black">
        <Visual />
        <Card />
      </main>
    </div>
  )
}

export default App;
