import { createSlice, configureStore } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './state'

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        add: (state, action) => {
            // add item to basket using `state` and `action` props
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }
                return {
                    ...item,
                    added: true
                }
            })
        },
        remove: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    added: false
                }
            })
        }
    }
})

const store = configureStore({ reducer: cartSlice.reducer })

export const { add, remove } = cartSlice.actions

export { cartSlice, store }
