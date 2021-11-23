export interface MoneyState {
    getMoney: null | number,
    isLoading: boolean,
    isError: null | string,
}

export enum GetMoneyActionTypes {
    GET_MONEY = "GET_MONEY",
    GET_MONEY_SUCCESS = "GET_MONEY_SUCCESS",
    GET_MONEY_ERROR = "GET_MONEY_ERROR",
}

interface GetMoneyDefaultAction {
    type: GetMoneyActionTypes.GET_MONEY
}

interface GetMoneySuccessAction {
    type: GetMoneyActionTypes.GET_MONEY_SUCCESS,
    payload: null | number
}

interface GetMoneyErrorAction {
    type: GetMoneyActionTypes.GET_MONEY_ERROR,
    payload: string
}

export type MoneyAction = GetMoneyErrorAction | GetMoneySuccessAction | GetMoneyDefaultAction
