import { FETCH_ACTIONS } from '../actions'
const initialState = {
  items: [],
  loading: false,
  error: null,
}
interface Item {
  id: number
  name: string
  picture: string
  type: string
  price: number
  quantity: number
}

interface InventoryState {
  items: Item[]
  loading: boolean
  error: string | null
}
type AppAction = { type: string; data?: any; error?: any }
// type PROGRESS = { type: 'progress' }
// type SUCCESS = { type: 'success' }
// type ERROR = { type: 'error' }

// type AppActions = PROGRESS | SUCCESS | ERROR

const inventoryReducer = (state: InventoryState, action: AppAction) => {
  switch (action.type) {
    case FETCH_ACTIONS.PROGRESS: {
      return {
        ...state,
        loading: true,
      }
    }

    case FETCH_ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        items: action.data,
      }
    }

    case FETCH_ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }

    default: {
      return state
    }
  }
}

export { inventoryReducer, initialState }
