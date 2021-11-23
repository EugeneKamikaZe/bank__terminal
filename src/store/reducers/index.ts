import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {depositedBills} from "./depositedBills";
import {getMoneyReducer} from "./getSum";


export const rootReducer = combineReducers({
    user: userReducer,
    deposited: depositedBills,
    getMoney: getMoneyReducer
})

export type RootState = ReturnType<typeof rootReducer>
