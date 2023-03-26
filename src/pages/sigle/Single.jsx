import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidBar/Sidebar'
import ListTable from '../../components/table/ListTable'
import './single.scss'
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="single__top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="Info__title">Information</h1>
            <div className="Singleitem">
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
               alt="" 
               className='SingleitemImg'
              />
              <div className="Single__details">
                  <h1 className="singleItem__Title">Jane Doe</h1>
                  <div className="single_detailsItem">
                    <span className='single_itemKey'>Email:</span>
                    <span className='single_itemValue'>janedoe@gmail.com</span>
                  </div>
                  <div className="single_detailsItem">
                    <span className='single_itemKey'>Phone:</span>
                    <span className='single_itemValue'>+1 2345 67 89</span>
                  </div>
                  <div className="single_detailsItem">
                    <span className='single_itemKey'>Address:</span>
                    <span className='single_itemValue'>Elton St.234 Garden Yd.NewYork</span>
                  </div>
                  <div className="single_detailsItem">
                    <span className='single_itemKey'>Country:</span>
                    <span className='single_itemValue'>USA</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months) "/>
          </div>
        </div>
        <div className="single_bottom">
        <h1 className="Info__title">Last Transactions</h1>
          <ListTable/>
        </div>
      </div>
     
    </div>
  )
}

export default Single
