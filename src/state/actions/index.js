import * as itemsActions from './items'

const RESET = 'orm/RESET'

function ormReset() {
  return {
    type: RESET
  }
}

export default {
  ...itemsActions,
  RESET,
  ormReset,
}