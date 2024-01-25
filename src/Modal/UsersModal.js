import React, { useState } from 'react'
import { Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { userAdded, userUpdate} from '../component/featurs/users/UsersSlice';
const UsersModal = ({open,toggle,edit}) => {
    const [name, setName]= useState("")
    const [age, setAge]= useState("")
    const [address, setAddress]= useState("")
    const dispatch = useDispatch()
    const changeUser =(e)=>{
        e.preventDefault()
        let payload ={
            id:edit ? edit.id : nanoid(),
               name:name ? name : edit.name,
               age:age ? age : edit.age,
               address:address ? address : edit.address
            }
        if (edit) {
            dispatch(userUpdate({...payload}))
            toggle()
        }else{
            dispatch(userAdded({...payload}))
            toggle()
        }
    }
    let active =null
    if (edit) {
        active = true
    }else{
     active = Boolean(name) && Boolean(age) && Boolean(address)
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h1>Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form id='users' onSubmit={changeUser}>
            <input type="text" defaultValue={edit.name} placeholder='name' className='form-control my-2' onChange={(e)=>setName(e.target.value)}/>
            <input type="number" defaultValue={edit.age} placeholder='age' className='form-control my-2' onChange={(e)=>setAge(e.target.value)} />
            <input type="text" defaultValue={edit.address} placeholder='address' className='form-control my-2' onChange={(e)=>setAddress(e.target.value)} />
        </form>
      </ModalBody>
      <ModalFooter>
        {
            edit !== "" ?
            <button type='submit' form='users' className='btn btn-success'>Edit User</button> :
            <button type='submit' form='users' className='btn btn-primary' disabled={!active}>Add User</button>

        }
      </ModalFooter>
    </Modal>
  )
}

export default UsersModal