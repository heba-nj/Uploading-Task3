import React, { useState } from 'react'
import sound from '../Assets/rainy-day-in-town-with-birds-singing-194011.mp3'
function Sound() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0])
  };
  function play() {
    new Audio(sound).play()
  }
  return (
    <div className='flex justify-center'>
      <form className='h-screen'>
        {selectedFile ? (
          <button
            class="cursor-pointer bg-gradient-to-r from-rose-900 to-pink-700 hover:scale-105 duration-700 hover:duration-1000 font-semibold transition-all text-white px-10 py-4 rounded-e relative after:[clip-path:polygon(50%_0%,_100%_0,_100%_34%,_100%_100%,_77%_87%,_88%_62%,_64%_75%,_67%_50%,_48%_32%,_82%_18%)] after:hover:duration-700 after:duration-500 after:absolute after:inset-0 after:z-20 after:bg-pink-600 after:translate-x-0 after:hover:-translate-x-1 after:hover:rotate-[100deg] after:origin-bottom-right after:transition-all after:hover:transition-all after:rounded-e after:hover:skew-y-6 after:content-['Hover_ME'] after:hover:content-['SMOOKY_DEV'] after:flex after:items-center after:justify-center after:bg-gradient-to-r after:from-rose-700 after:to-pink-600 after:hover:scale-x-50 before:[clip-path:polygon(26%_0,_38%_17%,_25%_32%,_41%_66%,_27%_81%,_50%_100%,_0_100%,_0%_70%,_0%_35%,_0_0)] before:hover:duration-700 before:duration-500 before:absolute before:inset-0 before:z-20 before:bg-pink-600 before:translate-x-0 before:hover:translate-x-0 before:hover:-rotate-[45deg] before:origin-bottom-left before:transition-all before:hover:transition-all before:rounded-e before:hover:skew-y-6 before:content-['Hover_ME'] before:hover:content-['SMOOKY'] before:flex before:items-center before:justify-center before:bg-gradient-to-l before:from-rose-700 before:to-pink-600 mt-20"
          >
            Rainy Day
            {play()}
          </button>
        ) : (<input type="file" onChange={handleFileChange} />)}
      </form>
    </div>
  )
}

export default Sound
