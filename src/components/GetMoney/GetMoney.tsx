import React, {useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Input from "../Input/Input";
import Layout from "../Layout/Layout";
import ClientCard from "../ClientCard/ClientCard";
import {useSnackbar} from "notistack";
import {useDispatch} from "react-redux";
import {getMoney} from "../../store/action-creators/getSum";

const GetMoney = () => {
    const {enqueueSnackbar} = useSnackbar()
    const [sum, setSum] = useState()
    const {users} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    const handleChange = (e: React.ChangeEvent<any>) => {
        setSum(e.currentTarget.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const bankMoney: {[key: string]: number} = users[0].allowedMoney
        const cardMoney: {[key: string]: number} = users[1].cards[1].allowedMoney
        let bankMoneySum = 0
        let cardMoneySum = 0

        if (users.length > 0) {
            for (const key in bankMoney) {
                bankMoneySum += bankMoney[key] * +key
            }
            for (const key in cardMoney) {
                cardMoneySum += cardMoney[key] * +key
            }

            if (sum && (sum > (bankMoneySum || cardMoneySum))) {
                enqueueSnackbar('Операция не может быть выполнена', {
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    },
                    variant: 'warning'
                })
            } else {
                sum && dispatch(getMoney(sum, bankMoney, cardMoney))
            }
        }
    }

    /*  5000 x 4 шт.
        2000 x 6 шт.
        1000 x 9 шт.
        500 x 8 шт.
        200 x 2 шт.
        100 x 5 шт.
    Пример: запрошенные суммы 9000 и 7500.
        9000 = 5000 + 2000 + 2000
        7500 = 5000 + 2000 + 500
    Допустим если в банкомате отсутствуют купюры номинала 2000, то
        9000 = 5000 + 1000 + 1000 + 1000 + 1000
        7500 = 5000 + 1000 + 1000 + 500
    */

    return (
        <>
            <Layout>
                <h3>Введите сумму</h3>
                <Input
                    label="Enter the amount (only numbers)"
                    button="Take money"
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                />
                <ClientCard />
            </Layout>
        </>
    );
}

export default GetMoney;
