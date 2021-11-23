import React, {FC} from 'react';
import {InputProps} from "../../types/input";
import s from './Input.module.scss'

const Input: FC<InputProps> = ({label, button, onSubmit, onChange}) => {
    return (
        <form onSubmit={onSubmit} className={s.form}>
            <div className={s.input}>
                <label htmlFor="input">{label}</label>
                <input id="input" type="text" pattern="[0-9]*" min="1" required onChange={onChange}/>
            </div>
            <button type="submit" className={s.submitBtn}>{button}</button>
        </form>
    );
}

export default Input;
