import React, {useCallback, useState} from 'react';
import s from './Counter.module.css'
import {Button} from "../Button/Button";
import Display from "../Display/Display";
import Settings from "../Settings/Settings";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [settings, setSettings] = useState(false)
    const increaseCountHandler = () => {
        setCounter(counter + 1)
    }
    const resetCountHandler = () => {
        setCounter(0)
    }
    const settingsHandler = () => {
        setSettings(!settings)
    }

    const settingsHandlerBtn = useCallback(settingsHandler,[settings])
    return (
        <div className={s.counter}>
            {!settings ? <Display counter={counter}/> : <Settings/>}

            <div className={s.buttonWrapper}>
                {!settings && <Button onClick={increaseCountHandler} name={'inc'}/>}
                {!settings && <Button onClick={resetCountHandler} name={'reset'}/>}
            <Button onClick={settingsHandlerBtn} name={'set'}/>
        </div>
</div>
)
    ;
};

export default Counter;