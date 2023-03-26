import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidBar/Sidebar'
import ListTable from '../../components/table/ListTable'
import Widget from '../../components/widget/Widget'
import "./home.scss"
const Home = () => {
  return (
   <div className="home">
    <Sidebar/>
    <div className="homeContainer">
      <Navbar/>
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="product"/>
        <Widget type="order"/>
        <Widget type="earning"/>
      
 
      </div>
      <div className="charts">
        <Featured/>
        <Chart aspect={2 / 1} title="Last 6 Months (Revenue)"/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <ListTable/>
      </div>
    </div>
   </div>
  )
}

export default Home
