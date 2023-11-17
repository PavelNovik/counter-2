export type StateType = {
    counter: number
    startValue: number
    maxValue: number
    isError: boolean
    isDisable: boolean
    settings: boolean
}
const initialState: StateType = {
    counter: 0,
    startValue:0,
    maxValue: 5,
    isError: false,
    isDisable:false,
    settings: false
}

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREASE_COUNT': {
            const nextVal = state.counter + 1
            if (nextVal < state.maxValue) {
                localStorage.setItem('currentVal', JSON.stringify(nextVal))
                return {...state, counter: nextVal, isDisable: false}
            } else return {...state, counter: state.maxValue, isDisable: true}
        }
        case 'RESET_COUNT': {
            localStorage.setItem('currentVal', JSON.stringify(state.startValue))
            return {...state, counter: state.startValue, isDisable: false}
        }
        case 'CHANGE_MAX_VAL': {
            const maxVal = +action.payload.value
            localStorage.setItem('maxVal', JSON.stringify(maxVal))
            if (maxVal > state.startValue && maxVal > 0) {
                return {...state, maxValue: maxVal, isError: false}
            } else return {...state, maxValue: maxVal, isError: true}
        }

        case 'CHANGE_START_VAL': {
            const startVal = +action.payload.value
            localStorage.setItem('startVal', JSON.stringify(startVal))
            if (startVal < state.maxValue && startVal >= 0) {
                return {...state, startValue: startVal, isError: false}
            } else return {...state, startValue: startVal, isError: true}
        }
        case 'TOGGLE_SET_MENU':
            localStorage.setItem('currentVal', JSON.stringify(state.startValue))
            return state.settings ? {...state, counter: state.startValue, isDisable: false, settings: !state.settings} : {
                ...state,
                settings: !state.settings
            }
        case 'GET_STATE':
            const cV = localStorage.getItem('currentVal')
            const sV = localStorage.getItem('startVal')
            const mV = localStorage.getItem('maxVal')

            return {
                ...state,
                counter: cV ? +cV : state.counter,
                maxValue: mV ? +mV : state.maxValue,
                startValue: sV ? +sV : state.startValue
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
    | GetStateAC


type IncreaseCountACType = ReturnType<typeof increaseCountAC>
export const increaseCountAC = () => {
    return {
        type: 'INCREASE_COUNT',
        payload: {}
    } as const
}

type ResetCountACType = ReturnType<typeof resetCountAC>
export const resetCountAC = () => {
    return {
        type: 'RESET_COUNT',
        payload: {}
    } as const
}

type ChangeMaxValACType = ReturnType<typeof changeMaxValAC>
export const changeMaxValAC = (value: string) => {
    return {
        type: 'CHANGE_MAX_VAL',
        payload: {
            value: value
        }
    } as const
}

type ChangeStartValACType = ReturnType<typeof changeStartValAC>
export const changeStartValAC = (value: string) => {
    return {
        type: 'CHANGE_START_VAL',
        payload: {
            value: value
        }
    } as const
}

type ToggleSetMenuACType = ReturnType<typeof toggleSetMenuAC>
export const toggleSetMenuAC = () => {
    return {
        type: 'TOGGLE_SET_MENU',
        payload: {}
    } as const
}
type GetStateAC = ReturnType<typeof getStateAC>

export const getStateAC = () => {
    return {
        type: 'GET_STATE',
        payload: {}
    } as const
}
