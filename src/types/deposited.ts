export enum DepositMoney {
    DEPOSIT_MONEY = "DEPOSIT_MONEY",
    DEPOSIT_MONEY_SUCCESS = "DEPOSIT_MONEY_SUCCESS",
    DEPOSIT_MONEY_ERROR = "DEPOSIT_MONEY_ERROR",
}

export interface DepositedState {
    depositedBills: number | null,
    isLoading: boolean,
    isError: null | string
}

interface DepositAction {
    type: DepositMoney.DEPOSIT_MONEY
}

interface DepositActionSuccess {
    type: DepositMoney.DEPOSIT_MONEY_SUCCESS,
    payload: number
}

interface DepositActionError {
    type: DepositMoney.DEPOSIT_MONEY_ERROR,
    payload: string
}

export type DepositMoneyAction = DepositAction | DepositActionSuccess | DepositActionError
