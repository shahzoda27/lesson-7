import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UsersModal from '../../../Modal/UsersModal'
import { userDelete } from './UsersSlice'
export default function UsersList() {
    const [modalVisible, setModalVisible]= useState(false)
    const users = useSelector((state)=>state.users)
    const [edit, setEdit]= useState("")
    const dispatch = useDispatch()
    const openEdit = (item)=>{
        setEdit(item)
        setModalVisible(true)
    }
    const toggle = ()=>{
        setModalVisible(false)
        setEdit('')
       }
  return (
    <div className='container'>
    <UsersModal open={modalVisible} toggle={toggle}  edit={edit}/>
    <button className='btn btn-info' onClick={()=>setModalVisible(true)}>Add user</button>
        <h1 className='text-center m-4'>Users</h1>
         <div className="col-md-10 offset-2">
          <table className="table table-bordered">
          <thead>
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
           {
              users.map((item,index)=>{
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
                <td>
                  <button className='btn btn-info' onClick={()=>openEdit(item)}>Edit</button>
                  <button className='btn btn-danger' onClick={()=>dispatch(userDelete(index))}>Delete</button>
                </td>
              </tr>
            })
           }
          </tbody>
        </table>
          </div>
    </div>
  )
}
