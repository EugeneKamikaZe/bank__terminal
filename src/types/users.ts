export interface UserState {
    users: any[],
    isLoading: boolean,
    isError: null | string,
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCES",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
