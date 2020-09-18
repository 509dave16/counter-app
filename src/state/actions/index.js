import * as itemsActions from './items'
import * as navigationActions from './navigation'
const RESET = 'orm/RESET'

function ormReset() {
  return {
    type: RESET
  }
}

export default {
  ...itemsActions,
  ...navigationActions,
  RESET,
  ormReset,
}