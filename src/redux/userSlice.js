import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
      name: 'user',
      initialState: {
      value: JSON.parse(localStorage.getItem("myData")) 
        ? 
        JSON.parse(localStorage.getItem("myData"))
        :
        null,
      },
      reducers: {
            loggeduser: (state, action) => {
                  state.value = action.payload; 
        },
      },
    })
    
    // Action creators are generated for each case reducer function
    export const { loggeduser, } = userSlice.actions
    
    export default userSlice.reducer