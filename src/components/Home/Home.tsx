import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../../store/action-creators/user";
import Input from "../Input/Input";
import Layout from "../Layout/Layout";
import Cards from "../Cards/Cards";
import { useSnackbar } from 'notistack';

const Home = () => {
    const {users} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [pin, setPin] = useState()
    const {enqueueSnackbar} = useSnackbar()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const handleChange = (e: React.ChangeEvent<any>) => {
        setPin(e.currentTarget.value)
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (pin === users[1].cards[1].pin) {
            navigate('/change')
            enqueueSnackbar(`Здравствуйте ${users[1].cards[1].owner}`, {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                variant: 'success'
            })
        } else {
            enqueueSnackbar('Неверный ПИН', {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                variant: 'error'
            })
        }
    }

    return (
        <Layout>
            <h3>Выберите карту</h3>
            <Input
                label="Введите ПИН"
                button="Подтвердить"
                onSubmit={handleSubmit}
                onChange={handleChange}/>
            <Cards />
        </Layout>
    );
};

export default Home;
