import { GET_USERS } from './constant';

export const getUsers = () => {
    return { type: GET_USERS, payload: "USERS" }
}