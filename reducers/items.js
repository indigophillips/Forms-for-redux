const items = (state = [], action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return action.items

    case 'ADD_ITEM':
      return [...state, action.item]

    case 'EDIT_ITEM':
      return state.map(r => r.id === action.id ? {...r, isEditing: true} : r)

    case 'STOP_EDITING':
      return state.map(r => r.isEditing ? {...r, isEditing: false} : r)

    case 'SAVE_ITEM':
      return state.map(r => r.id === action.id ? action.item : r)

    case 'DELETE_ITEM':
      return state.filter(r => r.id !== action.id)

    default:
      return state
  }
}

export default items
