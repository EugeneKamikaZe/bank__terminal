import {UserAction, UserActionTypes, UserState} from "../../types/users";

const initialState: UserState = {
    users: [],
    isLoading: false,
    isError: null,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {isLoading: true, isError: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {isLoading: false, isError: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {isLoading: false, isError: action.payload, users: []}
        default:
            return state
    }
}
