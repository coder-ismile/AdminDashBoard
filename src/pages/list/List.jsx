import React from 'react'
import DataTabel from '../../components/datatable/DataTabel'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidBar/Sidebar'
import './list.scss'

const List = () => {
  return (
    <div className='list1'>
    <Sidebar/>
    <div className="listContainer1">
      <Navbar/>
      <DataTabel/>
    </div>
  </div>
  )
}

export default List
