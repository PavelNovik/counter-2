import React, {useCallback, useEffect, useReducer, useState} from 'react';
import './App.css';
import s from "./App.module.css";
import {Display} from "./components/Display/Display";
import {Settings} from "./components/Settings/Settings";
import {Button} from "./components/Button/Button";
import {
    changeMaxValAC, changeStartValAC,
    counterReducer,
    getStateAC,
    increaseCountAC,
    resetCountAC,
    toggleSetMenuAC
} from "./reducer/reducer";
import {store} from "./store/store";
function App() {
//const dispatch = useDispatch()
//const maxValue = useSelector<StateType, number>((state) => state.counter.maxValue)
    const [state, dispatchState] = useReducer(counterReducer, store)

    // const [counter, setCounter] = useState(0)
    // const [settings, setSettings] = useState(false)
    // const [maxVal, setMaxVal] = useState(0)
    // const [startVal, setStartVal] = useState(2)
    // const [isError, setIsError] = useState(false)
    // const [isDisable, setIsDisable] = useState(false)
    useEffect(() => {
        // const cV = localStorage.getItem('currentVal')
        // const sV = localStorage.getItem('startVal')
        // const mV = localStorage.getItem('maxVal')
        // if (cV) {
        //     setCounter(JSON.parse(cV))
        //
        // }
        // if (sV) {
        //     setStartVal(JSON.parse(sV))
        // }
        // if (mV) {
        //     setMaxVal(JSON.parse(mV))
        // }
        dispatchState(getStateAC())
    }, [])

    // useEffect(() => {
    //     localStorage.setItem('currentVal', JSON.stringify(counter))
    //     localStorage.setItem('maxVal', JSON.stringify(maxVal))
    //     localStorage.setItem('startVal', JSON.stringify(startVal))
    //     const sV = localStorage.getItem('startVal')
    //     if (settings && sV) {
    //         setCounter(JSON.parse(sV))
    //     }
    //     if (startVal < 0 || maxVal < 1 || maxVal <= startVal) {
    //         setIsError(true)
    //     } else setIsError(false)
    //     if (counter >= maxVal) {
    //         setIsDisable(true)
    //     } else setIsDisable(false)
    // }, [counter, maxVal, startVal, settings])

    // const increaseCountHandler = useCallback(() => {
    //     setCounter(counter + 1)
    // }, [counter])
    const increaseCountHandler = useCallback(() => dispatchState(increaseCountAC())
        , [state.settings])
    // const resetCountHandler = useCallback(() => {
    //     setCounter(startVal)
    // }, [settings])
    const resetCountHandler = useCallback(() => dispatchState(resetCountAC()), [state.settings])
    // const settingsHandler = useCallback(() => {
    //     setSettings(!settings)
    // }, [settings])
    const settingsHandler = useCallback(() => {
        dispatchState(toggleSetMenuAC())
    }, [state.settings])
    // const onChangeMaxValHandler = useCallback((value: string) => {
    //     setMaxVal(+value)
    // }, [maxVal])
    const onChangeMaxValHandler = useCallback((value: string) => {
        dispatchState(changeMaxValAC(value))
    }, [state.maxValue])
    // const onChangeStartValHandler = useCallback((value: string) => {
    //     setStartVal(+value)
    // }, [startVal])
    const onChangeStartValHandler = useCallback((value: string) => {
        dispatchState(changeStartValAC(value))
    }, [state.startValue])

    return (
        <div className="App">
            <div className={s.counter}>
                {!state.settings ?
                    <Display isDisable={state.isDisable} counter={state.counter}/> :
                    <Settings isError={state.isError} maxVal={state.maxValue}
                              startVal={state.startValue} onChangeMaxValHandler={onChangeMaxValHandler}
                              onChangeStartValHandler={onChangeStartValHandler}/>}

                <div className={s.buttonWrapper}>
                    {!state.settings && <Button isDisable={state.isDisable} onClick={increaseCountHandler} name={'inc'}/>}
                    {!state.settings && <Button onClick={resetCountHandler} name={'reset'}/>}
                    <Button isDisable={state.isError} onClick={settingsHandler} name={'set'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
