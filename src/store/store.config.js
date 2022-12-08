import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'

const reducers = combineReducers({
    user: userReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig();