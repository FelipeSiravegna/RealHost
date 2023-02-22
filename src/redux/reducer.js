import { GET_CHARACTERS } from "./constant"

const initialState = {
    characters: []
}

export const charactersData = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            };
        default:
            return state;
    }
}