import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'User',
    initialState: {
        userList: [],
        isLoading: false
    },
    reducers: {
        addUser: (state, actions) => {
            state.userList.push(actions.payload)
            // state.userList.push()
            // actions.payload
        },
        updateUser: (state, actions) => { //{id , data}
            const index = state.userList.findIndex(u => u.id == actions.payload.id);
            if(index !== -1){
                state.userList[index] = actions.payload.data
            }
        },
        deleteUser: (state, actions) => {
            state.userList = state.userList.filter(u => u.id !== actions.payload.id)
        },

    }
})


export const { addUser, updateUser, deleteUser } = UserSlice.actions
export default UserSlice.reducer