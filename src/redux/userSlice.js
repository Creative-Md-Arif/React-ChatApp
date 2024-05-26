import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
      name: 'user',
      initialState: {
        user:
        //  JSON.parse(localStorage.getItem("user")) 
        // ? 
        // JSON.parse(localStorage.getItem("user"))
        // :
        null,
      },
      reducers: {
            loggeduser:(state, action) => {
                  state.user = action.payload; 
        },
      },
    })
    
    // Action creators are generated for each case reducer function
    export const { loggeduser, } = userSlice.actions
    
    export default userSlice.reducer