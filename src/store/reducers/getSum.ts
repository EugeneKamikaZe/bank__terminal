import {GetMoneyActionTypes, MoneyAction, MoneyState} from "../../types/getMoney";

const initialState: MoneyState = {
    getMoney: null,
    isLoading: false,
    isError: null,
}

export const getMoneyReducer = (state = initialState, action: MoneyAction): MoneyState => {
    switch (action.type) {
        case GetMoneyActionTypes.GET_MONEY:
            return {isLoading: true, isError: null, getMoney: null}
        case GetMoneyActionTypes.GET_MONEY_SUCCESS:
            return {isLoading: false, isError: null, getMoney: action.payload}
        case GetMoneyActionTypes.GET_MONEY_ERROR:
            return {isLoading: false, isError: action.payload, getMoney: null}
        default:
            return state
    }
}
