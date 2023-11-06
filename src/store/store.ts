export type StateType = {
    counter: number
    startValue: number
    maxValue: number
    isError: boolean
    isDisable: boolean
    settings: boolean
}
export const store: StateType = {
    counter: 0,
    startValue:0,
    maxValue: 5,
    isError: false,
    isDisable:false,
    settings: false
}