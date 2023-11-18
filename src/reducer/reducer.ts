import {loadFromLocalStorage, saveToLocalStorage} from "../store/localStorage";

export type StateType = {
    counter: number
    startValue: number
    maxValue: number
    isError: boolean
    settings: boolean
}

const cV = loadFromLocalStorage('currentVal')
const sV = loadFromLocalStorage('startVal')
const mV = loadFromLocalStorage('maxVal')

const initialState: StateType = {
    counter: cV ? cV : 0,
    startValue: sV ? sV : 0,
    maxValue: mV ? mV : 5,
    isError: false,
    settings: false
}

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREASE_COUNT': {
            const nextVal = state.counter + 1
            let value = state.maxValue
            if (nextVal <= value) {
                saveToLocalStorage('currentVal', nextVal)
                value = nextVal
            }
            return {...state, counter: value}
        }
        case 'RESET_COUNT': {
            saveToLocalStorage('currentVal', state.startValue)
            return {...state, counter: state.startValue}
        }
        case 'CHANGE_MAX_VAL': {
            const maxVal = +action.value
            saveToLocalStorage('maxVal', maxVal)
            if (maxVal > state.startValue && maxVal > 0 && state.startValue >= 0) {
                return {...state, maxValue: maxVal, isError: false}
            } else return {...state, maxValue: maxVal, isError: true}
        }

        case 'CHANGE_START_VAL': {
            const startVal = +action.value
            saveToLocalStorage('startVal', startVal)
            if (startVal < state.maxValue && startVal >= 0) {
                return {...state, startValue: startVal, isError: false}
            } else return {...state, startValue: startVal, isError: true}
        }
        case 'TOGGLE_SET_MENU':
            saveToLocalStorage('currentVal', state.startValue)
            return state.settings ? {
                ...state,
                counter: state.startValue,
                settings: !state.settings
            } : {
                ...state,
                settings: !state.settings
            }
        default:
            return state
    }
}
type ActionType =
    IncreaseCountACType
    | ResetCountACType
    | ChangeMaxValACType
    | ChangeStartValACType
    | ToggleSetMenuACType

type IncreaseCountACType = ReturnType<typeof increaseCountAC>
export const increaseCountAC = () => {
    return {
        type: 'INCREASE_COUNT',
    } as const
}

type ResetCountACType = ReturnType<typeof resetCountAC>
export const resetCountAC = () => {
    return {
        type: 'RESET_COUNT',
    } as const
}

type ChangeMaxValACType = ReturnType<typeof changeMaxValAC>
export const changeMaxValAC = (value: string) => {
    return {
        type: 'CHANGE_MAX_VAL',
        value: value
    } as const
}

type ChangeStartValACType = ReturnType<typeof changeStartValAC>
export const changeStartValAC = (value: string) => {
    return {
        type: 'CHANGE_START_VAL',
        value: value
    } as const
}

type ToggleSetMenuACType = ReturnType<typeof toggleSetMenuAC>
export const toggleSetMenuAC = () => {
    return {
        type: 'TOGGLE_SET_MENU',
    } as const
}

