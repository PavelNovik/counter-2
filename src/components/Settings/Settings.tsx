import React from 'react';
import s from './Settings.module.css'
import {Input} from "../Input/Input";

type SettingsPropsType = {
    maxVal: number
    startVal: number
    isError: boolean
    onChangeMaxValHandler: (value: string)=> void
    onChangeStartValHandler: (value: string)=> void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    return (
        <div className={s.settings}>
            <Input isError={props.isError} onChange={props.onChangeMaxValHandler} id={'maxVal'} value={props.maxVal} title={'max value:'}/>
            <Input isError={props.isError} onChange={props.onChangeStartValHandler} id={'startVal'} value={props.startVal} title={'start value:'}/>
        </div>
    );
};

