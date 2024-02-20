import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import userGenericReducer from '../reducers/genericUser'
import userIdReducer from '../reducers/idUser'
import experiencesReducer from '../reducers/experiences'
import actionReducer from '../reducers/experiencesActions'
import createreducer from '../reducers/createExperiences'

const mainReducer = combineReducers({
  user: userReducer,
  genericUser: userGenericReducer,
  idUser: userIdReducer,
  experiences: experiencesReducer,
  action: actionReducer,
  create: createreducer,
})

const store = configureStore({
  reducer: mainReducer,
})

export default store
