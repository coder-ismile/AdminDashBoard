import React, {  useEffect, useState } from 'react'
import { DataGrid,  } from '@mui/x-data-grid';
import './dataTable.scss'
import { userColumns } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { collection, deleteDoc,doc,onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';

const DataTabel = () => {

  const [data, setData] = useState([])
  useEffect(()=>{
    

      const unsub = onSnapshot(
        collection(db,"users"),(snapShot)=>{
          let list =[];
          snapShot.docs.forEach((doc) => {
            list.push({id:doc.id, ...doc.data()});
          })
          setData(list);
        },
        (error)=>{
          console.log(error);
        }
      );

      return ()=>{
        unsub();
      }
  },[])
 console.log(data);
 const handleDelete = async(id)=>{
    try {
      await deleteDoc(doc(db, "users", id ));
      setData(data.filter(item=> item.id !== id))
      
    } catch (err) {
      console.log(err);
    }
 }

    const actionColume =[
        {
            filed:"action", 
            headerName:"Action",
            width: 200, 
            renderCell:(params)=>{
                return(
                    <div className="cellAction">
                      <Link to="/users/test" style={{textDecoration:"none"}}>
                         <div className="viewButton">View</div>
                      </Link>
                     
                        <div 
                           className="deleteButton"
                           onClick={()=> handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User 
        <Link to="/users/new" className="link2">
          Add New
        </Link>
      </div>
       <DataGrid
       className='dataGrid'
        rows={data}
        columns={userColumns.concat(actionColume)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTabel
