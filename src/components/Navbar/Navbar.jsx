import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#A0522D] lg:px-20 flex justify-between'>


      <div className='lg:mr-10 cursor-pointer flex item-center space-x-4'>
        <li className='logo font-semibold text-gray-300 text-2xl'>
          QuickBite
        </li>

      </div>

      <div className='flex item-center space-x-2 lg:space-x-10'>
        <div className=''>
          <IconButton>
            <SearchIcon sx={{ fontSize: "1,5rem" }} />

          </IconButton>

        </div>
        <div className=''>
          <Avatar sx={{ bgcolor: "white", color: '#444444' }}>S</Avatar>

        </div>

        <div className=''>
          <IconButton>
            <Badge color='black' badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize: "1,5rem" }} />
            </Badge>


          </IconButton>

        </div>



      </div>

    </div>
  )
}
