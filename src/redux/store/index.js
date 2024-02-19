import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import userGenericReducer from '../reducers/genericUser'
import userIdReducer from '../reducers/idUser'

const mainReducer = combineReducers({
  user: userReducer,
  genericUser: userGenericReducer,
  idUser: userIdReducer,
})

const store = configureStore({
  reducer: mainReducer,
})

export default store
