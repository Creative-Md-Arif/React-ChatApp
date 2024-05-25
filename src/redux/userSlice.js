import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
      name: '_id',
      initialState: {
        value: 0,
      },
      reducers: {
        loggeduser: (state) => {
          state.value += 1
        },
      },
    })
    
    // Action creators are generated for each case reducer function
    export const { loggeduser, } = userSlice.actions
    
    export default userSlice.reducer