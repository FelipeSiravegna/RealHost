import { GET_USERS } from "./constant"

const initialState = {
    users: []
}

export const usersData = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
}