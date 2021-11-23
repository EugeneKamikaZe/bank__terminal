import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../../store/action-creators/user";
import s from "./BankInfo.module.scss"

const BankInfo = () => {
    const {users} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const showTotal = () => {
        if (users.length > 0) {
            let total = 0

            for (const key in users[0].allowedMoney) {
                if (users[0].allowedMoney[key] > 0) {
                    total += +key * users[0].allowedMoney[key]
                }
            }

            return total
        }
    }

    return (
        <div className={s.card}>
            <div className={s.name}>
                <p>Bank Info</p>
            </div>
            <div className={s.total}>
                Balance: <b>{showTotal()}</b>
            </div>
        </div>
    );
};

export default BankInfo;
