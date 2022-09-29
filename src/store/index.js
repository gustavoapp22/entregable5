import { configureStore } from '@reduxjs/toolkit'
import  userNameSlice  from './slices/UserName.slice'

export default configureStore({
  reducer: {
       userName: userNameSlice



	}
})