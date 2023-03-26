import React, { useEffect } from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { collection ,query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState } from 'react';
const Widget = ({ type }) => {
   const[amount, setAmount] = useState(null)
   const[diff , setDiff] = useState(null)
   let data;

   switch(type){
            case "user":
                    data = {
                        title:"USERS",
                        isMoney:false,
                        link:"See all users",
                        query:"users",
                        icon:<PersonOutlinedIcon className='icon2'
                        style={{color:"crimson",
                        backgroundColor:"rgba(255,0,0,0.2)",
                        }}
                        />
                    };
                    break;

              case "product":
                data={
                    title:"PRODUCTS",
                    query:"products",
                    link:"See details",
                    icon:<AccountBalanceWalletOutlinedIcon className='icon2'
                    style={{color:"purple",
                    backgroundColor:"rgba(128,0,128,0.2)",
                    }}
                    />
                };
                break;      
  
            case "order":
                data={
                    title:"ORDERS",
                    isMoney: false,
                    link:"View all orders",
                    icon:<ShoppingCartOutlinedIcon className='icon2'
                    style={{color:"goldenrod",
                    backgroundColor:"rgba(255,0,0,0.2)",
                 }}
                    />
                };
                break;

                case "earning":
                    data={
                        title:"EARNINGS",
                        isMoney:true,
                        link:"View net earnings",
                        icon:<MonetizationOnOutlinedIcon className='icon2'
                        style={{color:"green",
                        backgroundColor:"rgba(255,0,0,0.2)",
                        }}
                        />
                       };
                    break;

                   

            default:
                break;       

   }

   useEffect(()=>{
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const  lastMonthquery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const  prevMonthquery = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );
      const lastmonthData = await getDocs(lastMonthquery)
      const prevmonthData = await getDocs(prevMonthquery)
      setAmount(lastmonthData.docs.length);
      setDiff(
        ((lastmonthData.docs.length - prevmonthData.docs.length) / prevmonthData.docs.length) * 100 );

    };
    fetchData();
   },[]);

  return (
    <div className='widget'>
      <div className="widget_left">
        <span className='title'>{data.title}</span>
        <span className='counte'>{data.isMoney && "$"} {amount}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className="widget_right">
        <div className={`percentage ${ diff < 0 ? "negative" : "positive"}`}>
            { diff < 0 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon/> }
            {diff} % 
        </div>
         {data.icon}
      </div>
    </div>
  )
}

export default Widget
