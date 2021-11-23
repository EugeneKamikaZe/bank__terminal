import {DepositMoney, DepositMoneyAction} from "../../types/deposited";
import {Dispatch} from "redux";
import {UserAction} from "../../types/users";

export const giveMoney = (deposited: { [key: string]: number }, bankMoney: { [key: string]: number }, userMoney: { [key: string]: number }, allowedMoney: { [key: string]: number }) => {
    return async (dispatch: Dispatch<DepositMoneyAction | UserAction>) => {
        try {
            dispatch({type: DepositMoney.DEPOSIT_MONEY})

            const moneyForEach = (moneyOwner: { [key: string]: number }) => {
                for (const key in moneyOwner) {
                    if (deposited.hasOwnProperty(key)) {
                        moneyOwner[key] = +moneyOwner[key] + +deposited[key]
                    }
                }
            }
            let depositedSum = 0

            for (const key in allowedMoney) {
                if (deposited.hasOwnProperty(key)) {
                    if (allowedMoney[key] < 1 || allowedMoney[key] - deposited[key] < 1) {
                        dispatch({type: DepositMoney.DEPOSIT_MONEY_ERROR, payload: 'Недостаточно купюр'})
                    } else {
                        allowedMoney[key] = allowedMoney[key] - deposited[key]

                        moneyForEach(bankMoney)
                        moneyForEach(userMoney)

                        for (const sumKey in deposited) {
                            depositedSum += +sumKey * +deposited[sumKey]
                        }

                        dispatch({type: DepositMoney.DEPOSIT_MONEY_SUCCESS, payload: depositedSum})
                    }
                }
            }
        } catch (e) {
            dispatch({type: DepositMoney.DEPOSIT_MONEY_ERROR, payload: 'Error'})
        }
    }
}
