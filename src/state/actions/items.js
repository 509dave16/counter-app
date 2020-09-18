export const LOAD_ITEMS = 'orm/LOAD_ITEMS'
export const CREATE_ITEM = 'orm/CREATE_ITEM'
export const UPDATE_ITEM = 'orm/UPDATE_ITEM'
export const INCREMENT_ITEM = 'orm/INCREMENT_ITEM'
export const DECREMENT_ITEM = 'orm/DECREMENT_ITEM'
export const DELETE_ITEM = 'orm/DELETE_ITEM'

export function ormLoadItems(items) {
  return {
    type: LOAD_ITEMS,
    payload: items
  }
}

export function ormCreateItem(item) {
  return {
    type: CREATE_ITEM,
    payload: item
  }
}

export function ormUpdateItem(item) {
  return {
    type: UPDATE_ITEM,
    payload: item
  }
}

export function ormIncrementItem(itemId) {
  return {
    type: INCREMENT_ITEM,
    payload: itemId,
  }
}

export function ormDecrementItem(itemId) {
  return {
    type: DECREMENT_ITEM,
    payload: itemId,
  }
}

export function ormDeleteItem(itemId) {
  return {
    type: DELETE_ITEM,
    payload: itemId
  }
}