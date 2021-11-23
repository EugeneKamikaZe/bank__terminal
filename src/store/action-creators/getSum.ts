import {Dispatch} from "redux";
import {GetMoneyActionTypes, MoneyAction} from "../../types/getMoney";

export const getMoney = (
    sum: number,
    bankMoney: { [key: string]: number },
    clientMoney: { [key: string]: number }
) => {
    return async (dispatch: Dispatch<MoneyAction>) => {
        try {
            dispatch({type: GetMoneyActionTypes.GET_MONEY})

            for (const key in bankMoney) {
                if (bankMoney[key] !== 0) {
                    console.log(Object.keys(bankMoney).length)
                    // TODO Sort
                }
            }

            dispatch({type: GetMoneyActionTypes.GET_MONEY_SUCCESS, payload: sum})
        } catch (e) {
            dispatch({
                type: GetMoneyActionTypes.GET_MONEY_ERROR,
                payload: 'Error'
            })
        }
    }
}
