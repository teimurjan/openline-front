export const CHANGE_TAB = 'NEW_PROJECT/CHANGE_TAB';


export function changeTab(index) {
  return {type: CHANGE_TAB, payload: {index}}
}