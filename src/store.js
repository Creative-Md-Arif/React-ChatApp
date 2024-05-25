import { configureStore } from '@reduxjs/toolkit'
import userSlice from './redux/userSlice'

export default configureStore({
  reducer: {
      userSlice,
  },
})