import { useReducer, useEffect } from 'react'

import { inventoryReducer, initialState } from '../reducers/inventoryReducer'

import { FETCH_ACTIONS } from '../actions'

import axios from 'axios'

const InventoryList = () => {
  const [state, dispatch] = useReducer(inventoryReducer, initialState)

  const { items, loading, error } = state

  useEffect(() => {
    dispatch({ type: FETCH_ACTIONS.PROGRESS })

    const getItems = async () => {
      try {
        let response = await axios.get('http://localhost:3000/edibles')
        if (response.status === 200) {
          dispatch({ type: FETCH_ACTIONS.SUCCESS, data: response.data })
        }
      } catch (err: any) {
        console.error(err)
        dispatch({ type: FETCH_ACTIONS.ERROR, error: err.message })
      }
    }

    getItems()
  }, [])

  return (
    <div className='m-8 flex w-2/5 flex-col' data-testid='item-list'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className='flex flex-col'>
          <h2 className='my-4 text-3xl'>Item List</h2>
          {items.map((item: any) => (
            <li
              className='my-2 flex flex-col rounded-md border bg-gray-200 p-2'
              key={item.id}
            >
              <p className='my-2 text-xl'>
                <strong>{item.name}</strong> {item.picture} of type{' '}
                <strong>{item.type}</strong> costs <strong>{item.price}</strong>{' '}
                INR/KG.
              </p>
              <p className='mb-2 text-lg'>
                Available in Stock: <strong>{item.quantity}</strong>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default InventoryList
