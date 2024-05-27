import React, { useState, useRef } from 'react'
import downloadImage from '../Assets/R.png'
function Images() {
  const [image, setImage] = useState()
  const inputRef = useRef(null)

  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleFile = (event) => {
    const file = event.target.files[0];
    console.log(file)
    setImage(event.target.files[0]);
  }
  return (
    <div className='flex justify-center'>
      <div className='p-8 flex justify-center items-center h-[90vh]'>
        <div onClick={handleImageClick} className='h-screen'>
          {image ? (
            <img className=' h-[370px]' src={URL.createObjectURL(image)} alt='image11' />
          ) : (
            <img className='w-48 mt-20' src={downloadImage} alt='image11' />
          )}
          <input type='file' ref={inputRef} onChange={handleFile} style={{ display: 'none' }} />
        </div>
      </div>
    </div>
  )
}

export default Images
