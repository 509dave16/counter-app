export const CHANGE_PAGE = 'navigation/CHANGE_PAGE'

export function navigationChangePage(page) {
  return {
    type: CHANGE_PAGE,
    payload: page
  }
}