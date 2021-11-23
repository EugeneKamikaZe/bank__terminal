import React, {useEffect} from 'react';
import Layout from "../Layout/Layout";
import s from './DepositMoney.module.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../../store/action-creators/user";
import ClientCard from "../ClientCard/ClientCard";
import {useSnackbar} from "notistack";
import {giveMoney} from "../../store/action-creators/depositedBills";

const DepositMoney = () => {
    const {enqueueSnackbar} = useSnackbar()
    const {users} = useTypedSelector(state => state.user)
    const {isError} = useTypedSelector(state => state.deposited)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const allowedMoneyArray: any[] = []
    let depositMoney: any = {}

    if (users.length > 0) {
        const object = users[1].cards[1].allowedMoney

        for (let key in object) {
            allowedMoneyArray.push(key)
        }
    }

    const handleChange = (e: React.ChangeEvent<any>) => {
        depositMoney[`${e.currentTarget.id}`] = e.currentTarget.value
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (Object.keys(depositMoney).length > 0) {
            dispatch(giveMoney(depositMoney, users[0].allowedMoney, users[1].cards[1].allowedMoney, users[1].allowedMoney))
        } else {
            // @ts-ignore
            e.currentTarget.reset()
        }

        if (isError) {
            enqueueSnackbar('Недостаточно купюр', {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                variant: 'error'
            })
        }

        // if (!isLoading) {
        //     enqueueSnackbar(`${depositedBills} Успешно внесено`, {
        //         // TODO Разобраться почему не пашет ${depositedBills}
        //         anchorOrigin: {
        //             vertical: 'top',
        //             horizontal: 'right'
        //         },
        //         variant: 'success'
        //     })
        // }

        depositMoney = {}
        // @ts-ignore
        e.currentTarget.reset()
    }

    return (
        <>
            <Layout>
                <h3>Выберите купюры</h3>
                <form onSubmit={handleSubmit} className={s.wrapper}>
                    {users.length > 0 && allowedMoneyArray.map((bill: string | undefined) =>
                        <label key={bill} htmlFor={bill} className={s.bill}>
                            {bill}
                            <input type="number" id={bill} pattern="[0-9]*" min="1" onChange={handleChange}/>
                        </label>
                    )}
                    <button type="submit" className={s.submit}>Внести</button>
                </form>
            </Layout>
            <ClientCard/>
        </>
        // TODO Сделать Drag & Drop
    );
};

export default DepositMoney;
