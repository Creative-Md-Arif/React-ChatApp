import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
      name: '_id',
      initialState: {
        value: null,
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