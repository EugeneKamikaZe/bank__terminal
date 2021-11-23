import React from 'react';
import s from './Change.module.scss'
import Layout from "../Layout/Layout";
import {useNavigate} from "react-router-dom";
import ClientCard from "../ClientCard/ClientCard";

const Change: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        if (e.currentTarget.dataset.change === 'deposit') {
            navigate('/deposit')
        } else if (e.currentTarget.dataset.change === 'get') {
            navigate('/get')
        }
    }

    return (
        <>
            <Layout>
                <div className={s.wrapper}>
                    <button data-change="deposit" className={s.deposit} onClick={handleClick}>Внести</button>
                    <button data-change="get" className={s.get} onClick={handleClick}>Снять</button>
                </div>
            </Layout>
            <ClientCard/>
        </>
    );
};

export default Change;
