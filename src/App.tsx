import React, {useCallback} from 'react';
import './App.css';
import s from "./App.module.css";
import {Display} from "./components/Display/Display";
import {Settings} from "./components/Settings/Settings";
import {Button} from "./components/Button/Button";
import {
    changeMaxValAC, changeStartValAC,
    increaseCountAC,
    resetCountAC, StateType,
    toggleSetMenuAC
} from "./reducer/reducer";
import {AppStoreType} from "./store/store";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const state = useSelector<AppStoreType, StateType>(store => store.state)
    const dispatch = useDispatch()
//const maxValue = useSelector<StateType, number>((state) => state.counter.maxValue)

    const increaseCountHandler = useCallback(() => dispatch(increaseCountAC())
        , [state.settings])

    const resetCountHandler = useCallback(() => dispatch(resetCountAC()), [state.settings])

    const settingsHandler = useCallback(() => {
        dispatch(toggleSetMenuAC())
    }, [state.settings])

    const onChangeMaxValHandler = useCallback((value: string) => {
        dispatch(changeMaxValAC(value))
    }, [state.maxValue])

    const onChangeStartValHandler = useCallback((value: string) => {
        dispatch(changeStartValAC(value))
    }, [state.startValue])
    const isDisable = state.counter >= state.maxValue

    return (
        <div className="App">
            <div className={s.counter}>
                {!state.settings ?
                    <Display isDisable={isDisable} counter={state.counter}/> :
                    <Settings isError={state.isError} maxVal={state.maxValue}
                              startVal={state.startValue} onChangeMaxValHandler={onChangeMaxValHandler}
                              onChangeStartValHandler={onChangeStartValHandler}/>}

                <div className={s.buttonWrapper}>
                    {!state.settings &&
                        <Button isDisable={isDisable} onClick={increaseCountHandler} name={'inc'}/>}
                    {!state.settings && <Button onClick={resetCountHandler} name={'reset'}/>}
                    <Button isDisable={state.isError} onClick={settingsHandler} name={'set'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
