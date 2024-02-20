import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import userGenericReducer from '../reducers/genericUser'
import userIdReducer from '../reducers/idUser'
import experiencesReducer from '../reducers/experiences'

const mainReducer = combineReducers({
  user: userReducer,
  genericUser: userGenericReducer,
  idUser: userIdReducer,
  experiences: experiencesReducer,
})

const store = configureStore({
  reducer: mainReducer,
})

export default store
