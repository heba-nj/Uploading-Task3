import { Avatar, Button, TextField } from '@mui/material'
import React from 'react'

function Comp() {
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
            <div class="card__content flex flex-col items-center gap-5 mt-4">
                <Button sx={{ marginLeft: 'auto', marginRight: "auto" }} variant="outlined">Outlined</Button>
                <TextField sx={{ marginLeft: 'auto', marginRight: "auto" }} id="outlined-basic" label="Outlined" variant="outlined" />
                <Avatar sx={{ marginLeft: "50px", color: "purple" }}>H</Avatar>
            </div>
        </div>
    )
}

export default Comp
