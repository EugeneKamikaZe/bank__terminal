import {DepositedState, DepositMoney, DepositMoneyAction} from "../../types/deposited";

const initialState = {
    depositedBills: null,
    isLoading: false,
    isError: null
}

export const depositedBills = (state = initialState, action: DepositMoneyAction): DepositedState => {
    switch (action.type) {
        case DepositMoney.DEPOSIT_MONEY: {
            return {isLoading: true, isError: null, depositedBills: null}
        }
        case DepositMoney.DEPOSIT_MONEY_SUCCESS: {
            return {isLoading: false, isError: null, depositedBills: action.payload}
        }
        case DepositMoney.DEPOSIT_MONEY_ERROR: {
            return {isLoading: false, isError: action.payload, depositedBills: null}
        }
        default:
            return state
    }
}
