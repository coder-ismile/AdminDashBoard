import React, {  useContext } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './sidebar.scss'
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { auth } from '../../firebase';
import {  signOut } from "firebase/auth";

const Sidebar = () => {
    const{darkMode,dispatch} = useContext(DarkModeContext)
  const navigate = useNavigate()
    const handleLogout = async()=>{
        signOut(auth).then(() => {
                 navigate("/login")
          }).catch((error) => {
              console.log(error);
          });
          
      };

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className={darkMode ? "darkLogo":'logo'}> IsmileAdmin  </span>
        </Link>
       
      </div>
    
      <hr className='hr' />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
           <Link to="/" style={{textDecoration:"none"}}>
           <li> 
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
           </Link>
         
            <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li>
                <PersonOutlineIcon className='icon'/>
                <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{textDecoration:"none"}}>
            <li>
                <StoreIcon className='icon'/>
                <span>Products</span>
            </li>
            </Link>
          
            <li>
                <CreditCardIcon className='icon'/>
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingIcon className='icon'/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <InsertChartIcon className='icon'/>
                <span>State</span>
            </li>
            <li>
                <NotificationsNoneIcon className='icon'/>
                <span>Notification</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <SettingsSystemDaydreamIcon className='icon'/>
                <span>System Health</span>
            </li>
            <li>
                <PsychologyIcon className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsApplicationsIcon className='icon'/>
                <span>Setting</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountCircleIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <ExitToAppIcon className='icon'/>
                <span onClick={handleLogout}>Logout</span>
            </li>
        </ul>
    </div>
      <div className="bottom1">
        <div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})} ></div>
        <div className="colorOption"  onClick={()=> dispatch({type: "DARK"})} ></div>
      </div>
    </div>
  )
}

export default Sidebar
