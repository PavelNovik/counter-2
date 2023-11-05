import React from 'react';
import s from './Button.module.css'


type ButtonPropsType = {
    name: string
    onClick: ()=> void
}
const ButtonS: React.FC<ButtonPropsType> = (props) => {
    console.log('btn')
    return (
        <button className={s.button} onClick={props.onClick}>{props.name}</button>
    );
};
export const Button = React.memo(ButtonS)


