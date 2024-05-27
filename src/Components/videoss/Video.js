import React, { useState } from 'react';
import ReactPlayer
  from 'react-player';
function Video() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0])
  };
  return (
    <div className='flex justify-center'>
      <form className='h-screen'>
        {selectedFile ? (
          <ReactPlayer controls={true} playing={true} url={URL.createObjectURL(selectedFile)} type="video/mp4" height="360px" width="500px" />
        ) : (<input type="file" onChange={handleFileChange} />)}
      </form>
    </div>
  )
}

export default Video
