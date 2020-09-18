import {
  CART_PAGE
} from "../../config/constants"
import actions from "../actions"

export default function navigation(state = {
  currentPage: CART_PAGE
}, action) {
  switch (action.type) {
    case actions.CHANGE_PAGE:
      return {
        ...state, currentPage: action.payload
      }
      default:
        return state
  }
}