import {
  v4 as uuid
} from 'uuid'
import {
  Model,
  attr
} from 'redux-orm'
import actions from '../actions'

const handleAddition = (session, id, count) => {
  const item = session.Item.filter({
    id
  }).first()
  if (item) {
    const computedValue = item.count + count
    if (computedValue) {
      item.set('count', computedValue)
    } else {
      item.delete()
    }
  }
}

const handleIncrement = (session, id) => handleAddition(session, id, 1)
const handleDecrement = (session, id) => handleAddition(session, id, -1)
const handleReset = (session) => session.Item.all().delete()
const handleDelete = (session, id) => session.Item.filter({
  id
}).first().delete()
const handleCreate = (session, itemAttrs) => session.Item.create(itemAttrs)

class Item extends Model {
  idAttribute = 'id'

  static reducer(action, StaticItem, session) {
    const {
      Item
    } = session
    switch (action.type) {
      case actions.LOAD_ITEMS:
        if (action.payload && action.payload.length) {
          action.payload.forEach(item => Item.create(item))
        }
        break
      case actions.RESET:
        handleReset(session)
        break
      case actions.INCREMENT_ITEM:
        if (action.payload) {
          handleIncrement(session, action.payload)
        }
        break
      case actions.DECREMENT_ITEM:
        if (action.payload) {
          handleDecrement(session, action.payload)
        }
        break
      case actions.DELETE_ITEM:
        if (action.payload) {
          handleDelete(session, action.payload)
        }
        break
      case actions.CREATE_ITEM:
        if (action.payload) {
          handleCreate(session, action.payload)
        }
        break
      default:
        // DO NOTHING
    }
  }
}

Item.modelName = 'Item'
Item.fields = {
  id: attr({
    getDefault: () => uuid()
  }),
  name: attr(),
  price: attr(),
  count: attr({
    getDefault: () => 1
  }),
}

export default Item