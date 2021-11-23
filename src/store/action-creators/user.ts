import {UserAction, UserActionTypes} from "../../types/users";
import {Dispatch} from "redux";
import initialData from '../../data.json'


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: initialData})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Error'
            })
        }
    }
}
