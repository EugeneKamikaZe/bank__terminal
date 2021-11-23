import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../../store/action-creators/user";
import s from './Cards.module.scss'
import Card from "../Card/Card";

const Cards: React.FC = () => {
    const {users} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    function total(card: any): number {
        let total = 0
        const allowedMoney = card.allowedMoney

        for (const key in allowedMoney) {
            if (allowedMoney[key] > 0) {
                total += +key * allowedMoney[key]
            }
        }

        return total
    }

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Доступные карты</h2>
            {users.length > 0 && users[1].cards.map((card: any) =>
                <Card
                    key={card.pin}
                    owner={card.owner}
                    pin={card.pin}
                    total={total(card)}
                />
            )}
        </div>
    );
};
// TODO Сделать выбор карты

export default Cards;
