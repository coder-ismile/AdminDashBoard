import React from 'react'
import SearchOutlineIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import './navbar.scss'
import profile from '../navbar/avatar.jpeg'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const { dispatch} = useContext(DarkModeContext)
  
  return (
    <div className=' navbar '>
      <div className="wrapper">
        <div className= 'search'>
            <input type="text"  placeholder='Search....' />
            <SearchOutlineIcon className='icon1'/>
        </div>
        <div className="items">
            <div className="item">
                <LanguageOutlinedIcon className='icon1'/>
                English 
            </div>
            <div className="item">
               <DarkModeOutlinedIcon className='icon1'
               onClick={()=> dispatch({type: "TOGGLE"})}
               />
            </div>
                <div className="item">
                <FullscreenExitOutlinedIcon className='icon1'/>
               
                </div>
                <div className="item">
                <NotificationsNoneOutlinedIcon className='icon1'/>
                <div className="counter">1</div>
                </div>
                <div className="item">
                <ChatBubbleOutlineOutlinedIcon className='icon1'/>
                <div className="counter">2</div>
                </div>
                <div className="item">
                <ListOutlinedIcon className='icon1'/>
                </div>
                <div className="item">
                 <img src={profile} alt="" className='avatar' />
                </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
