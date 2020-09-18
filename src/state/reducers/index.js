import {
  combineReducers
} from 'redux'
import orm from './orm'
import navigation from './navigation'

export default combineReducers({
  orm,
  navigation,
})