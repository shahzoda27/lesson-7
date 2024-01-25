import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id:1,name:"Nuriddin", age:27, address:"Jizzax"},
    {id:2,name:"Shahzoda", age:16, address:"Samarqand"},
    {id:3,name:"Gulasal", age:15, address:"Farg'ona"},
]
const UsersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        userAdded(state,action){
            state.push(action.payload)
        },
        userDelete(state,action){
            let index = action.payload
            state.splice(index,1)
        },
        userUpdate(state,action){
            const {id,name,age,address} = action.payload
            let single_user = state.find(item=>item.id === id)
            single_user.name = name
            single_user.age = age
            single_user.address = address
        }
    }
})
export const {userAdded,userDelete,userUpdate} = UsersSlice.actions
export default UsersSlice.reducer