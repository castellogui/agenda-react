import { UPDATE_NAME } from '../actions/types';

const initialState = {
    username: 'guest',
    name: 'Guest',
    email: 'unknown',
    type: 'ROLE_GUEST',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}