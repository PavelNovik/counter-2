import React from 'react';
import s from './Display.module.css'


type DisplayPropsType = {
    counter: number
    isDisable: boolean
}
export const Display: React.FC<DisplayPropsType> = (props) => {
    return (
        <div className={props.isDisable? s.display + ' ' + s.isDisable : s.display}>
            {props.counter}
        </div>
    );
};

