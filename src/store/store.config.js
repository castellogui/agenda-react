import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({
    user: function (state, action) {
        return {
            a: `a`
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig();