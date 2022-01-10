import React from 'react';
import Input from '../input';

function Form () {

  return (
    <form className="flex-shrink flex-1 bg-stone-100 border border-stone-100 rounded-full p-2 box-border mx-4 hover:border
    hover:border-stone-300 active:border active:border-stone-300 active:bg-white focus:border focus:border-stone-300 focus:bg-white">
      <Input/>
    </form>
  )
}

export default Form;
