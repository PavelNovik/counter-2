import React from 'react';
import s from './Button.module.css'


type ButtonPropsType = {
    name: string
    isDisable?: boolean
    onClick: ()=> void
}
const ButtonS: React.FC<ButtonPropsType> = (props) => {
    // console.log('btn' + ` ${props.name}`)
    return (
        <button disabled={props.isDisable} className={s.button} onClick={props.onClick}>{props.name}</button>
    );
};
export const Button = React.memo(ButtonS)


