import { Card, Chip } from '@mui/material'
import React from 'react'

const RestaurantCard = () => {
  return (
    <Card className='m-5 w-[18rem]'>
      <div className={`${true ? 'cursor-pointer' : "cursor-not-allowed"} relative`}>
        <img className='w-full h-[10rem] rounded-t-md object-cover' src="https://pixabay.com/photos/chinese-lanterns-restaurant-lamps-7591296/" alt="" />
        <Chip
          size='small'
          className='absolute top-2 left-2'
          color={true ? "success" : "error"}
          label={true ? "open" : "closed"}
        />

      </div>
      <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'> Indian Fast Food</p>
          <p className='text-gray-500 text-sm'>
            Craving it all? Dive into our global fla...
          </p>

        </div>
        <div>
          <IconButton>

          </IconButton>
        </div>

      </div>
    </Card>
  )
}

export default RestaurantCard