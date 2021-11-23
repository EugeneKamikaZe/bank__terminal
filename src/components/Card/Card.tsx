import React, {useState} from 'react';
import s from "./Card.module.scss";
import {CardProps} from "../../types/card";
import cn from "classnames";

const Card: React.FC<CardProps> = ({owner, pin, total}) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(prev => !prev)
    }

    return (
        <div className={cn(s.card, {[s.active]: active})} onClick={handleClick}>
            <p><b>Owner:</b> {owner}</p>
            <p><b>Pin:</b> {pin}</p>
            <p><b>Balance:</b> {total}</p>
        </div>
    );
};

export default Card;
