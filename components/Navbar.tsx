'use client'
import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { useState } from "react";


const Navbar = () => {
  const [language, setLanguage] = useState<number | string>(1);
  const handleChange = (event: SelectChangeEvent<number | string>) => {
    setLanguage(event.target.value);
  };
  return (
    <>
      <div className=' bg-[#000000] flex flex-row justify-end'>
        <div className=" flex w-full justify-evenly max-w-[989px] items-center " >
          <p className="text-[14px] font-[400] leading-[21px] font-poppins text-[#FAFAFA]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="pl-2 underline font-[600]">ShopNow</span></p>
          <FormControl >
            <Select
              value={language}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'Without label' }}
              className="text-[#FAFAFA] bg-black"
              autoWidth
              sx={{ height: "48px", minWidth: "90px", '& .MuiSelect-icon': { color: 'white' } }}
            >
              <MenuItem value={1}>English</MenuItem>
              <MenuItem value={2}>Japanese</MenuItem>
              <MenuItem value={3}>Yoruba</MenuItem>
            </Select>

          </FormControl>

        </div>

      </div>
      <div className="flex flex-row mt-[38px] justify-between border-b pb-[23px] items-center px-[135px]">
        <p className="font-inter text-[24px] font-[700]" >Exclusive</p>
        <div className="flex max-w-[367px] w-full justify-evenly">
          <p>Home</p>
          <p>Contact</p>
          <p>About</p>
          <p>Sign Up</p>
        </div>
        <div className="flex items-center">
          <Paper
            component="form"
            sx={{
              p: '2px 4px', display: 'flex', alignItems: 'center', width: 243, backgroundColor: "#F5F5F5", boxShadow: 'none',
              borderRadius: 0
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, }}
              placeholder="What are you looking for?"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <div className="flex gap-[16px] ml-[24px]">
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
