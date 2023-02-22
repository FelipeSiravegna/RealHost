import axios from 'axios';
import { GET_CHARACTERS } from './constant';

export const getCharacters = () => {
    return async function (dispatch) {
        console.log("ACTION DESPACHADA")
        await axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5')
            .then((characters) => {
                console.log("CHARACTERS /ACTIONS", characters.data)

                dispatch({
                    type: GET_CHARACTERS,
                    payload: characters.data
                })

            })
            .catch(error => console.error(error));
    }
}