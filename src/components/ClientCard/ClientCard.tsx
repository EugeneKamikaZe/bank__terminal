import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../../store/action-creators/user";
import s from "./ClientCard.module.scss"
import BankInfo from "../BankInfo/BankInfo";

const ClientCard = () => {
    const {users} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    function createCard() {
        const user = {
            name: "Name Surname",
            pin: "0000",
            total: 0
        }

        let subTotal = 0

        for (const key in users) {
            if (users[key].name === 'client') {
                const allowedMoney = users[key].cards[1].allowedMoney
                // TODO create card change
                user.pin = users[key].cards[1].pin
                user.name = users[key].cards[1].owner

                for (const key in allowedMoney) {
                    if (allowedMoney[key] > 0) {
                        subTotal += +key * allowedMoney[key]
                    }
                }
            }
        }
        user.total = subTotal

        return user
    }

    return (
        <>
            <div className={s.card}>
                <div className={s.name}>
                    <p>{createCard().name}</p>
                    <p>Pin: <b>{createCard().pin}</b></p>
                </div>
                <div className={s.total}>
                    Balance: <b>{createCard().total}</b>
                </div>
            </div>
            <BankInfo />
        </>

    );
};

export default ClientCard;
