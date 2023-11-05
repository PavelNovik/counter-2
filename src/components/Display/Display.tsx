import React from 'react';
import s from './Display.module.css'


type DisplayPropsType = {
    counter: number
}
const Display: React.FC<DisplayPropsType> = (props) => {
    return (
        <div className={s.display}>
            {props.counter}
        </div>
    );
};

export default Display;