import { SET_USERS } from "./constant"

const initialState = {
    users: []
}

export const usersData = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
}