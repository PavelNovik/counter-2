export const loadFromLocalStorage = (key: string) => {
    try {
        const state = localStorage.getItem(key)
        return state ? JSON.parse(state) : undefined
    } catch (err) {
        return undefined
    }
}

export const saveToLocalStorage = (key: string, value: number) => {
    try {
        const state = JSON.stringify(value)
        localStorage.setItem(key, state)
    } catch {}
}