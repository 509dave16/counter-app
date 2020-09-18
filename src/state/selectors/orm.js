import {
  createSelector
} from 'redux-orm'
import orm from '../orm'

const ormSelector = state => state.orm

export const items = createSelector(orm, ormSelector, session => session.Item.all().toRefArray())
export const createOrmSelector = (func) => createSelector(orm, ormSelector, func)