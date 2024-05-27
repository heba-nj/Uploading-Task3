import React from 'react'
import Images from './Images'

function CompImage() {
  return (
    <div class="bg-white w-[500px] h-96 rounded-lg">
    <div class="flex p-2 gap-1">
        <div class="">
            <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div class="circle">
            <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div class="circle">
            <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
        </div>
    </div>
    <div class="card__content">
        <Images />
    </div>
</div>
  )
}

export default CompImage
