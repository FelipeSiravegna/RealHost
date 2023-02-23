import axios from 'axios';
import { GET_USERS } from './constant';

export const getUsers = () => {
    return async function (dispatch) {
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then((users) => {
                dispatch({ type: GET_USERS, payload: users.data })
            })
            .catch(error => console.error(error));
    }
}