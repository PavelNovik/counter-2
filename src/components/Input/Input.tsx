import React, {ChangeEvent} from 'react';
import s from './Input.module.css';

type InputPropsType = {
    id: string
    title: string
    value: number
    isError: boolean
    onChange: (value: string) => void
}

const InputS: React.FC<InputPropsType> = (props) => {
    // console.log('inp')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }

    return (
        <div className={s.inputContainer}>
            <label htmlFor={props.id} >{props.title}</label>
            <input className={props.isError ? s.isError : ''} onChange={onChangeHandler} value={props.value} id={props.id} type={"number"}/>
        </div>
    );
};
export const Input = React.memo(InputS)

